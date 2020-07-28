require('dotenv').config();
const contentful = require('contentful')

if (process.env.CTF_SPACE_ID) {
    console.log('create client');
    module.exports = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
    })
}