<script setup>

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";

// sections
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Contact from "./Sections/AuthorContact.vue";

// image
import image from "@/assets/img/city-profile.jpg";

// TODO - fix this page
</script>
<template>
  <DefaultNavbar transparent />
  <div class="mx-auto" style="max-width: 1920px;">
    <Header>
      <div class="page-header min-height-400" :style="{ backgroundImage: `url(${image})` }" loading="lazy">
        <span class="mask bg-gradient-dark opacity-8"></span>
      </div>
    </Header>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
      <Profile />
      <Posts />
    </div>
    <Contact />
  </div>
  <DefaultFooter />
</template>
