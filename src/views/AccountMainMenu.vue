<template>
  <div>
    <Navbar/>
    <Information/>
    <Actions/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Information from '@/components/Information.vue'
import Actions from '@/components/Actions.vue'

export default {
  name: 'account-main-menu',
  components: {
    Navbar,
    Information,
    Actions
  }
}
</script>
