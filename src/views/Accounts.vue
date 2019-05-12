<template>
    <div class="m-5">
        <AccountCreator/>
        <AccountList/>
    </div>
</template>

<script>
import AccountCreator from '@/components/accounts/AccountCreator.vue'
import AccountList from '@/components/accounts/AccountList.vue'

export default {
  name: 'accounts',
  components: {
    AccountCreator,
    AccountList,
  },
}
</script>
