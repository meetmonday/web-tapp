<script>
	import Fimg from "./fimg.svelte";
	export let apiUrl, item;
</script>

<a class="flex py-1 gap-2 text-tg-text" href={'/topic/' + item.topicId}>
	<Fimg src={apiUrl + item.imgSrc} />
	<div>
		<div>{item.title}</div>
		<div class="opacity-40 text-sm">{item.tags.slice(0, 3).join(', ')}</div>
	</div>
</a>
