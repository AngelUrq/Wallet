<template>
  <div class="container">
    <h1 class="text-center">Account Creator</h1>
    <form>
      <div class="form-group">
        <label for="account name">Insert the account name you want to create</label>
        <input type="text" class="form-control" placeholder="Account name" v-model="accountName">
      </div>
      <div class="text-center">
        <button type="button" class="btn btn-success" @click="add">Add</button>
      </div>
    </form>
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
