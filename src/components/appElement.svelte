<script>
	import Fimg from "./fimg.svelte";
	export let apiUrl, item;
</script>

<a class="flex py-1 gap-2 text-tg-text w-5/6" href={'/topic/' + item.topicId}>
	<Fimg src={apiUrl + item.imgSrc} />
	<div>
		<div class='max-h-12 text-base overflow-clip'>{item.title}</div>
		<div class="opacity-40 text-xs">{item.tags.slice(0, 3).join(', ')}</div>
	</div>
</a>
