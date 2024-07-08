<script>
import { idToken } from "../../../shared/auth.js"
import bg0 from "@/assets/img/altitude/landscape/lake.jpg";

export default {
  data() {
    return {
      url: import.meta.env.VITE_APP_URL,
      bg: bg0,
    }
  },
  methods: {
    isZip(asset) {
      if (!asset) {
        return false;
      }
      const a = asset.toLowerCase()
      return a.endsWith(".zip")
    },
    isImage(asset) {
      if (!asset) {
        return false;
      }
      const a = asset.toLowerCase()
      return a.endsWith(".jpg") || a.endsWith(".png")
    },
    isMovie(asset) {
      if (!asset) {
        return false;
      }
      const a = asset.toLowerCase()
      return a.endsWith(".mp4") || a.endsWith(".mov")
    },
    humanReadable(asset) {
      if (!asset) {
        return "";
      }
      const nameParts = asset.split("/")
      const fileName = nameParts[nameParts.length - 1]
      return fileName.split(".")[0]
    },
    download(asset) {
      fetch(this.url + '/' + asset, {})
        .then((response) => response.blob())
        .then((blob) => {
          console.log('downloading', asset);
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', humanReadable(asset))
          document.body.appendChild(link)
          link.click()
        });
    },
  },
  asyncComputed: {
    listAssets: {
      async get() {
        return fetch(import.meta.env.VITE_APP_URL + "/api/v1/project", {
          method: "GET",
          headers: {
            "x-api-key": import.meta.env.VITE_APP_API_KEY,
            "x-token": idToken(),
          },
        })
          .then(res => res.json())
          .then(res => {
            return res.files;
          });
      },
      default: [],
    },
    zipAssets: {
      async get() {
        return this.listAssets.filter(i => this.isZip(i))
      },
      default: [],
    },
    imageOrMovie: {
      async get() {
        return this.listAssets.filter(i => this.isImage(i) || this.isMovie(i))
      },
      default: [],
    }
  },
};
</script>
<template>
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-25" :style="{ backgroundImage: `url(${this.bg})` }">
      <span class="mask bg-gradient-dark opacity-2"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Asset Downloads
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
      <div class="row">
        <div v-for="asset in zipAssets" class="col-lg-2 col-sm-2 mb-3">
          <button @click=" download(asset)" class="btn btn-lg bg-gradient-info mb-0 ms-auto">
            Download {{ humanReadable(asset) }}
          </button>
        </div>
      </div>
      <div class="row">
        <span v-for="asset in imageOrMovie" class="col-lg-4 col-sm-4 mb-3">
          <span @click="download(asset)" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to Download"
            data-container="body" data-animation="true">
            <img v-if="isImage(asset)" :src="this.url + '/' + asset" :alt="asset"
              class="img-fluid shadow border-radius-lg mb-3" loading="lazy" />
            <VideoBackground v-if="isMovie(asset)" class="shadow border-radius-lg"
              style="height: 100%;  min-height: 200px;" :src="this.url + '/' + asset" />
          </span>
        </span>
      </div>
    </div>
  </header>
</template>
