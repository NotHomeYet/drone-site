<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// Auth JS
import { isAuthenticated, login, logout, tokenResult } from '../../shared/auth.js'

// images
import logo from "@/assets/img/altitude/logo_big.png";
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

// User auth
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get("code")
if (code) {
  // Post to the backend to get a token
  fetch("https://altitudedroneworks.auth.us-east-1.amazoncognito.com/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      code,
      "grant_type": "authorization_code",
      "client_id": import.meta.env.VITE_APP_CLIENT_ID,
      "redirect_uri": "http://localhost:3000",
    })
  })
    .then(response => response.json())
    .then(tokenResult);
}

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://www.creative-tim.com/product/vue-material-kit",
      color: "bg-gradient-success",
      label: "Free Download"
    })
  },
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav class="navbar navbar-expand-lg top-0" :class="{
    'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
      props.transparent,
    'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
      props.sticky,
    'navbar-light bg-white py-3': props.light,
    ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
  }">
    <div :class="props.transparent || props.light || props.dark
    ? 'container'
    : 'container-fluid px-0'
    ">
      <RouterLink class="navbar-brand d-none d-md-block" :class="[
    (props.transparent && textDark.value) || !props.transparent
      ? 'text-dark font-weight-bolder ms-sm-3'
      : 'text-white font-weight-bolder ms-sm-3'
  ]" :to="{ name: 'presentation' }" rel="tooltip" title="Altitude Droneworks" data-placement="bottom">
        <img :src="logo" alt="altitude droneworks icon" loading="lazy" :style="{ height: '30px', width: '30px' }" />
      </RouterLink>
      <RouterLink class="navbar-brand d-block d-md-none" :class="props.transparent || props.dark
    ? 'text-white'
    : 'font-weight-bolder ms-sm-3'
    " :to="{ name: 'presentation' }" rel="tooltip" title="Altitude Droneworks" data-placement="bottom">
        <img :src="logo" alt="altitude droneworks icon" loading="lazy" :style="{ height: '30px', width: '30px' }" />
      </RouterLink>
      <RouterLink class="btn btn-sm bg-gradient-info mb-0 d-lg-none d-block" :to="{ name: 'contactus' }" rel="tooltip"
        title="Contact Us" data-placement="bottom">
        Contact Us
      </RouterLink>
      <div v-if="isAuthenticated()" class="btn btn-sm bg-gradient-warning mb-0 ms-auto d-lg-none d-block"
        v-on:click="logout">
        Logout
      </div>
      <div v-else class="btn btn-sm bg-gradient-success mb-0 ms-auto d-lg-none d-block" v-on:click="login">
        Login
      </div>
      <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
        data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse pt-2 pb-2" id="navigation">
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <RouterLink class="btn btn-sm mb-0 bg-gradient-info" :to="{ name: 'contactus' }" rel="tooltip"
              title="Contact Us" data-placement="bottom">
              Contact Us
            </RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none ms-auto">
          <li class="nav-item">
            <div v-if="isAuthenticated()" class="btn btn-sm mb-0 mt-0 bg-gradient-warning m-2" v-on:click="logout">
              Logout
            </div>
            <div v-else class="btn btn-sm mb-0 mt-0 bg-gradient-success m-2" v-on:click="login">
              Login
            </div>
          </li>
        </ul>
        <ul class="navbar-nav navbar-nav-hover">
          <li class="nav-item dropdown dropdown-hover mx-2">
            <div class="d-lg-none px-2">
              <RouterLink :to="{ name: 'presentation' }" class="dropdown-item border-radius-md">
                <span>Home</span>
              </RouterLink>
              <RouterLink :to="{ name: 'about' }" class="dropdown-item border-radius-md">
                <span>About</span>
              </RouterLink>
              <RouterLink :to="{ name: 'services' }" class="dropdown-item border-radius-md">
                <span>Service Highlights</span>
              </RouterLink>
              <RouterLink :to="{ name: 'regulations' }" class="dropdown-item border-radius-md">
                <span>Regulations</span>
              </RouterLink>
              <RouterLink :to="{ name: 'contactus' }" class="dropdown-item border-radius-md">
                <span>Contact</span>
              </RouterLink>
            </div>
            <div class=" d-lg-block d-none">
              <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
                id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i>
                Pages
                <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2" />
              </a>
              <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
                aria-labelledby="dropdownMenuPages">
                <div class="row">
                  <div class="col-12 px-4 py-2">
                    <div class="row">
                      <div class="position-relative">
                        <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                          Landing Pages
                        </div>
                        <RouterLink :to="{ name: 'presentation' }" class="dropdown-item border-radius-md">
                          <span>Home</span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'about' }" class="dropdown-item border-radius-md">
                          <span>About</span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'services' }" class="dropdown-item border-radius-md">
                          <span>Service Highlights</span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'regulations' }" class="dropdown-item border-radius-md">
                          <span>Regulation</span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'contactus' }" class="dropdown-item border-radius-md">
                          <span>Contact</span>
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
