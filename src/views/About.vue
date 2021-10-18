<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created: function () {
    axios.get("/github_profile").then((response) => {
      console.log(response.data);
    });
  },
};
</script>
