<script>
	import AppSuggestions from "../components/appSuggestions.svelte";
	import Banner from "../components/Banner.svelte";

  window.Telegram.WebApp.BackButton.isVisible = false
  window.Telegram.WebApp.MainButton.isVisible = false
	window.showTabs = true

</script>
<AppSuggestions category='apps' />
<hr class='w-full border-tg-section-separator'/>
<AppSuggestions category='games' />
<div class='px-4'>
<Banner>Скачивайте игры и приложения, а&nbsp;потом они появятся здесь</Banner>
</div>