<template>
  <div class="container">
    <h1 class="text-center">Account Creator</h1>
    <form>
      <div class="form-group">
        <label for="account name">Insert the account name you want to create:</label>
        <input id="accountNameInput" type="text" class="form-control" placeholder="Account name" v-model="accountName">
      </div>
      <div class="text-center">
        <button id="addAccountButton" type="button" class="btn btn-success" @click="add">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AccountCreator',
  data: function() {
    return {
      accountName: '',
    }
  },
  methods: {
    add: function() {
      if (this.accountName !== '') {
        this.$store.dispatch('addAccount', this.accountName)
        this.accountName = ''
      }
    },
    getAccounts: function() {
      return this.$store.state.accounts
    },
  },
}
</script>
