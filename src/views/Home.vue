<template>
  <div class="home">
    <!-- <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div> -->

    <div v-for="article in articles" v-bind:key="article.id">
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
      <h4>{{ article.author }}</h4>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      posts: [],
      articles: [],
      // newPostParams: {},
    };
  },
  created: function () {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      this.posts = response.data;
    });
    axios.get("/articles").then((response) => {
      console.log(response.data);
      this.articles = response.data;
    });
  },
  methods: {
    // createPost: function () {
    //   axios.post("https://jsonplaceholder.typicode.com/posts", this.newPostParams).then((response) => {
    //     console.log(this.newPostParams);
    //     this.posts.push(response.data);
    //   });
    // },
  },
};
</script>
