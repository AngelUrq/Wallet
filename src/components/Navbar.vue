<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <router-link class="navbar-brand" href="#" :to="homeUrl">
      <img src="@/assets/wallet.png" width="30" height="30" class="d-inline-block align-top" alt>
      &nbsp;Personal Wallet
    </router-link>
    <form class="form-inline">
      <router-link class="btn btn-link my-2 my-sm-0 mr-3" id="settings" v-if="!isGeneral" to="/information">
        Account settings
      </router-link>
      <router-link id="exit" class="btn btn-outline-success my-2 my-sm-0" to="/">
        <img src="@/assets/exit.png" width="30" height="30">
      </router-link>
    </form>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isGeneral: this.$store.state.actualAccount.name === 'General',
      homeUrl: '/account-main-menu',
    }
  },
  mounted() {
    this.homeUrl = this.isGeneral ? '/' : this.homeUrl
  },
}
</script>
