<template>
  <div>
    <Navbar/>
    <Reports/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Reports from '@/components/reports/Reports.vue'

export default {
  name: 'RportsView',
  components: {
    Navbar,
    Reports,
  },
}
</script>
