<script>
import { ref } from "vue";
import { useStore } from "@/stores/store";

export default {
	setup() {
		const name = ref("");
		const number = ref("");

		const addContact = () => {
			const store = useStore();
			const newContact = { name: name.value, number: number.value };
			store.addContact(newContact); 
			name.value = "";
			number.value = "";
		};

		return {
			name,
			number,
			addContact,
		};
	},
};
</script>
<template>
	<form @submit.prevent="addContact">
		<div>
			<label for="name">Name:</label>
			<input id="name" v-model="name" type="text" required />
		</div>
		<div>
			<label for="number">Number:</label>
			<input id="number" v-model="number" type="text" required />
		</div>
		<button type="submit">Add Contact</button>
	</form>
</template>

<style scoped>

    input{
        border: 2px solid var(--color-border);
        border-radius: 15px;
        padding: 8px;
        margin-bottom: 20px;
    }

    template{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button{
        background-color: #00bd7e;
        color: white;
        border: none;
        border-radius: 15px;
        padding: 8px;
        cursor: pointer;
    }
</style>