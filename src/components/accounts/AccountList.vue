<template>
  <div class="container">
    <p>Check one of your accounts: </p>
    <div class="account-list" v-for="account in accounts" :key="account">
      <button class="btn btn-block m-3 p-3" :class="getColor()">{{ account.name }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountList',
  data: function () {
    return {
      accounts: this.$store.state.accounts,
      colorCounter: 0
    }
  },
  methods: {
    getColor: function () {
      let color = ''

      switch (this.colorCounter) {
        case 0:
          color = 'btn-success'
          break
        case 1:
          color = 'btn-primary'
          break
        case 2:
          color = 'btn-danger'
          break
        case 3:
          color = 'btn-warning'
          break
        case 4:
          color = 'btn-info'
          break
      }

      this.colorCounter = this.colorCounter + 1 === 5 ? 0 : this.colorCounter + 1

      return color
    }
  }
}
</script>

<style scoped>
.account-list {
  text-align: center;
}
</style>
