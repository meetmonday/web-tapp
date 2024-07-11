<script>
	export let images;
</script>

<div class="overflow-x-scroll flex px-4 items-center">
	{#each images as image}
		<img class='h-64 max-w-full object-cover rounded-xl mr-1 ' src={image} alt='screenshot' />
	{/each}
</div>
