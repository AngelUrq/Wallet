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
            <b-form-input list="my-list-id" v-model="category"></b-form-input>

            <datalist id="my-list-id">
              <option>Manual Option</option>
            </datalist>
          </b-form-group>
        </b-col>

        <b-col cols="4">
          <b-button variant="success" size="lg">Save Category</b-button>
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
      default: 'dasd'
    },
    transfer: {
      type: String,
      required: true,
      default: 'addIncome'
    },
    someIdProp: {
      type: Date,
      required: true,
      default: '12/05/29'
    }
  },
  data () {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' }
      ],
      name: '',
      category: '',
      amount: '',
      date: '',
      actualAccount: 'Savings',
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
        alert('Missing dates' + this.name + this.category + this.amount + this.date)
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
          linkage: this.linkage,
          actualAccount: this.actualAccount
        })
        this.$store.state.accounts.forEach(ac => {
          alert(ac.income[0].date)
        })
      } else {
        alert('Missing dates' + this.name + this.category + this.amount + this.date)
      }
    }

  }
}
</script>
