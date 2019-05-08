<template>
  <div>
    <Navbar/>
    <MoneyTransfer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MoneyTransfer from '@/components/accounts/transfer/MoneyTransfer.vue'

export default {
  name: 'transfer',
  components: {
    Navbar,
    MoneyTransfer
  }
}
</script>

<style>

</style>
