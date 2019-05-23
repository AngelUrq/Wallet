<template>
  <div class="container">
    <p>Check one of your accounts: </p>
    <router-link class="router" to="/reports">
      <button id="general" class="account-button btn btn-block m-3 p-3" :class="getColor(0)" @click="chooseAccount(generalAccount)">
        {{ generalAccount.name }}
      </button>
    </router-link>
    <div class="account-list" v-for="(account, index) of accounts" :key="index">
      <router-link class="router" to="/account-main-menu">
        <button :id="account.name" class="account-button btn btn-block m-3 p-3" :class="getColor(index)" @click="chooseAccount(account)">
          {{ account.name }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountList',
  data: function() {
    return {
      accounts: this.$store.state.accounts,
      generalAccount: { name: 'General' },
    }
  },
  methods: {
    chooseAccount: function(account) {
      this.$store.dispatch('selectAccount', account)
    },
    getColor: function(index) {
      let color = ''
      const colorCounter = index % 5

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
    },
  },
}
</script>

<style scoped>
.account-list {
  text-align: center;
}
.router{
  text-decoration: none;
}
</style>
