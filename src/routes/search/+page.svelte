<script>
	import AppElement from '../../components/appElement.svelte';
	import Banner from '../../components/Banner.svelte';
	let searchTerm = '';
	let searchInput = '';
	let searchAction = false;
	let data = [];
	let emptyResult = false;

	const apiUrl = 'https://special-space-tribble-vq5r7xq5qj53wwqv-3000.app.github.dev';

	function search() {
		data = [];
		searchAction = true;
		emptyResult = false;
		fetch(`${apiUrl}/search?term=${searchTerm}`)
			.then((e) => e.json())
			.then((e) => {
				emptyResult = false;
				searchAction = false;
				if (e.length) data = e;
				else emptyResult = true;
				searchInput.unfocus();
			});
	}
</script>

<!-- <Banner>searchTerm: {searchTerm}</Banner> -->
<div class="m-4">
	<form class="flex">
		<input
			type="text"
			id="first_name"
			class="bg-tg-bg border-tg-button border-2 rounded-lg w-full p-2 mr-2 h-12"
			placeholder="Поиск не супер, но что-то найдет"
			bind:value={searchTerm}
			bind:this={searchInput}
			on:submit={search}
		/>
		<button class="bg-tg-button text-tg-button-text rounded-lg size-12" on:click={search}>🔍</button>
	</form>
	{#if searchAction}
		<Banner>Ищем {searchTerm}...</Banner>
	{/if}
	{#if emptyResult}
		<Banner>Ничего не найдено, попробуйте другой запрос</Banner>
	{/if}
</div>

<div class="p-4">
	{#each data as item}
		<AppElement {apiUrl} {item} />
	{/each}
</div>
