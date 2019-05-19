<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    const data = JSON.parse(this.$localStorage.get('LocalStorageData'))
    console.log(data)
    if (data !== null) {
      data.accounts.forEach((account) => {
        this.$store.dispatch('addAccount', account.name)
        this.$store.dispatch('updateAccount', JSON.stringify(account))
      })
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
