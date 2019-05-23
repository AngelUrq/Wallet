<template>
  <div class="container">
    <h1 class="text-center">Account Info</h1>
    <form>
      <div class="form-group">
        <label for="account name">Account name:</label>
        <input type="text" class="form-control" placeholder="Account name" v-model="newAccountName">
      </div>
      <div class="text-center">
        <button id="changeNameButton" type="button" class="btn btn-success mr-3" @click="modifyName">Change name</button>
        <router-link to='/'>
          <button id="deleteAccountButton" type="button" class="btn btn-danger ml-3" @click="deleteAccount">Delete account</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newAccountName: this.$store.state.actualAccount.name,
    }
  },
  methods: {
    modifyName() {
      this.$store.dispatch('modifyAccountName', this.newAccountName)
    },
    isAnEmptyAccount() {
      return this.$store.state.actualAccount.income.length === 0 && this.$store.state.actualAccount.expenses.length === 0
    },
    deleteAccount() {
      if (this.isAnEmptyAccount()) {
        this.$store.dispatch('deleteAccount')
      }
    },
  },
}
</script>

<style>

</style>
