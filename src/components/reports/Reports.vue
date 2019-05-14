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
        <select id="reportType" v-model="selected" class="form-control" @change="clearVariables">
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
    <div class="row" v-if="dateError" id="dateError">
      <div class="alert alert-warning mt-4">
          Please insert valid start and end dates
      </div>
    </div>
    <div class="text-center">
        <button id="showReport" class="btn btn-success" @click="setDataForReport">Show report</button>
    </div>
    <hr>
    <div id="reportTable" class="row" v-if="showReport">
      <Table :accountData="accountData" :groupBy="selected" :columns="columnsForChild"></Table>
    </div>
  </div>
</template>

<script>
import DateUtils from '@/utils/DateUtils.js'
import Table from '@/components/reports/Table.vue'

export default {
  name: 'Reports',
  data() {
    return {
      selected: 'date',
      showReport: false,
      startDate: undefined,
      endDate: undefined,
      accountData: undefined,
      columns: ['amount', 'name', 'date', 'category'],
      columnsForChild: undefined,
      dateError: false,
      accountName: this.$store.state.actualAccount.name,
    }
  },
  methods: {
    setDataForReport() {
      if (this.validateForm()) {
        this.showReport = true
        this.dateError = false

        this.accountData = this.selected === 'category'
                            ? this.$store.state.actualAccount
                            : this.$store.getters.accountDataByDate(this.startDate, this.endDate)
        this.columnsForChild = [...this.columns]
        const index = this.columnsForChild.indexOf(this.selected)
        this.columnsForChild.splice(index, 1)
      } else {
        this.dateError = true
      }
    },
    validateForm() {
      if (this.selected === 'category') {
        return true
      }
      return DateUtils.areDatesValid(this.startDate, this.endDate)
    },
    clearVariables() {
      this.showReport = false
      this.dateError = false
    },
  },
  components: {
    Table,
  },
}
</script>

<style scoped>

</style>
