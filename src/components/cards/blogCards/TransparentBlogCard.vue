<script setup>
import { RouterLink } from 'vue-router';

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
    route: String,
    html: String,
    color: String,
    label: String,
    default: () => null,
  },
});
</script>
<template>
  <div class="card card-plain">
    <div class="card-header p-0 position-relative">
      <a class="d-block blur-shadow-image">
        <img :src="image" :alt="title" class="img-fluid shadow border-radius-lg" loading="lazy" />
      </a>
    </div>
    <div class="card-body px-0">
      <h5>
        <a v-if="action" :href="action.route" class="text-dark font-weight-bold">{{
          title
        }}</a>
        <span v-else>{{
          title
        }}</span>
      </h5>
      <p>
        {{ description }}
      </p>
      <a v-if="action?.html" :href="action.html" class="text-sm icon-move-right" :class="`text-${action.color}`">{{
        action.label }}
        <i class="fas fa-arrow-right text-xs ms-1"></i>
      </a>
      <RouterLink v-if="action?.route" :to="{ name: action.route }" class="text-sm icon-move-right"
        :class="`text-${action.color}`">{{
          action.label }}
        <i class="fas fa-arrow-right text-xs ms-1"></i>
      </RouterLink>
    </div>
  </div>
</template>
