<template>
  <div class="card">
    <div class="container content">
      <div class="d-flex my-1 mt-2">
        <div class="mr-auto p-2">
          <b>Total amount:</b>
        </div>
        <div class="p-2">{{ totalAmount }}</div>
        <div class="p-2">&nbsp;Bs.</div>
      </div>
      <div class="p-2">
        <b>Budget:</b>
      </div>
      <div class="progress my-3">
        <div
          class="progress-bar progress-bar-striped bg-danger"
          role="progressbar"
          style="width: 55%"
        >Ingresos</div>
        <div
          class="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style="width: 45%"
        >Egresos</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  data: function() {
    return {
      totalAmount: 1000,
    }
  },
}
</script>

<style scoped>
.container {
  font-size: 20px;
  padding: 20px;
}
</style>
