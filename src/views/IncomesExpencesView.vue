<template>
  <div>
    <IncomesExpences :title = this.$route.params.title :transfer= this.$route.params.transfer :linkage= this.$route.params.linkage />
  </div>
</template>

<script>

import IncomesExpences from '@/components/IncomesExpences.vue'

export default {
  name: 'incomes-expences-view',
  components: {
    IncomesExpences,
  },
}
</script>
