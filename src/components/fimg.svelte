<!-- FadeInImage.svelte -->
<script>
	import { fade } from 'svelte/transition';
	export let src;
	let loaded = false;
</script>

<div class="image-container flex-none">
	{#if loaded}
		<img alt="icon" class="size-14 rounded-lg flex-none" {src} transition:fade={{ duration: 200 }} />
	{:else}
		<img alt="icon" class="size-14 rounded-lg opacity-0" {src} on:load={()=>{ loaded=true }} />
	{/if}
</div>
