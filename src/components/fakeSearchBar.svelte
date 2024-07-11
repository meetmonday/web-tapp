<script>
  import SearchIcon from 'svelte-material-icons/Magnify.svelte'
  export let fakeTerm = 'Поиск по названию'
</script>

<a href='/search' class='bg-tg-secondary-bg px-4 py-2 mx-2 mt-4 rounded-xl flex items-center justify-between gap-2'>
  <span class='text-tg-hint'>{fakeTerm}</span>
  <SearchIcon size='24'/>
</a>