<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Reports for: {{accountName}}</h1>
      </div>
    </div>
    <div class="row m-3">
      <div class="col-3">
        <label for="selectType">Select the report type:</label>
      </div>
      <div class="col-9">
        <select v-model="selected" class="form-control">
          <option value="date" selected="selected">By date</option>
          <option value="category">By category</option>
        </select>
      </div>
    </div>
    <div v-if="selected == 'date'" class="row m-3">
      <div class="col-2">
        <label for="startDate">From:</label>
      </div>
      <div class="offset-1 col-3">
        <input type="date" id="startDate" name="startDate" v-model="startDate">
      </div>
      <div class="offset-1 col-2">
        <label for="endDate">To:</label>
      </div>
      <div class="col-3">
        <input type="date" id="endDate" name="endDate" v-model="endDate">
      </div>
    </div>
    <div class="text-center">
        <button class="btn btn-success" @click="setDataForReport">Generate report</button>
    </div>
    <hr>
    <div class="row" v-if="showReport">
      <Table :accountData="accountData" :groupBy="selected" :columns="columnsForChild"></Table>
    </div>
  </div>
</template>

<script>
import Table from '@/components/reports/Table.vue'

export default {
  name: 'Reports',
  data () {
    return {
      selected: 'date',
      showReport: false,
      startDate: new Date(),
      endDate: new Date(),
      accountData: undefined, /* {
        name: 'TestAccount',
        incomes: [
          {
            date: '24/02/2019',
            category: 'Salary',
            name: 'Frebruary',
            amount: 1000,
            actualAccount: 'TestAccount'
          }
        ],
        expenses: [
          {
            date: '24/02/2019',
            category: 'Food',
            name: 'Cookies',
            amount: 12.34,
            actualAccount: 'TestAccount'
          },
          {
            date: '24/02/2019',
            category: 'Food',
            name: 'Milk',
            amount: 15,
            actualAccount: 'TestAccount'
          }
        ]
      }, */
      columns: ['amount', 'name', 'date', 'category'],
      columnsForChild: undefined
    }
  },
  methods: {
    setDataForReport () {
      this.showReport = true
      this.accountData = this.$store.state.actualAccount

      this.columnsForChild = this.columns
      var index = this.columnsForChild.indexOf(this.selected)
      this.columnsForChild.splice(index, 1)
    }
  },
  props: {
    accountName: String
  },
  components: {
    Table
  }
}
</script>

<style scoped>

</style>
