<script>
import { useStore } from "@/stores/store";

export default {
	setup() {
		const store = useStore();
		const calls = store.calls;

		return {
			calls,
		};
	},
};
</script>

<template>
	<div class="journal" v-for="(call, index) in calls" :key="index">
      <p>{{ call.name }}</p>
      <p>{{ call.number }}</p>
      <p>{{ call.time }}</p>
    </div>
</template>
