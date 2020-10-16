<template>
	<div class="container">
		<form @submit.prevent="onSubmit">
			<input type="text" name="search" v-model="text" placeholder="Search for jokes">
			<input type="submit" value="Search Jokes">
		</form>
	</div>
</template>
<script>
	export default {
		name: 'SearchJokes',
		data() {
			return {
				text: ''
			}
		},
		methods: {
			onSubmit() {
				this.$emit('search-text', this.text);
				this.text="";
			}
		}
	}
</script>