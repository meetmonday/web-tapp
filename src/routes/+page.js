export const load = ({ params }) => {
  return {
      slug: params.slug,
      apiUrl: 'https://api.tboxapp.ru/',
      isTabsVisible: true
  }
}