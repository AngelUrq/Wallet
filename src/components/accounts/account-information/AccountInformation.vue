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
      const NAMES = this.$store.state.accounts.map((account) => account.name)

      if (!NAMES.includes(this.newAccountName)) {
        this.$store.state.accounts.forEach((element) => {
          if (this.$store.state.actualAccount.name === element.name) {
            element.name = this.newAccountName
            this.$store.state.actualAccount.name = this.newAccountName
          }
        })
      }
    },
    isAnEmptyAccount() {
      return this.$store.state.actualAccount.income.length === 0 && this.$store.state.actualAccount.expenses.length === 0
    },
    deleteAccount() {
      if (this.isAnEmptyAccount()) {
        this.$store.state.accounts.forEach((element, index) => {
          if (this.$store.state.actualAccount.name === element.name) {
            this.$store.state.accounts.splice(index, 1)
            this.$store.state.actualAccount = { name: '', income: [], expenses: [] }
          }
        })
      }
    },
  },
}
</script>

<style>

</style>
