<template>
  <div class="container">
    <h1>Account Creator</h1>
    <form>
      <div class="form-group">
        <label for="account name">Insert the account name you want to create</label>
        <input type="text" class="form-control" placeholder="Account name" v-model="accountName">
      </div>
      <button type="button" class="btn btn-success" @click="add">Add</button>
    </form>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'AccountCreator',
  data: function () {
    return {
      accountName: ''
    }
  },
  methods: {
    add: function () {
      this.$store.dispatch('addAccount', this.accountName)
      this.accountName = ''
    }
  }
}
</script>

<style scoped>
.container{
  text-align: center;
}
</style>
