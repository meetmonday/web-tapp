<script>
	import Star from 'svelte-material-icons/Star.svelte';
	import Gamepad from 'svelte-material-icons/Gamepad.svelte';
	import Apps from 'svelte-material-icons/Application.svelte';
	import Search from 'svelte-material-icons/TextSearch.svelte';
	import TabElement from './TabElement.svelte';
</script>

<div
	class="fixed bg-tg-bg shadow-xl border border-tg-section-separator bottom-4 rounded-xl w-5/6 flex justify-evenly left-0 right-0 mx-auto"
>
	<TabElement link="/" title="Для вас"><Star /></TabElement>
	<TabElement link="/games" title="Игры"><Gamepad /></TabElement>
	<TabElement link="/apps" title="Софт"><Apps /></TabElement>
	<TabElement link="/search" title="Поиск"><Search /></TabElement>
</div>
