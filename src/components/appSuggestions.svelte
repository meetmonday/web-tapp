<script>
  const apiUrl = 'https://special-space-tribble-vq5r7xq5qj53wwqv-3000.app.github.dev'
	import { onMount } from 'svelte';
	import AppElement from './appElement.svelte';

	export let category;
	export const latest = 0;

	let data = [];
  $: splPos = 0
  $: splData = data.slice(splPos, splPos+6)

  function showMore() {
    if(splPos<42) splPos += 6
    else splPos = 0
  }



	onMount(() => {
		fetch(`${apiUrl}/rec/${category}/${latest}`)
			.then((e) => e.json())
			.then((e) => {
				data = e;
			});
	});

</script>

<div class="p-4">
	<div class='block bg-tg-section-bg text-tg-section-header-text font-bold mb-3'>Рекомендованные {category}</div>
  {#if data.length}
  <ul>
		{#each splData as item (item.topicId)}
			<AppElement apiUrl={apiUrl} item={item} />
		{/each}
	</ul>
  {:else}
    <ul>
      {#each {length:6} as i}
      <li class="flex py-1 gap-2">
				<div alt="icon" class="w-12 h-12 rounded-lg animate-pulse bg-tg-secondary-bg flex-none" />
				<div class='w-full'>
          <div class='w-3/5 animate-pulse bg-tg-secondary-bg h-6'></div>
          <div class='w-2/5 animate-pulse bg-tg-secondary-bg h-4 mt-2'></div>
        </div>
			</li>
      {/each}
    </ul>
  {/if}
	
  <button class='block w-full rounded bg-tg-button text-tg-button-text p-2 mt-3' on:click|preventDefault={showMore}>Показать еще</button>
</div>
