<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    const data = JSON.parse(this.$localStorage.get('LocalStorageData'))
    if (data !== null) {
      for (const account in data.accounts) {
        if (data.accounts.hasOwnProperty(account)) {
          this.$store.dispatch('addAccount', data.accounts[account].name)
          this.$store.dispatch('selectAccount', data.accounts[account])
          console.log(data.accounts[account].income)
          this.$store.dispatch('addIncome', data.accounts[account].income)
        }
      }
      for (const category in data.categories) {
        if (data.categories.hasOwnProperty(category)) {
          this.$store.dispatch('addCategory', {
            category: data.categories[category].name,
            linkage: data.categories[category].linkage,
          })
        }
      }
      this.$store.dispatch('selectAccount', data.actualAccount)
      console.log(JSON.parse(JSON.stringify(this.$store.state)))
    }
  },
}
</script>
