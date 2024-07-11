<script>
	import AppSuggestions from "../components/appSuggestions.svelte";
	import Banner from "../components/Banner.svelte";
	import FakeSearchBar from "../components/fakeSearchBar.svelte";
	import { searchStore } from "../stores";

  $searchStore.results = []
  $searchStore.term = ''
</script>
<FakeSearchBar />
<AppSuggestions category='apps' title='Рекомендованные программы' />
<hr class='w-full border-tg-section-separator'/>
<AppSuggestions category='games' title='Рекомендованные игры' />
<div class='px-4'>
<Banner>Скачивайте игры и приложения, а&nbsp;потом они появятся здесь</Banner>
</div>