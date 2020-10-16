<template>
  <div class="form_container">
    <nuxt-link to="/user-list">users</nuxt-link>
    <form @submit.prevent="addMember">
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" v-model="name">
      </div>
      <div class="form-group">
        <label>email</label>
        <input type="text" name="email" v-model="email">
      </div>
      <div class="form-group">
        <label>Age</label>
        <input type="text" name="age" v-model="age">
      </div>
      <input type="submit" name="submit" value="Generate Team">
    </form>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'

  export default {
    data () {
      return {
        name: "",
        email: "",
        age: ""
      }
    },
    methods: {
      ...mapMutations({
        addUser: "addUser"
      }),
      addMember () {
        let user = {
          name: this.name,
          email: this.email,
          age: this.age
        }
        this.addUser(user)
      }
    }
  }
</script>