<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-sm" v-for="action in actions" :key="action.name">
        <router-link class="btn" :class="action.classButton" :to ="action.route" >
          <div class="information-button">
            <img :src="getImgUrl(action.image)" class="d-inline-block align-top" alt>
            &nbsp;{{ action.name }}
          </div>
        </router-link>
         </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Actions',
  data() {
    return {
      actions: [
        {
          name: 'Income',
          image: 'profit.png',
          classButton: 'btn-success',
          route: { name: 'incomes-expences-view', params: { title: 'Incomes', transfer: 'addIncome', linkage: 'Incomes' } },
        },
        {
          name: 'Expenses',
          image: 'coins.png',
          classButton: 'btn-danger',
          route: { name: 'incomes-expences-view', params: { title: 'Expenses', transfer: 'addExpense', linkage: 'Expenses' } },
        },
        {
          name: 'Transfer',
          image: 'transaction.png',
          classButton: 'btn-info',
          route: { name: 'transfer' },
        },
        {
          name: 'Report',
          image: 'rising.png',
          classButton: 'btn-warning',
          route: { name: 'reports' },
        },
      ],
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('@/assets/' + pic)
    },
  },
}
</script>

<style scoped>
.btn {
  width: 230px;
  height: 220px;
  padding: 10px 50px 10px 50px;
  position: relative;
}

.btn .information-button {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

img {
  width: 30px;
  height: 30px;
}
</style>
