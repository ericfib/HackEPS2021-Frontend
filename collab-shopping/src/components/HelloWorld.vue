<template>
  
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios';

defineProps({
  msg: String,
})

export default {
  data() {
    return {
      info: null,
    }
  },
  methods : {
      createRoom () {},
      verifyRoom () {}
  },
  
};
</script>



<style scoped>
a {
  color: #42b983;
}
</style>
