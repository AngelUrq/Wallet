<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-sm">
        <router-link class="btn btn-success mx-auto" :to="{ name: 'incomes-expences-view',params: msg}">
          <img
            src="@/assets/profit.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt
          >
          &nbsp;Income
        </router-link>
      </div>
      <div class="col-sm">
        <button class="btn btn-danger">
          <img src="@/assets/coins.png" width="30" height="30" class="d-inline-block align-top" alt>&nbsp;Expenses
        </button>
      </div>
      <div class="col-sm">
        <button class="btn btn-info">
          <img
            src="@/assets/transaction.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt
          >&nbsp;Transfer
        </button>
      </div>
      <div class="col-sm">
        <button class="btn btn-warning">
          <img
            src="@/assets/rising.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt
          >&nbsp;Report
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Actions',
  data () {
    return {
      msg: 'This is Alis profile'
    }
  }
}
</script>

<style scoped>
.btn {
  width: 230px;
  height: 220px;
  padding: 10px 50px 10px 50px;
  position: relative;
}
.btn .information-button {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
img {
  width: 30px;
  height: 30px;
}
</style>
