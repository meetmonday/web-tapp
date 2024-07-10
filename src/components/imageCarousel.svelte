<script>
	export let images;
</script>

<div class="overflow-x-scroll flex px-4">
	{#each images as image}
		<img class='max-h-64 max-w-64 object-cover rounded-xl mr-1 ' src={image} alt='screenshot' />
	{/each}
</div>
