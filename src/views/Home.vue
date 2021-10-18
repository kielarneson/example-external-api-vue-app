<template>
  <div class="home">
    <a href="https://github.com/login/oauth/authorize?client_id=799755aee3a77ffea3a6">Sign into GitHub</a>
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
    if (this.$route.query.code) {
      axios.get("/auth/github/callback?code=" + this.$route.query.code).then((response) => {
        console.log("GitHub OAuth", response.data);
        axios.defaults.headers.common["Authorization"] = "Token " + response.data.access_token;
        localStorage.setItem("github_access_token", response.data.access_token);
        this.$router.push("/about");
      });
    }
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
