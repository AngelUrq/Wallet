<template>
    <div>
        <div class="row justify-content-around">
            <div class="col-5">
                <div class="card p-5 mt-3">
                    <h2 class="text-center mt-4">{{title}}</h2>
                    <form>
                        <div class="form-group">
                            <label> <b>Name</b></label>
                            <input class="form-control" id="name" placeholder="Enter Name" v-model="name">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1"> <b>Category</b> </label>
                            <select class="custom-select mr-sm-2" id="category" v-model="category">
                                <option v-for="option in options" :key="option.name">{{option.name}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label> <b>Amount BS</b> </label>
                            <input type="number" class="form-control" id="amount" placeholder="Enter amount" v-model="amount">
                        </div>
                        <label>Choose the date of the transaction :</label>
                        <input type="date" class="ml-3" id="dateSpace" style="width:500px; text-align: center;"  v-model="date">
                        <br/>
                        <div class="text-center mt-4">
                            <button type="button" id="buttonTransaction" class="btn btn-primary" v-on:click="register()">Register Transaction</button>
                        </div>
                        <div class="alert alert-warning" role="alert" id='transactionFail' v-if="transactionFail">
                           Error transaction!
                        </div>
                        <div class="alert alert-success" role="alert" id='transactionSuccess' v-if="transactionSuccess">
                            Register transaction complete
                        </div>
                    </form>
                </div>
                <div class="card p-5 mt-3">
                    <h2 class="text-center mt-4">Modify {{title}}</h2>
                    <form>
                        <div class="form-group">
                            <label> <b>Select transaction Name</b></label>
                            <select class="custom-select mr-sm-2" id="old-name" v-model="actualName">
                                <option v-for="nametransaction in nametransactions" :key="nametransaction">{{nametransaction}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label> <b>New name</b></label>
                            <input class="form-control" id="new-name" placeholder="Enter  New Name" v-model="newName">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1"> <b> new Category</b> </label>
                            <select class="custom-select mr-sm-2" id="new-category" v-model="newTransCategory">
                              <option v-for="option in options" :key="option.name">{{option.name}}</option>
                            </select>
                        </div>
                        <label>Choose the  new date of the transaction :</label>
                        <input type="date" class="ml-3" id="new-date" style="width:500px; text-align: center;"  v-model="newDate">
                        <div class="form-group">
                            <label> <b>amount</b></label>
                            <input min="0" type ="number" class="form-control" id="new-amount" placeholder="Enter amount" v-model="newAmount">
                        </div>
                        <br/>
                        <div class="text-center mt-4">
                            <button type="button" id="buttonChange" class="btn btn-primary" v-on:click="modifyValues()">Register Changes</button>
                        </div>
                        <div class="alert alert-warning" role="alert" id='changeFail' v-if="modtransactionFail">
                           Error to modify transaction!
                        </div>
                        <div class="alert alert-success" role="alert" id='changeSuccess' v-if="modtransactionSucces">
                            Register  complete
                        </div>
                    </form>
                </div>

            </div>
            <div class="col-5">
                <div class="card card-category p-5 mt-3">
                    <h2 class="text-center mt-4">Register Category</h2>
                    <form>
                        <div class="form-group">
                            <label> <b>Name</b> </label>
                            <input class="form-control" id="categoryRegister" placeholder="Enter Name" v-model="newCategory">
                        </div>
                        <div class="text-center mt-4">
                            <button type="button"
                            id="buttonCategory"
                            class="btn btn-primary"
                            v-on:click="registerCategory()">Register Category</button>
                        </div>

                        <div class="alert alert-warning mt-4" id='categoryFail' v-if="categoryFail">
                            Missing or repeat data to complete register category!
                        </div>
                        <div class="alert alert-success mt-4" id='categorySuccess' v-if="categorySuccess">
                            Register category complete
                        </div>
                    </form>
                    <div class="text-center">
                        <img class="mt-5" src="@/assets/money.png" alt="" width="100px" height="100px">
                    </div>
                </div>

                </div>
            </div>
        </div>
</template>

<script>
import IncomeExpensesUtils from '@/utils/IncomeExpensesUtils.js'
export default {
  name: 'incomes-expences',
  props: {
    title: {
      type: String,
      default: 'defaultTitle',
    },
    transfer: {
      type: String,
      default: 'defaultTransfer',
    },
    linkage: {
      type: String,
      default: 'defaultLinkage',
    },
  },
  data() {
    return {
      selected: [], // Must be an array reference!
      options: this.loadCategories(),
      nametransactions: this.loadAlltransactions(),
      name: '',
      category: '',
      amount: '',
      date: '',
      newCategory: '',
      actualName: '',
      newName: '',
      newDate: '',
      newTransCategory: '',
      newAmount: 0,
      transactionSuccess: false,
      transactionFail: false,
      categorySuccess: false,
      categoryFail: false,
      modtransactionSucces: false,
      modtransactionFail: false,
      mountAvailable: 0,
    }
  },
  methods: {
    register: function() {
      if (this.isFormTransactionComplete()) {
        this.$store.dispatch(this.transfer, {
          name: this.name,
          category: this.category,
          amount: this.amount,
          date: this.date,
        })
        this.transactionSuccess = true
        this.transactionFail = false
        this.nametransactions = this.loadAlltransactions()
      } else {
        this.transactionSuccess = false
        this.transactionFail = true
      }
    },
    isFormTransactionComplete: function() {
      let repeatName = true
      let remainAmount = true
      if (this.linkage === 'Incomes') {
        const incomesNames =
        this.$store.state.actualAccount.income.map((income) => income.name)
        if (!incomesNames.includes(this.name)) {
          repeatName = false
        }
      } else if (this.linkage === 'Expenses') {
        const expensesNames =
        this.$store.state.actualAccount.expenses.map((expense) => expense.name)
        if (!expensesNames.includes(this.name)) {
          repeatName = false
        }
        this.mountAvailable = IncomeExpensesUtils.getMountAvailable(this.$store.state.actualAccount)

        if (this.mountAvailable < this.amount) {
          remainAmount = false
        }
      }
      return this.name !== '' && this.category !== '' &&
      this.amount !== '' && this.amount > 0 && this.date !== '' && !repeatName && remainAmount
    },
    isCategoryTransactionComplete: function() {
      let repeatName = true
      const categoryNames =
      this.loadCategories().map((cateoryname) => cateoryname.name)
      if (!categoryNames.includes(this.newCategory)) {
        repeatName = false
      }
      return this.newCategory !== '' && !repeatName
    },
    registerCategory: function() {
      if (this.isCategoryTransactionComplete()) {
        this.$store.dispatch('addCategory', {
          category: this.newCategory,
          linkage: this.linkage,
        })
        this.categorySuccess = true
        this.categoryFail = false
        this.options = this.loadCategories()
      } else {
        this.categorySuccess = false
        this.categoryFail = true
      }
    },
    loadCategories: function() {
      const options =
      this.$store.state.categories.filter((category) =>
        category.linkage === this.linkage && category.name !== 'Transfer')
      return options
    },
    loadAlltransactions: function() {
      if (this.linkage === 'Incomes') {
        const transacionnames =
        this.$store.state.actualAccount.income.map((newincome) =>
          newincome.name)
        return transacionnames
      } else if (this.linkage === 'Expenses') {
        const transacionnames =
        this.$store.state.actualAccount.expenses.map((newexpense) =>
          newexpense.name)
        return transacionnames
      } else {
        return null
      }
    },
    isModificationComplete: function() {
      let repeatName = true
      if (this.linkage === 'Incomes') {
        const incomesNames =
        this.$store.state.actualAccount.income.map((income) => income.name)
        if (!incomesNames.includes(this.newName)) {
          repeatName = false
        }
      } else if (this.linkage === 'Expenses') {
        const expensesNames =
        this.$store.state.actualAccount.expenses.map((expense) => expense.name)
        if (!expensesNames.includes(this.newName)) {
          repeatName = false
        }
      }
      return this.newName !== '' && this.newDate !== '' && !repeatName
    },
    isCorrectValueNumber: function(number) {
      return number >= 0
    },
    modifyValues: function() {
      if (this.isModificationComplete() && this.isCorrectValueNumber(this.newAmount)) {
        if (this.linkage === 'Incomes') {
          this.$store.state.actualAccount.income.forEach((actualIncome) => {
            if (this.actualName === actualIncome.name) {
              actualIncome.name = this.newName
              actualIncome.date = this.newDate
              actualIncome.category = this.newTransCategory
              actualIncome.amount = this.newAmount
              this.modtransactionSucces = true
              this.modtransactionFail = false
              this.nametransactions = this.loadAlltransactions()
            }
          })
        } else if (this.linkage === 'Expenses') {
          this.$store.state.actualAccount.expenses.forEach((actualExpense) => {
            if (this.actualName === actualExpense.name) {
              actualExpense.name = this.newName
              actualExpense.date = this.newDate
              actualExpense.category = this.newTransCategory
              this.modtransactionSucces = true
              this.modtransactionFail = false
              this.nametransactions = this.loadAlltransactions()
            }
          })
        }
      } else {
        this.modtransactionSucces = false
        this.modtransactionFail = true
      }
    },
    setDefaultValues: function(transfer, linkage) {
      this.transfer = transfer
      this.linkage = linkage
    },
  },
}
</script>

<style>
.card-category{
  height: 550px;
}
</style>
