<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
		<nav>
			<RouterLink to="/">Clavier</RouterLink>
			<RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/journal">Journal</RouterLink>
		</nav>

	<RouterView />
</template>

<style>

nav {
  height: 30px;
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

</style>
