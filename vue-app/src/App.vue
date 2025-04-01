<script setup>
import { onBeforeMount } from 'vue'
import { useColorModes } from '@coreui/vue'
const {setColorMode } = useColorModes(
  'coreui-free-vue-admin-template-theme',
)
onBeforeMount(() => {
  const urlParams = new URLSearchParams(window.location.href.split('?')[1])
  let theme = urlParams.get('theme')
  if (theme !== null && theme.match(/^[A-Za-z0-9\s]+/)) {
    theme = theme.match(/^[A-Za-z0-9\s]+/)[0]
  }
  if (theme) {
    setColorMode(theme)
    return
  }
})
</script>
<template>
  <router-view />
</template>
<style lang="scss">
// Import Main styles for this application
@use 'assets/styles/style';
// We use those styles to show code examples, you should remove them in your application.
@use 'assets/styles/examples';
</style>
