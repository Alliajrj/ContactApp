import { defineStore } from "pinia";

export const useStore = defineStore({
	id: "mainStore",
	state: () => ({
		contacts: [],
		calls: [],
	}),
	actions: {
		addContact(contact) {
			this.contacts.push(contact);
		},
		addCall(call) {
			this.calls.push(call);
		},
	},
});
