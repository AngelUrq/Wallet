<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>{{groupBy | pascalCase}}</th>
          <th v-for="(column, index) in columns" v-bind:key="index">
            {{column | pascalCase}}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="group in tableDataArray">
          <tr v-for="(row, idx) in group.transactions" v-bind:key="group.value+'row'+idx">
              <td class="groupedby"><span v-if="idx == 0">{{group.value}}</span></td>
              <td v-for="(column, index) in columns" v-bind:key="group.value+'col'+index" :class="row.class">
                {{row[column]}}
              </td>

              <button type="button" class="btn" v-on:click="deleteUser(row)">
                <img :src="getImgUrl('x-button.png')" >
              </button>
          </tr>
        </template>
      </tbody>
    </table>
    <!-- template for the modal component -->
<script type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</script>

<!-- app -->
<div id="app">
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
  </modal>
</div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      tableDataArray: [],
      showModal: false,
    }
  },
  props: {
    accountData: Object,
    groupBy: String,
    columns: Array,
  },
  methods: {
    generateTableDataArrayStructure() {
      const incomesValuesForGroupBy = this.accountData.income.map((income) => income[this.groupBy])
      const expensesValuesForGroupBy = this.accountData.expenses.map((expense) => expense[this.groupBy])
      const transactionsValuesForGroupBy = incomesValuesForGroupBy.concat(expensesValuesForGroupBy)
      const uniqueValuesForGroupBy = [...new Set(transactionsValuesForGroupBy)]

      for (let i = 0; i < uniqueValuesForGroupBy.length; i++) {
        const filteredIncomeData = this.accountData.income.filter((income) => income[this.groupBy] === uniqueValuesForGroupBy[i]).slice()

        const filteredExpenseData = this.accountData.expenses.filter((expense) => expense[this.groupBy] === uniqueValuesForGroupBy[i]).slice()
        for (let j = 0; j < filteredExpenseData.length; j++) {
          const newObject = JSON.parse(JSON.stringify(filteredExpenseData[j]))
          newObject.amount = -newObject.amount
          filteredExpenseData[j] = newObject
        }

        const setOfFilteredValues = filteredIncomeData.concat(filteredExpenseData)

        for (let j = 0; j < setOfFilteredValues.length; j++) {
          setOfFilteredValues[j].class = setOfFilteredValues[j].amount < 0 ? 'red' : 'green'
        }

        const valuesForGroup = { value: uniqueValuesForGroupBy[i], transactions: setOfFilteredValues }

        this.tableDataArray.push(valuesForGroup)
      }
    },
    getImgUrl(pic) {
      return require('@/assets/' + pic)
    },
    deleteUser(user) {
      if (user.class === 'green') {
        for (let i = 0; i < this.$store.state.actualAccount.income.length; i++) {
          if (this.$store.state.actualAccount.income[i].name === user.name) {
            this.$store.state.actualAccount.income.splice(i, 1)
            this.$localStorage.set('LocalStorageData', JSON.stringify(this.$store.state))
          }
        }
        for (let i = 0; i < this.accountData.income.length; i++) {
          if (this.accountData.income[i].name === user.name) {
            this.accountData.income.splice(i, 1)
          }
        }
        this.tableDataArray = []
        this.generateTableDataArrayStructure()
      } else if (user.class === 'red') {
        for (let i = 0; i < this.$store.state.actualAccount.expenses.length; i++) {
          if (this.$store.state.actualAccount.expenses[i].name === user.name) {
            this.$store.state.actualAccount.expenses.splice(i, 1)
            this.$localStorage.set('LocalStorageData', JSON.stringify(this.$store.state))
          }
        }
        for (let i = 0; i < this.accountData.expenses.length; i++) {
          if (this.accountData.expenses[i].name === user.name) {
            this.accountData.expenses.splice(i, 1)
          }
        }
        this.tableDataArray = []
        this.generateTableDataArrayStructure()
      }
    },
  },
  mounted() {
    this.generateTableDataArrayStructure()
    console.log(this.accountData)
  },
  filters: {
    pascalCase: function(v) {
      if (v.length === 0) {
        return v
      }
      return v[0].toUpperCase() + v.slice(1)
    },
  },

}
</script>

<style scoped>
.red {
  color: red
}
.green {
  color: green
}
</style>
