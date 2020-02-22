<template>
  <div>
    <header class="Header">
      <div class="container">
        <h1 class="Header__Title">Nuxt i18n</h1>
        <nav class="Header__Menu">
          <NuxtLink
            v-if="$i18n.locale === 'en'"
            :to="localePath('/')"
            class="Header__Link"
            exact
          >{{ $t('links.home') }}</NuxtLink>
          <NuxtLink
            v-if="$i18n.locale === 'vi'"
            :to="localePath('/trang-chu')"
            class="Header__Link"
            exact
          >{{ $t('links.home') }}</NuxtLink>

          <NuxtLink
            v-if="$i18n.locale === 'en'"
            :to="localePath('/about')"
            class="Header__Link"
            exact
          >{{ $t('links.about') }}</NuxtLink>
          <NuxtLink
            v-if="$i18n.locale === 'vi'"
            :to="localePath('/gioi-thieu')"
            class="Header__Link"
            exact
          >{{ $t('links.about') }}</NuxtLink>

          <NuxtLink
            v-if="$i18n.locale === 'en'"
            :to="localePath('/login')"
            class="Header__Link"
            exact
          >{{ $t('links.login') }}</NuxtLink>
          <NuxtLink
            v-if="$i18n.locale === 'vi'"
            :to="localePath('/dang-nhap')"
            class="Header__Link"
            exact
          >{{ $t('links.login') }}</NuxtLink>

          <NuxtLink
            v-if="$i18n.locale === 'en'"
            :to="changeLanguer('vi')"
            class="Header__Link"
            active-class="none"
            exact
          >{{ $t('links.vn') }}</NuxtLink>

          <NuxtLink
            v-else
            :to="changeLanguer ('en')"
            class="Header__Link"
            active-class="none"
            exact
          >{{ $t('links.english') }}</NuxtLink>
        </nav>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguer(lang) {
      let uri = this.$route.fullPath.split('/')
      let removeLang = uri.slice(2, uri.length)
      let new_uri = removeLang.join('/')
      return '/' + lang + '/' + new_uri
    }
  }
}
</script>

<style>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  background-color: #fff;
  color: #2e2f30;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  height: 100vh;
  margin: 0;
}
.container {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.container:after {
  content: '';
  display: table;
  clear: both;
}
.Header {
  color: #fff;
  height: 80px;
  line-height: 80px;
  background-color: #2e2f30;
}
.Header__Title {
  float: left;
  font-weight: 300;
  font-size: 30px;
}
.Header__Menu {
  float: right;
}
.Header__Link {
  font-size: 16px;
  color: #fff;
  border: 1px solid #fff;
  padding: 7px 12px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-left: 10px;
}
.Header__Link:hover {
  color: #2e2f30;
  background-color: #fff;
}
.nuxt-link-active {
  color: cyan;
}
.Content {
  padding: 50px 0;
  text-align: center;
  padding-bottom: 0px;
}
.Content__Title {
  font-weight: 300;
  padding-bottom: 30px;
}
</style>
