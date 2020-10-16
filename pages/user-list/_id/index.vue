<template>
	<div class="inner_container">
		<p>Inner container eto</p>
		<p>my id is {{$route.params.id}}</p>
		<p v-for="item in member">{{item}}</p>
	</div>
</template>
<script>
	import {mapState} from 'vuex'

	export default {
		computed: {
			...mapState({
				members: state => state.members
			}),
			member () {
				return this.members.find(member => {
					return member.id === this.$route.params.id
				})
			}
		}
	}
</script>