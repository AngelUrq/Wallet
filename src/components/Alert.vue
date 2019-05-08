<template>
  <div class="container text-center">
    <div class="alert" :class="getColor()" role="alert">
      <strong>{{ header }}</strong>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert',
  props: {
    header: String,
    message: String
  },
  data: function () {
    return {
      colorAlert: ''
    }
  },
  methods: {
    getColor () {
      let number = this.generateRandomNumber(0, 3)

      switch (number) {
        case 0:
          this.colorAlert = 'alert-primary'
          break
        case 1:
          this.colorAlert = 'alert-success'
          break
        case 2:
          this.colorAlert = 'alert-info'
          break
        default:
          this.colorAlert = 'alert-secondary'
          break
      }
      return this.colorAlert
    },
    generateRandomNumber (min, max) {
      return Math.floor(Math.random() * ((max + 1) - min) + min)
    }
  }
}
</script>
