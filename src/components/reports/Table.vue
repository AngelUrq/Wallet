<template>
  <div class="container">
    <table class="table">
    <thead>
        <tr>
        <th>{{type}}</th>
        <th>Account</th>
        <th>Amount</th>
        <th>Category</th>
        </tr>
    </thead>
    <tbody>
        <template v-for="group in dataArray">
        <tr v-for="(row, idx) in group.transactions" v-bind:key="idx">
            <td class="groupedby"><span v-if="idx == 0">{{group.date}}</span></td>
            <td>{{row.account}}</td>
            <td>{{row.category}}</td>
            <td>{{row.amount}}</td>
        </tr>
        </template>
        <tr>
        <td>24/01/2013</td>
        <td>Otto</td>
        <td>1203</td>
        <td>Food</td>
        </tr>
        <tr>
        <td></td>
        <td>Otto</td>
        <td>1203</td>
        <td>Food</td>
        </tr>
    </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Table',
  data () {
    return {
      tableDataArray: [],
      dataArray: [
        {
          date: '14-06-543',
          transactions: [
            {
              account: 'Savings',
              category: 'Food',
              amount: 1234
            },
            {
              account: 'Savings',
              category: 'Entertainment',
              amount: 1234
            }
          ]
        },
        {
          date: '14-06-543',
          transactions: [
            {
              account: 'Savings',
              category: 'Food',
              amount: 1234
            },
            {
              account: 'Savings',
              category: 'Entertainment',
              amount: 1234
            }
          ]
        }
      ]
    }
  },
  props: {
    accountData: Object,
    groupBy: String
  },
  methods: {
    generateTableDataArrayStructure () {
      var allTransactions = this.accountData.income.map(income => income)
      // { name: newAccountName, income: [], expenses: [] }
      console.log(allTransactions)
    }
  },
  beforeMount () {
    this.generateTableDataArrayStructure()
  }
}
</script>

<style scoped>

</style>
