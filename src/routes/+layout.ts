import { browser } from '$app/environment';

export function load() {
	if (browser) {
		return {
			theme: localStorage.getItem('theme') || 'skeleton'
		};
	}
}
