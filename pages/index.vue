<template>
    <div class="container content">
        <h2 class="title">Dreamavarium</h2>
        <ul>
            <li v-if="posts" v-for="(post, index) in posts" :key="index">
                <nuxt-link :to="post.fields.slug">{{
                    post.fields.title
                }}</nuxt-link>
            </li>
        </ul>
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    <strong>Dreamavarium</strong> by
                    <a href="https://twitter.com/Dreamavariums">Ricardo Ch.</a>.
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$store.state.posts.posts;
        }
    },
    async fetch({ store, params }) {
        await store.dispatch("posts/getPosts", params.slug);
    }
};
</script>
