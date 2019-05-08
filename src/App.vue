<template>
  <div id="app">
    <router-view/>
    <Reports accountName="Testy"></Reports>
  </div>
</template>

<script>
import Reports from '@/components/Reports.vue'
export default {
  components: {
    Reports
  }
}
</script>
