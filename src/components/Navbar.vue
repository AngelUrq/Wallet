<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <router-link class="navbar-brand" href="#" to="/account-main-menu">
      <img src="@/assets/wallet.png" width="30" height="30" class="d-inline-block align-top" alt>
      &nbsp;Personal Wallet
    </router-link>
    <form class="form-inline">
      <router-link class="btn btn-outline-success my-2 my-sm-0" to="/">
        <img src="@/assets/exit.png" width="30" height="30">
      </router-link>
    </form>
  </nav>
</template>
