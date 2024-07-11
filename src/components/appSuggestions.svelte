<script>
	import { apiUrl } from '$lib';
	import { onMount } from 'svelte';
	import AppElement from './appElement.svelte';

	export let category;
  export let title = 'Рекомендации'
	export const latest = 0;

	let result = [];

	onMount(() => {
		fetch(`${apiUrl}/rec/${category}/${latest}`)
			.then((e) => e.json())
			.then((e) => {
				result = e;
			});
	});
</script>

<div class="p-4">
	<div class="block bg-tg-section-bg text-tg-section-header-text font-bold mb-3">
		{title}
	</div>
	{#if result.length}
		<ul class='grid w-auto overflow-x-scroll overflow-y-clip' style='grid-template-columns: repeat(12, minmax(69vw,1fr));'>
			{#each result as item (item.topicId)}
				<AppElement {apiUrl} {item} />
			{/each}
		</ul>
	{:else}
		<ul>
			{#each { length: 4 } as i}
				<li class="flex py-1 gap-2">
					<div alt="icon" class="w-12 h-12 rounded-lg animate-pulse bg-tg-secondary-bg flex-none" />
					<div class="w-full">
						<div class="w-3/5 animate-pulse bg-tg-secondary-bg h-6"></div>
						<div class="w-2/5 animate-pulse bg-tg-secondary-bg h-4 mt-2"></div>
					</div>
				</li>
			{/each}
		</ul>
	{/if}

	<!-- <button
		class="block w-full rounded bg-tg-button text-tg-button-text p-2 mt-3"
		on:click|preventDefault>КНОПКА ПОКА НЕ ПРИДУМАЛ ЗАЧЕМ</button
	> -->
</div>
