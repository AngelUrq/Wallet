<template>
  <div class="container">
    <table class="table">
    <thead>
      <tr>
      <th>{{groupBy}}</th>
      <th v-for="(column, index) in columns" v-bind:key="index">
        {{column}}
      </th>
      </tr>
    </thead>
    <tbody>
      <template v-for="group in tableDataArray">
        <tr v-for="(row, idx) in group.transactions" v-bind:key="idx">
            <td class="groupedby"><span v-if="idx == 0">{{group.value}}</span></td>
            <td v-for="(column, index) in columns" v-bind:key="index">
              {{row[column]}}
            </td>
        </tr>
      </template>
    </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Table',
  data () {
    return {
      tableDataArray: []
    }
  },
  props: {
    accountData: Object,
    groupBy: String,
    columns: Array
  },
  methods: {
    generateTableDataArrayStructure () {
      var incomesValuesForGroupBy = this.accountData.incomes.map(income => income[this.groupBy])
      var expensesValuesForGroupBy = this.accountData.expenses.map(expense => expense[this.groupBy])
      var transactionsValuesForGroupBy = incomesValuesForGroupBy.concat(expensesValuesForGroupBy)
      var uniqueValuesForGroupBy = [...new Set(transactionsValuesForGroupBy)]

      for (var i = 0; i < uniqueValuesForGroupBy.length; i++) {
        var filteredIncomeData = this.accountData.incomes.filter(income => income[this.groupBy] === uniqueValuesForGroupBy[i])
        var filteredExpenseData = this.accountData.expenses.filter(expense => expense[this.groupBy] === uniqueValuesForGroupBy[i])
        var setOfFilteredValues = filteredIncomeData.concat(filteredExpenseData)

        var valuesForGroup = { value: uniqueValuesForGroupBy[i], transactions: setOfFilteredValues }
        this.tableDataArray.push(valuesForGroup)
      }
    }
  },
  beforeMount () {
    this.generateTableDataArrayStructure()
  }
}
</script>

<style scoped>

</style>
