<template>
  <div>
    <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="6">{{title}}</b-col>
        <b-col cols="4">Register Category</b-col>
      </b-row>
      <br>
    </b-container>
    <b-container class="bv-example-row1">
      <b-row align-h="around">
        <b-col cols="4">
          <b-form-group label-cols="5" cols="5" label="Name">
            <b-form-input id="input-horizontal" v-model="name"></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="4">
          <b-form-group id="fieldset-horizontal" label-for="input-horizontal">
            <b-form-input id="input-horizontal" v-model="newCategory"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bv-example-row">
      <b-row align-h="around">
        <b-col cols="4">
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label-cols-lg="15"
            label="Category"
            label-for="input-horizontal"
          >
            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
              <b-form-select
                  id="input-3"
                  v-model="category"
                  :options="options"
                  required
                ></b-form-select>
      </b-form-group>
          </b-form-group>
        </b-col>

        <b-col cols="4">
          <b-button variant="success" size="lg" v-on:click="registerCategory()">Save Category</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bv-example-row">
      <b-row align-h="text-center">
        <b-col cols="5">
          <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label-cols-lg="15"
            label="Amount"
            label-for="input-horizontal"
          >
            <b-form-input id="input-horizontal" v-model="amount"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="3">
          <label for="party">Choose the date of the transaction :</label>
        </b-col>
        <input type="date" id="party" name="party" v-model="date">
      </b-row>
    </b-container>
    <br>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="5">
          <b-button variant="success" size="lg" v-on:click="register()">Complete transaction</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'incomes-expences',
  props: {
    title: {
      type: String,
      required: true,
      default: 'testIncome'
    },
    transfer: {
      type: String,
      // required: true,
      default: 'addIncome'
    },
    linkage: {
      type: String,
      // required: true,
      default: 'Incomes'
    },
    actualAccount: {
      type: String,
      // required: true,
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
      newCategory: ''
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
        this.$store.state.accounts.forEach(ac => {
          alert(ac.income[0].date)
        })
      } else {
        alert('Missing data')
      }
    },
    isFormTransactionComplete: function () {
      return this.name !== '' && this.category !== '' && this.amount !== '' && this.date !== ''
    },
    isCategoryTransactionComplete: function () {
      return this.newCategory !== ''
    },
    registerCategory: function () {
      if (this.isCategoryTransactionComplete()) {
        this.$store.dispatch('addCategory', {
          category: this.newCategory,
          linkage: this.linkage,
          actualAccount: this.actualAccount
        })
        this.$store.state.categories.forEach(ac => {
          alert(ac.name + ac.linkage)
        })
      } else {
        alert('Missing data')
      }
    },
    loadCategories: function () {
      let options = []
      let allCategories = this.$store.state.categories.filter(category => category.linkage === this.linkage)
      allCategories.forEach(category => {
        options.push({ text: category.name, value: category.name })
      })
      return options
    }
  }
}
</script>
