<template>
  <div class="container">
    <p>Check one of your accounts: </p>
    <div class="account-list" v-for="(account, index) in accounts" :key="account.name">
      <router-link class="btn btn-block m-3 p-3" :class="getColor(index)" @click="chooseAccount(account.name)" to="/account-main-menu">{{ account.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountList',
  data: function () {
    return {
      accounts: this.$store.state.accounts
    }
  },
  methods: {
    chooseAccount: function (accountName) {
      for (let account of this.accounts) {
        if (account.name === accountName) {
          this.$store.dispatch('selectAccount', account)
          break
        }
      }
    },
    getColor: function (index) {
      let color = ''
      let colorCounter = index % 5

      switch (colorCounter) {
        case 0:
          color = 'btn-success'
          break
        case 1:
          color = 'btn-primary'
          break
        case 2:
          color = 'btn-danger'
          break
        case 3:
          color = 'btn-warning'
          break
        case 4:
          color = 'btn-info'
          break
      }

      return color
    }
  }
}
</script>

<style scoped>
.account-list {
  text-align: center;
}
</style>
