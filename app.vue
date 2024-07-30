<template>
  <div class="app">
    <div class="heading">
      <span class="title"><nuxt-link to='/'>Žan Grad</nuxt-link></span>
      <span class="description">Doctoral student at CAMGSD, Instituto Superior Técnico, Lisbon.</span>
      <ul class="nav">
        <li><nuxt-link :to="'/'">Info // Bio</nuxt-link></li>
        <li><nuxt-link :to="'/research'">Research</nuxt-link></li>
        <li><nuxt-link :to="'/teaching'">Teaching</nuxt-link></li>
      </ul>
    </div>
    <hr>
    <div class="content">
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/app";

html{
  font-family: $serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body{
  margin: 0;
  line-height: 1.6;
  font-size: 15px;
  // background: #111;
  color: #111;
  box-sizing: border-box;
}

::selection {
  background: #0f877f; /* WebKit/Blink Browsers */
}
a::selection{
  // color: #fff;
}
::-moz-selection {
  background: #0f877f; /* Gecko Browsers */
}

.mathjax-commands {
  display: none;
}

a {
  color: $bordeaux;
  font-family: $mono;
  text-decoration: none;
  border-bottom: 1px dashed $bordeaux;
  line-height: 15px
}
a:hover {
  border-bottom: 1px solid $bordeaux
}

.app{
  display: block;
  max-width: 1000px;
  margin: 0 auto;

  &>*{
    box-sizing: border-box;
  }

  &>hr {
    display: block;
    margin: 30px 20px;
  }

  .heading {
    position: static;
    width: 100%;
    height: auto;
    padding: 40px 20px 0px 20px;
    z-index: 3;

    span.title {
      font-size: 18px;

      a {
        border-bottom: 0;
        font-family: $serif;
        font-weight: bold;
        color: #111;
        line-height: 1.2;
        display: block;
        // margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }

    span.description {
      color: #111
    }

    .nav {
      &>li {
        &>a.nuxt-link-active, &>a.router-link-active{
          font-weight: bold;
        }

        &>ul {
          padding-left: 20px;

          &>li>a.active {
            font-weight: bold;
          }
        }
      }
    }
  }

  .content {
    padding: 0px 20px 80px 20px;
    margin-left: 0;
    width: 100%;
    // margin-left: 350px;
  }
}

hr{
  margin: 30px 0;
}
</style>