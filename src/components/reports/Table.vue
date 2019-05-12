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
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Table',
  data() {
    return {
      tableDataArray: [],
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
  },
  mounted() {
    this.generateTableDataArrayStructure()
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
