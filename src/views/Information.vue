<template>
  <div>
    <Navbar/>
    <AccountInformation/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import AccountInformation from '@/components/accounts/account-information/AccountInformation.vue'

export default {
  name: 'Information',
  components: {
    Navbar,
    AccountInformation,
  },
}
</script>
