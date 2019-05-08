<template>
  <div>
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
    <div class="row justify-content-around">
      <div class="col-5">
        <h2 class="text-center mt-4">{{title}}</h2>
     <form>
      <div class="form-group">
       <label> <b>Name</b></label>
       <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter Name">
      </div>
      <div class="form-group">
       <label for="exampleInputPassword1"> <b>Category</b> </label>
       <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" v-model="category" >
        <option v-for="option in options" :key="option.name">{{option.name}}</option>
       </select>
     </div>
    <div class="form-group">
      <label> <b>Amount BS</b> </label>
      <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount">
    </div>
    <label for="party">Choose the date of the transaction :</label>
     <input type="date" class="ml-3" id="party" name="party" style="width:500px; text-align: center;" v-model="date">
     <br/>
     <div class="text-center mt-4">
       <button type="button" class="btn btn-primary" v-on:click="register()">Register Transaction</button>
     </div>
     <div class="alert alert-warning" role="alert" id='failcategory' v-if="false">
         Missing data to complete register category!
      </div>
      <div class="alert alert-success" role="alert" id= 'succescategory' v-if="false">
          Register category complete
      </div>
</form>
      </div>
      <div class="col-5">
     <h2 class="text-center mt-4">Register Category</h2>
       <form>
      <div class="form-group">
       <label> <b>Name</b> </label>
       <input  class="form-control" id="exampleInputEmail1"  placeholder="Enter Name" v-model="newCategory">
      </div>
      <div class="text-center mt-4">
      <button type="button" class="btn btn-primary" v-on:click="registerCategory()">Register Category</button>
        </div>

       <div class="alert alert-warning mt-4"  id='failcategory' v-if="categoryFail">
         Missing data to complete register category!
      </div>
      <div class="alert alert-success mt-4"  id= 'succescategory' v-if="categorySuccess">
          Register category complete
      </div>
       </form>
       </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'incomes-expences',
  props: {
    title: {
      type: String,
      default: 'testIncome'
    },
    transfer: {
      type: String,
      default: 'addIncome'
    },
    linkage: {
      type: String,
      default: 'Incomes'
    },
    actualAccount: {
      type: String,
      default: ''
    }

  },
  data () {
    return {
      selected: [], // Must be an array reference!
      options: this.loadCategories(),
      name: '',
      category: '',
      amount: '',
      date: '',
      newCategory: '',
      value: '',
      transactionSuccess: false,
      transactionFail: false,
      categorySuccess: false,
      categoryFail: false
    }
  },
  methods: {
    getActualDate: function () {
      var n = new Date()
      var y = n.getFullYear()
      var m = n.getMonth() + 1
      var d = n.getDate()
      return m + '/' + d + '/' + y
    },
    register: function () {
      if (this.isFormTransactionComplete()) {
        this.$store.dispatch(this.transfer, {
          name: this.name,
          category: this.category,
          amount: this.amount,
          date: this.getActualDate(),
          actualAccount: this.actualAccount
        })
      } else {
      }
    },
    isFormTransactionComplete: function () {
      if (this.name !== '' && this.category !== '' && this.amount !== '' && this.date !== '') {
        return true
      } else {
        return false
      }
    },
    isCategoryTransactionComplete: function () {
      if (this.newCategory !== '') {
        return true
      } else {
        return false
      }
    },
    registerCategory: function () {
      if (this.isCategoryTransactionComplete()) {
        this.$store.dispatch('addCategory', {
          category: this.newCategory,
          linkage: this.linkage
        })
        this.categorySuccess = true
        this.categoryFail = false
      } else {
        this.categorySuccess = false
        this.categoryFail = true
      }
    },
    loadCategories: function () {
      let options = this.$store.state.categories.filter(category => category.linkage === this.linkage)
      return options
    }
  }
}
</script>
