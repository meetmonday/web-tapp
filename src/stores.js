import { writable } from 'svelte/store';

export const config = writable({
	isTabsVisible: true,
});

export const searchStore = writable({
	isActive: false,
	term: '',
	results: []
})