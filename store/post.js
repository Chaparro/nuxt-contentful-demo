require('dotenv').config();
// import client from '../plugins/contentful';
const contentful = require('contentful');

export const state = () => ({
    currentPost: {},
    isLoading: true
})

export const mutations = {
    setCurrentPost(state, payload) {
        state.currentPost = payload;
    },
    setLoading(state, payload) {
        state.isLoading = payload;
    }
}

export const actions = {
    async getPostBySlug({commit}, slug) {
        console.log('post');
        console.log({commit});
        console.log(slug);
        console.log(process.env);
        const client = contentful.createClient({
            space:  process.env.CTF_SPACE_ID,
            accessToken: process.env.CTF_CD_ACCESS_TOKEN
        });
        commit('setLoading', true);
        const response = await client.getEntries({
            content_type: 'blogPost',
            'fields.slug': slug
        });
        commit('setCurrentPost', response.items[0]);
        commit('setLoading', false);
    }
}
