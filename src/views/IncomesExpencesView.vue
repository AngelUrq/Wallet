<template>
  <div>

    <IncomesExpences title= 'testINvomrsexpemce' />
  </div>
</template>

<script>
// @ is an alias to /src
// linkage
// transtype
import IncomesExpences from '@/components/IncomesExpences.vue'

export default {
  name: 'incomes-expences-view',
  props: ['title', 'transfer', 'linkage'],
  data () {
    return {
      welcome: 'This is your profile'
    }
  },
  mounted () {
    if (this.msg) {
      this.welcome = this.msg
    }
  },
  components: {
    IncomesExpences
  }
}
</script>
