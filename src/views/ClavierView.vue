<script>
import { computed, ref } from "vue";
import { useStore } from "@/stores/store";

export default {
	name: "ClavierView",
	setup() {
		const chiffres = ref([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			["*", 0, "#"],
			["<"],
		]);
		const store = useStore();
		const contacts = store.contacts;
		const typedNumber = ref("");

		const matchingContact = computed(() => {
			return contacts.find(
				(contact) => String(contact.number) === typedNumber.value
			);
		});

		const addNumber = (chiffre) => {
			if (
				typeof chiffre === "number" ||
				chiffre === "*" ||
				chiffre === "#"
			) {
				typedNumber.value += chiffre;
			} else if (chiffre === "<") {
				typedNumber.value = typedNumber.value.slice(0, -1);
			}
		};

		const makeCall = () => {
			if (typedNumber.value.length !== 10) {
				alert("Le numéro doit faire 10 chiffres.");
				return;
			}

			const now = new Date();
			const formattedTime = now.toLocaleString("fr-FR", {
				day: "2-digit",
				month: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
			});

			const call = {
				number: typedNumber.value,
				time: formattedTime,
			};

			store.addCall(call);
			typedNumber.value = "";
		};

		return {
			chiffres,
			addNumber,
			makeCall,
			typedNumber,
			matchingContact,
		};
	},
};
</script>

<template>
	<div class="clavier">
		<input
			v-model="typedNumber"
			type="text"
			placeholder="Taper un numéro"
		/>
		<p v-if="matchingContact">{{ matchingContact.name }}</p>
		<div class="chiffres">
			<div class="ligne" v-for="(ligne, index) in chiffres" :key="index">
				<div
					class="chiffre"
					v-for="(chiffre, indexChiffre) in ligne"
					:key="indexChiffre"
					@click="addNumber(chiffre)"
				>
					{{ chiffre }}
				</div>
			</div>
			<div class="call" @click="makeCall">Appeler</div>
		</div>
	</div>
</template>

<style scoped>
.clavier {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 80px;
}

.ligne {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 50px;
	padding: 20px;
}

.call {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 20px;
}
</style>
