<script>
	import AppElement from '../../components/appElement.svelte';
	import Banner from '../../components/Banner.svelte';
	import Search from 'svelte-material-icons/Magnify.svelte';
	import { apiUrl } from '$lib';
	import { searchStore } from '../../stores';

	let searchInput = null;
	let emptyResult = false;
	let searchAction = false;

	function search() {
		$searchStore.results = [];
		searchAction = true;
		emptyResult = false;
		fetch(`${apiUrl}/search?term=${$searchStore.term}`)
			.then((e) => e.json())
			.then((e) => {
				emptyResult = false;
				searchAction = false;
				if (e.length) $searchStore.results = e;
				else emptyResult = true;
				searchInput.unfocus();
			});
	}
</script>

<!-- <Banner>searchTerm: {searchTerm}</Banner> -->
<div>
	<form class="flex mb-2">
		<input
			type="text"
			id="first_name"
			class="bg-tg-secondary-bg rounded-xl w-full px-4 py-2 mx-2 mt-4 text-tg-text"
			placeholder="Поиск по названию"
			bind:value={$searchStore.term}
			bind:this={searchInput}
			on:submit={search}
			autofocus
		/>
		<button class="bg-tg-button text-tg-button-text rounded-xl px-4 py-2 mt-4 mr-2" on:click={search}>
			<Search size='24' />
		</button>
	</form>
	{#if searchAction}
		<Banner>Ищем {$searchStore.term}...</Banner>
	{/if}
	{#if emptyResult}
		<Banner>Ничего не найдено, попробуйте другой запрос</Banner>
	{/if}
</div>

<div class="p-4">
	{#each $searchStore.results as item}
		<AppElement {apiUrl} {item} />
	{/each}
</div>
