import { browser } from '$app/environment';

export function load() {
	if (browser) {
		return {
			theme: localStorage.getItem('theme') || 'skeleton'
		};
	}
}

export const ssr = false;
export const prerender = true;
