<script>
	import Star from 'svelte-material-icons/Star.svelte';
	import Gamepad from 'svelte-material-icons/GamepadSquareOutline.svelte';
	import Apps from 'svelte-material-icons/Apps.svelte';
	import Wallet from 'svelte-material-icons/Wallet.svelte';
	import TabElement from './TabElement.svelte';

	import { config } from '../stores'
</script>

{#if $config.isTabsVisible}
<div
	class="fixed bg-tg-bg shadow-xl border border-tg-section-separator bottom-4 rounded-xl w-5/6 flex justify-evenly left-0 right-0 mx-auto"
>
	<TabElement link="/" title="Для вас"><Star size='18'/></TabElement>
	<TabElement link="/games" title="Игры"><Gamepad size='18'/></TabElement>
	<TabElement link="/apps" title="Софт"><Apps size='18'/></TabElement>
	<!-- <TabElement link="/wallet" title="Бонусы"><Wallet size='18'/></TabElement> -->
</div>
{/if}