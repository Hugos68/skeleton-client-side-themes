<script lang="ts">
	import '../app.postcss';
	import { AppBar, storePopup, ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	
	export let data;

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const themes = [
		'skeleton',
		'wintry',
		'modern',
		'hamlindigo',
		'rocket',
		'sahara',
		'gold-nouveau',
		'vintage',
		'seafoam',
		'crimson'
	];

	let currentTheme = data.theme;

	const popupCombobox: PopupSettings = {
		event: 'click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};

	$: if (currentTheme) {
		document.body.dataset['theme'] = currentTheme;
		localStorage.setItem('theme', currentTheme);
	}
</script>

<AppBar>
	<button class="btn variant-filled w-48 justify-between" use:popup={popupCombobox}>
		Choose Theme
	</button>
	<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
		<ListBox>
			{#each themes as theme}
				<ListBoxItem bind:group={currentTheme} name="theme" value={theme}>{theme}</ListBoxItem>
			{/each}
		</ListBox>
		<div class="arrow bg-surface-100-800-token" />
	</div>
</AppBar>

<slot />
