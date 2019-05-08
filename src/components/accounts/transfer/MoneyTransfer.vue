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
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="budgetAvailable"
              :value="mountAvailable"
            >
          </div>
        </div>
        <div class="form-group row mx-3">
          <label for="selectedAccount" class="col-sm-3 col-form-label">
            <b>Select the destination account:</b>
          </label>
          <div class="col-sm-9">
            <select class="form-control">
              <option v-for="(account, index) in accounts" :key="index" >{{ account.name }}</option>
            </select>
          </div>
        </div>
        <div class="form-group row mx-3">
          <label for="amount" class="col-sm-3 col-form-label">
            <b>Amount in Bs:</b>
          </label>
          <div class="col-sm-9">
            <input
              type="number"
              class="form-control"
              id="amount"
              placeholder="Enter the amount you wish to transfer"
              min="0"
              v-model="mountTransaction"
            >
          </div>
        </div>
      </form>
    </div>
    <div class="text-center">
      <button class="btn btn-success my-3" @click="getIncomes()">Transfer</button>
    </div>
    <div class="show-alert" v-if="showValidation">
      <div class="alert alert-info" role="alert" v-if="transactionSuccessful">
        <strong>Completed!</strong>
        You transaction was successful
      </div>
      <div class="alert alert-danger" role="alert" v-if="!transactionSuccessful">
        <strong>Important!</strong>
        Please check the data to do the transaction successful
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers'

export default {
  name: 'MoneyTransfer',
  data: function () {
    return {
      accounts: this.$store.state.accounts,
      mountTransaction: 0,
      mountAvailable: this.getMountAvailable(),
      showValidation: false,
      successfulTransaction: true
    }
  },
  mounted () {
    let actualAccount = this.$store.state.actualAccount
    this.accounts = this.accounts.filter(
      account => account.name !== actualAccount.name
    )
  },
  methods: {
    validationData () {
      if (this.checkMountAvailable() && this.checkMountTransaction()) {
        this.updateMount()
        this.transactionSuccessful = true
      } else {
        this.transactionSuccessful = false
      }
      this.showMessage()
    },
    checkMountTransaction () {
      return (
        this.mountTransaction > 0 &&
        this.mountTransaction <= this.mountAvailable
      )
    },
    checkMountAvailable () {
      return this.mountAvailable > 0
    },
    updateMount () {
      this.mountAvailable = this.mountAvailable - this.mountTransaction
    },
    showMessage () {
      this.showValidation = true
      setTimeout(this.disableMessage, 2000)
    },
    disableMessage () {
      this.showValidation = false
    },
    getMountAvailable () {
      return this.getIncomes() - this.getExpenses()
    },
    getIncomes () {
      let listIncome = this.$store.state.actualAccount.income
      let amountIncome = []

      listIncome.forEach(income => {
        amountIncome.push(income.amount)
      })

      return amountIncome.reduce((total, currentValue) => total + currentValue, 0)
    },
    getExpenses () {
      let listExpenses = this.$store.state.actualAccount.expenses
      let amountExpenses = []

      listExpenses.forEach(expense => {
        amountExpenses.push(expense.amount)
      })

      return amountExpenses.reduce((total, currentValue) => total + currentValue, 0)
    }
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
.btn {
  width: 300px;
}
</style>
