<script setup>
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import CenteredFooter from "@/components/footers/FooterDefault.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

defineProps({
  breadcrumb: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <DefaultNavbar light />
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-12 mx-auto">
        <div class="mb-4 w-100 w-md-50 w-lg-25">
          <Breadcrumbs :routes="breadcrumb" />
          <h3>{{ title }}</h3>
        </div>

        <slot />
      </div>
    </div>
  </div>
  <CenteredFooter />
</template>
