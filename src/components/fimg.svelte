<!-- FadeInImage.svelte -->
<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let src;
	let loaded = false;
  function load() {
    loaded = true
  }
</script>

<div class="image-container">
	{#if loaded}
		<img alt="icon" class="size-12 rounded-lg flex-none" {src} transition:fade={{ duration: 200 }} />
	{:else}
		<img alt="icon" class="size-12 rounded-lg opacity-0" {src} on:load={load} />
	{/if}
</div>
