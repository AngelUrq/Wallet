<template>
  <div>
    <b-row align-h="between">
      <b-col cols="5">Incomes</b-col>

      <b-col cols="5">Expences</b-col>
    </b-row>
    <b-row align-h="between">
      <b-form-group label-cols="5" cols="5" label="Enter your name">
        <b-form-input id="input-horizontal"></b-form-input>
      </b-form-group>
      <b-form-group
        id="fieldset-horizontal"
        cols="5"
        label-cols="5"
        label="Enter your name"
        label-for="input-horizontal"
      >
        <b-form-input id="input-horizontal"></b-form-input>
      </b-form-group>
    </b-row>
    <b-row align-h="between">
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="15"
        label-cols="5"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-horizontal"
      >
        <b-form-input list="my-list-id"></b-form-input>

        <datalist id="my-list-id">
          <option>Manual Option</option>
        </datalist>
      </b-form-group>
      <b-button variant="success">Button</b-button>
    </b-row>
    <b-row align-h="start">
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="15"
        label-cols="5"
        description="Let us know your name."
        label="Enter your name"
        label-for="input-horizontal"
      >
        <b-form-input id="input-horizontal"></b-form-input>
      </b-form-group>
      <label>BS</label>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'incomes-expences',
  data () {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' }
      ]
    }
  }
}
</script>
