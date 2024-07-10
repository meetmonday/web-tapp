<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	export let link, title;

	const isActive = derived(page, $page => $page.url.pathname === link);
</script>

<a href={link} class="flex flex-col items-center w-full rounded-lg m-1 p-1 text-tg-text" class:tabActive={$isActive} class:text-white={$isActive}>
  <slot/>
  <span class="text-xs">{title}</span>
</a>
