# Skeleton client side themes

This is an example repository to showcase how to get fully client side theme toggling that persists through localstorage.

## Steps

1. Edit your app.html:

```diff
<!doctype html>
<html lang="en" class="dark">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width" />
		%sveltekit.head%
	</head>
     <body data-sveltekit-preload-data="hover" data-theme="skeleton">
+       <script>
+         document.body.dataset['theme'] = localStorage.getItem('theme') ?? 'skeleton';
+       </script>
        <div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
```

2. Toggling

```js
document.body.dataset['theme'] = currentTheme;
localStorage.setItem('theme', currentTheme);
```

Enjoy client side theme switching!
