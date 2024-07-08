<script setup>
import logo from "@/assets/img/altitude/logo_big.png";
import { RouterLink } from "vue-router";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "Altitude Droneworks",
      logo: logo,
      route: "presentation",
    }),
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
    ],
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String,
      route: String,
    },
    default: () => [
      {
        name: "company",
        items: [
          {
            name: "about",
            route: "about"
          },
          {
            name: "services",
            route: "services",
          },
        ],
      },

      {
        name: "help & support",
        items: [
          {
            name: "regulation & compliance",
            route: "regulations"
          },
          {
            name: "contact",
            route: "contactus"
          },
        ],
      },
      {
        name: "legal",
        items: [
          {
            name: "terms & conditions",
            route: "terms",
          },
          {
            name: "privacy policy",
            route: "privacy",
          },
        ],
      },

    ],
  },
});
</script>
<template>
  <footer class="footer mt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-5 mb-4 ms-auto">
          <div>
            <RouterLink :to="{ name: brand.route }" class="dropdown-item border-radius-md">
              <img :src="brand.logo" class="mb-3 footer-logo" alt="main_logo" />
            </RouterLink>
            <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li class="nav-item" v-for="{ icon, link } of socials" :key="link">
                <a class="nav-link pe-1" :href="link" v-html="icon">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2 col-sm-6 col-6 mb-4" v-for="{ name, items } of menus" :key="name">
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <a v-if="item.href" class="nav-link" :href="item.href">
                {{ item.name }}
              </a>
              <RouterLink v-if="item.route" class="nav-link" :to="{ name: item.route }">
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright ©
              {{ new Date().getFullYear() }}
              <a href="https://altitudedroneworks.com" target="_blank">Altitude Droneworks</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
