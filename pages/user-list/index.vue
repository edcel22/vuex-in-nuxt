<template>
  <div class="container">
    <div v-for="member in members">
      {{member.name}}{{member.id}}
      <nuxt-link :to="`/user-list/${member.id}`">view more</nuxt-link>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        // members(state) {
        //   return state.members
        // }
        members: state => state.members
      })
    }
  }
</script>
