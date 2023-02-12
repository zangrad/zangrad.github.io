<template>
  <main>
    <ContentDoc />
  </main>
</template>

<script setup>
useHead({
  titleTemplate: s => s ? `${s} | žg's webpage` : 'Žan Grad\'s personal webpage',
})
</script>

<style lang="scss">
h1 {
  font-size: 18px;
}

h2 {
  font-size: 15px;
}

p{
  text-align: justify;
}
</style>