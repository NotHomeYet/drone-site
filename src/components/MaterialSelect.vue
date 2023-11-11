<script setup>
defineProps({
  id: {
    type: String,
    default: "message",
  },
  rows: {
    type: Number,
    default: 4,
  },
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: [String, Object],
    text: String,
    class: String,
    default: () => ({
      class: "",
    }),
  },
  options: {
    type: [String],
    default: [],
  },
});
</script>
<template>
  <div class="input-group">
    <label v-if="label" :for="id" :class="label.class">{{
      typeof label == "string" ? label : label.text
    }}</label>
    <select name="selection" class="form-control" :id="id" :placeholder="placeholder" :rows="rows">
      <option v-for="i in options.length" :value="options[i - 1]">{{ options[i - 1] }}</option>
    </select>
  </div>
</template>
