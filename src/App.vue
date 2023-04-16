<template>
  <Navbar></Navbar>
  <Home></Home>
  <Services></Services>
</template>

<script>
import Navbar from '@/components/Navbar'
import Home from "@/components/Home";
import Services from "@/components/Services";

export default {
  components: {
    Navbar,
    Home,
    Services
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>
