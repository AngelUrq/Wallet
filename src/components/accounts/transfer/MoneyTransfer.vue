<template>
  <div class="container mt-3">
    <div class="card">
      <h1>Transfer</h1>
      <form>
        <div class="form-group row mx-3">
          <label for="budgetAvailable" class="col-sm-3 col-form-label">
            <b>Budget available in Bs:</b>
          </label>
          <div class="col-sm-9">
            <input type="text" readonly class="form-control-plaintext" id="budgetAvailable" value="1000">
          </div>
        </div>
        <div class="form-group row mx-3">
          <label for="selectedAccount" class="col-sm-3 col-form-label">
            <b>Select the destination account:</b>
          </label>
          <div class="col-sm-9">
            <select class="form-control">
              <option v-for="account in accounts" :key="account.name">{{ account.name }}</option>
            </select>
          </div>
        </div>
        <div class="form-group row mx-3">
          <label for="amount" class="col-sm-3 col-form-label">
            <b>Amount:</b>
          </label>
          <div class="col-sm-9">
            <input type="number" class="form-control" id="amount" placeholder="Enter the amount you wish to transfer" min="0">
          </div>
        </div>
      </form>
    </div>
    <div class="text-center">
      <button class="btn btn-success my-3">Transfer</button>
    </div>
    <Alert header="Completed!" message="You transaction was successful"/>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'

export default {
  name: 'MoneyTransfer',
  components: {
    Alert
  },
  data: function () {
    return {
      accounts: this.$store.state.accounts
    }
  },
  mounted () {
    let actualAccount = this.$store.state.actualAccount
    this.accounts = this.accounts.filter(account => account.name !== actualAccount.name)
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 10px;
}
form {
  font-size: 15px;
}
.btn{
    width: 300px;
}
</style>
