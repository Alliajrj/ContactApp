<script>
import { useStore } from "@/stores/store";

export default {
	setup() {
		const store = useStore();
		const contacts = store.contacts;

		const makeCall = (contact) => {
			const now = new Date();
			const formattedTime = now.toLocaleString("fr-FR", {
				day: "2-digit",
				month: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
			});
			const call = {
				name: contact.name,
				number: contact.number,
				time: formattedTime,
			};
			store.addCall(call);
		};

		return {
			contacts,
			makeCall,
		};
	},
};
</script>

<template>
	<div class="contact">
		<router-link to="/addcontact">+</router-link>
		<div v-for="(contact, index) in contacts" :key="index">
			<p>Name: {{ contact.name }}</p>
			<p>Number: {{ contact.number }}</p>
			<div class="call" @click="() => makeCall(contact)">Appeler</div>
		</div>
	</div>
</template>
