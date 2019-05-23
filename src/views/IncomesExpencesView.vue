<template>
  <div>
    <navbar></navbar>
    <IncomesExpences :title = this.$route.params.title :transfer= this.$route.params.transfer :linkage= this.$route.params.linkage />
  </div>
</template>

<script>

import IncomesExpences from '@/components/IncomesExpences.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'incomes-expences-view',
  components: {
    Navbar,
    IncomesExpences,
  },
}
</script>
