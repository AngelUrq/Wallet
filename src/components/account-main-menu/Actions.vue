<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-sm">
        <button class="btn btn-success mx-auto">
          <img
            src="@/assets/components/profit.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt
          >
          &nbsp;Income
        </button>
      </div>
      <div class="col-sm">
        <button class="btn btn-danger">
          <img src="@/assets/components/coins.png" width="30" height="30" class="d-inline-block align-top" alt>&nbsp;Expenses
        </button>
      </div>
      <div class="col-sm">
        <button class="btn btn-info">
          <img
            src="@/assets/components/transaction.png"
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
            src="@/assets/components/rising.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt
          >Report
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Actions'
}
</script>

<style scoped>
.btn {
  width: 230px;
  height: 220px;
}
</style>
