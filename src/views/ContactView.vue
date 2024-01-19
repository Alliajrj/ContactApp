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
  <router-link to="/addcontact">+</router-link>
	<div class="contact">
		<div v-for="(contact, index) in contacts" :key="index">
			<p>{{ contact.name }}</p>
			<p>{{ contact.number }}</p>
			<div class="call" @click="() => makeCall(contact)">Appeler</div>
		</div>
	</div>
</template>

<style scoped>
.contact {
  padding: 8px;
  border: 2px solid var(--color-border);
  border-radius: 15px;
}

.call{
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid var(--color-border);
	border-radius: 15px;
	background-color: #00bd7e;
  color: white;
	margin-top: 20px;
	cursor: pointer;
}
</style>
