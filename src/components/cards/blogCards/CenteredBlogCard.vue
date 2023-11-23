<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    color: String,
    route: String,
    label: String,
    default: () => null,
  },
});
</script>
<template>
  <div class="card">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a v-if="action" :href="action.route" class="d-block blur-shadow-image">
        <img :src="image" :alt="title" class="img-fluid border-radius-lg" />
      </a>
      <span v-else><img :src="image" :alt="title" class="img-fluid border-radius-lg" /></span>
    </div>
    <div class="card-body text-center">
      <h3 class="font-weight-normal">
        {{ title }}
      </h3>
      <p class="mb-0">
        {{ description }}
      </p>
    </div>
  </div>
</template>
