<script>
	import { onMount } from 'svelte';
	import Fimg from '../../../components/fimg.svelte';
	import ImageCarousel from '../../../components/imageCarousel.svelte';
	import Banner from '../../../components/Banner.svelte';
	import DescriptionElement from '../../../components/descriptionElement.svelte';

	export let data;
	const topicId = data.slug;
	const apiUrl = 'https://special-space-tribble-vq5r7xq5qj53wwqv-3000.app.github.dev';
	let itemData = {};
	let ready = false;
	console.log(topicId);

	onMount(() => {
		fetch(`${apiUrl}/topic/${topicId}`)
			.then((e) => e.json())
			.then((e) => {
				itemData = e;
				ready = true;
			});
	});
</script>

<Banner>Сюда рекламу захуярить и вообще заебись</Banner>
{#if ready}
	<div>
		<div class="flex p-4 gap-4 items-center">
			<Fimg src={apiUrl + '/apk_icons/topic_' + topicId + '_192.png'} size="8" />
			<div>
				<div class="font-bold">{itemData.title}</div>
			</div>
		</div>
		<div class="px-4 mb-4">
			<button class="bg-tg-button text-tg-button-text w-full rounded-2xl p-4">Загрузить через Telegram</button>
		</div>
		<ImageCarousel images={itemData.images} />
		<hr class="m-4" />
		<DescriptionElement text={itemData.description} />
	</div>
{/if}
