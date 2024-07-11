<script>
	import { onMount } from 'svelte';
	import Fimg from '../../../components/fimg.svelte';
	import ImageCarousel from '../../../components/imageCarousel.svelte';
	import Banner from '../../../components/Banner.svelte';
	import DescriptionElement from '../../../components/descriptionElement.svelte';

	import { apiUrl } from '$lib';
	import { config } from '../../../stores';

	import { goto, afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';

	import { FastAverageColor } from 'fast-average-color';
	const fac = new FastAverageColor();

	let previousPage = base;

	afterNavigate(({ from }) => {
		previousPage = from?.url.pathname || previousPage;
	});

	export let data;
	let topicId = data.slug;
	let itemData = {};
	let ready = false;
	let appBanner = ''
	let appTitle = '';

	$config.isTabsVisible = false;

	window.Telegram.WebApp.BackButton.isVisible = true;
	Telegram.WebApp.onEvent('backButtonClicked', () => {
		$config.isTabsVisible = true;
		Telegram.WebApp.offEvent('mainButtonClicked', sendAFlie);
		window.Telegram.WebApp.MainButton.isVisible = false;
		window.Telegram.WebApp.BackButton.isVisible = false;
		window.Telegram.WebApp.setHeaderColor('bg_color')

		goto(previousPage);
	});

	window.Telegram.WebApp.MainButton.text = 'Загрузить через Telegram';
	window.Telegram.WebApp.MainButton.isVisible = true;

	function sendAFlie() {
		window.Telegram.WebApp.MainButton.showProgress();
		const cid = window.Telegram.WebApp.initDataUnsafe.user.id;

		setTimeout(() => {
			fetch(`${apiUrl}/getFile?tid=${data.slug}&cid=${cid}`);
			window.Telegram.WebApp.showAlert(
				'Файлы отправлены в переписку с ботом\n' + `tid: ${data.slug}`
			);

			Telegram.WebApp.offEvent('mainButtonClicked', sendAFlie);
			window.Telegram.WebApp.MainButton.hideProgress();
			window.Telegram.WebApp.MainButton.isVisible = false;
		}, 2000);
	}
	onMount(() => {
		fetch(`${apiUrl}/topic/${topicId}`)
			.then((e) => e.json())
			.then((e) => {
				itemData = e;
				ready = true;

				// fac
				// 	.getColorAsync(apiUrl + '/apk_icons/topic_' + topicId + '_192.png', {algorithm: 'dominant'})
				// 	.then((color) => {
				// 		appBanner.style.backgroundColor = color.hex
				// 		if(color.isDark) appTitle.style.color = 'white'
				// 		window.Telegram.WebApp.setHeaderColor(color.hex)
				// 	})
			});

		Telegram.WebApp.onEvent('mainButtonClicked', sendAFlie);
	});
</script>

<!-- <Banner>Пиздатое место для рекламы цельнометаллического bb-mobile</Banner> -->
{#if ready}
	<div class="text-tg-text">
		<div class="flex flex-col p-4 gap-4" bind:this={appBanner}>
			<img src={apiUrl + '/apk_icons/topic_' + topicId + '_192.png'} alt='icon' class='size-24 rounded-md shadow-md'/>
			<div>
				<div class="font-bold text-3xl" bind:this={appTitle}>{itemData.title}</div>
			</div>
		</div>
		<div class="px-4 mb-4">
			<!-- <button class="bg-tg-button text-tg-button-text w-full rounded-2xl p-4">Загрузить через Telegram</button> -->
		</div>
		<ImageCarousel images={itemData.images} />
		<hr class="m-4" />
		<DescriptionElement text={itemData.description} />
	</div>
{/if}
