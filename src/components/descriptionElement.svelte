<script>
	export let text;
	let expanded = false;
	function toggleExpand() {
		expanded = !expanded;
	}
</script>

{#if !expanded}
	<div class="flex items-baseline justify-between px-4">
		<div class='font-bold'>Описание</div>
		<button
			class="h-8 px-4 text-sm text-tg-link rounded"
			on:click={toggleExpand}>Показать полностью</button
		>
	</div>
	<div class="max-h-28 overflow-hidden px-4 mb-0 rounded-xl">
		{@html text.split('.')[0]}
	</div>
{:else}
<div class="flex items-baseline justify-between px-4">
<div class='font-bold'>Описание</div>
		<button
			class="h-8 px-4 text-sm text-tg-link rounded"
			on:click={toggleExpand}>Свернуть</button
		>
	</div>
	<div class="px-4">
		{@html text}
	</div>
{/if}
