/*const Vue = require('vue');
const axios = require('axios');*/
var app = new Vue({
    el: '#form-wrapper',
    data: {
        users: [],
        url: {
            get_users: 'http://localhost:1337/getUsers'
        }
    },
    methods: {
        getUsers() {
            axios.get(this.url.get_users).then((response) => {
                this.users = response.data;
            });
        }
    }
});