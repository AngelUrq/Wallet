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
        <date-picker v-model="startDate" :config="options"></date-picker>
      </div>
      <div class="offset-1 col-2">
        <label for="endDate">To:</label>
      </div>
      <div class="col-3">
        <date-picker v-model="endDate" :config="options"></date-picker>
      </div>
    </div>
    <div class="text-center">
        <button class="btn btn-success">Generate report</button>
    </div>

    <div>
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
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import DatePicker from 'vue-bootstrap-datetimepicker'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'

export default {
  name: 'Reports',
  data () {
    return {
      selected: 'date',
      startDate: new Date(),
      endDate: new Date(),
      options: {
        format: 'DD/MM/YYYY'
      },

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
    accountName: String
  },
  components: {
    DatePicker
  }
}
</script>

<style scoped>

</style>
