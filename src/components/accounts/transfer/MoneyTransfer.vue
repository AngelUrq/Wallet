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
                        <input type="text" readonly class="form-control-plaintext" id="budgetAvailable" :value="mountAvailable">
                    </div>
                </div>
                <div id="destinations-accounts" class="form-group row mx-3">
                    <label for="selectedAccount" class="col-sm-3 col-form-label">
                        <b>Select the destination account:</b>
                    </label>
                    <div class="col-sm-9">
                        <select id="destinationAccount" class="form-control" v-model="nameDestinationAccount">
                            <option v-for="(account, index) in accounts" :key="index">{{ account.name }}</option>
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
                         min="0" v-model="mountTransaction">
                    </div>
                </div>
            </form>
        </div>
        <div class="text-center">
            <button id="btn-transfer" class="btn btn-success my-3" @click="transfer()">Transfer</button>
        </div>
        <div class="show-alert" v-if="showValidation">
            <div id="msg-successful" class="alert alert-info" role="alert" v-if="transactionSuccessful">
                <strong>Completed!</strong> You transaction was successful.
            </div>
            <div id='msg-error' class="alert alert-danger" role="alert" v-if="!transactionSuccessful">
                <strong>Important!</strong> Please check the data to do the transaction successful.
            </div>
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers'
import DateUtils from '@/utils/DateUtils.js'
import IncomeExpensesUtils from '@/utils/IncomeExpensesUtils.js'

export default {
  name: 'MoneyTransfer',
  data: function() {
    return {
      accounts: this.$store.state.accounts,
      actualAccount: this.$store.state.actualAccount,
      categoryActualAccount: this.$store.state.categories[4].name,
      categoryDestinationAccount: this.$store.state.categories[1].name,
      nameDestinationAccount: '',
      mountTransaction: 0,
      mountAvailable: 0,
      showValidation: false,
      successfulTransaction: true,
    }
  },
  mounted() {
    this.accounts = this.accounts.filter(
        (account) => account.name !== this.actualAccount.name
    )

    this.mountAvailable = IncomeExpensesUtils.getMountAvailable(this.actualAccount)
  },
  methods: {
    checkMountTransaction() {
      return this.mountTransaction > 0 && this.mountTransaction <= this.mountAvailable
    },
    checkMountAvailable() {
      return this.mountAvailable > 0
    },
    checkSelectedDestinationAccount() {
      return this.nameDestinationAccount !== ''
    },
    isFormDataCorrect() {
      return this.checkMountAvailable() && this.checkMountTransaction() && this.checkSelectedDestinationAccount()
    },
    showMessage() {
      this.showValidation = true
      setTimeout(this.disableMessage, 2000)
    },
    disableMessage() {
      this.showValidation = false
    },
    updateMountAvailable() {
      this.mountAvailable = IncomeExpensesUtils.getMountAvailable(this.actualAccount)
    },
    getAccountByName(nameAccount) {
      return (this.accounts.filter((account) => account.name === nameAccount))[0]
    },
    clearMountTransaction() {
      this.mountTransaction = 0
    },
    transfer() {
      if (this.isFormDataCorrect()) {
        const DATE = DateUtils.getActualDate()
        const NAME_TRANSFER_ACTUAL_ACCOUNT = 'Transfer to ' + this.nameDestinationAccount
        const NAME_TRANSFER_DESTINATION_ACCOUNT = 'Transfer from ' + this.actualAccount.name
        const INCOME = { name: NAME_TRANSFER_DESTINATION_ACCOUNT, category: this.categoryActualAccount, amount: this.mountTransaction, date: DATE }
        const EXPENSE = { name: NAME_TRANSFER_ACTUAL_ACCOUNT, category: this.categoryDestinationAccount, amount: this.mountTransaction, date: DATE }
        const DESTINATION_ACCOUNT = this.getAccountByName(this.nameDestinationAccount)

        this.$store.dispatch('addExpense', EXPENSE)

        // First, change to the destination account as the actual account.
        this.$store.dispatch('selectAccount', DESTINATION_ACCOUNT)
        this.$store.dispatch('addIncome', INCOME)

        // Finally, the current account returns to normal and the transaction was successful
        this.$store.dispatch('selectAccount', this.actualAccount)
        this.transactionSuccessful = true
        this.updateMountAvailable()
        this.clearMountTransaction()
      } else {
        this.transactionSuccessful = false
      }

      this.showMessage()
    },
  },
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
