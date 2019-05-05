//const Vue = require('vue');
//const axios = require('axios');
var app1 = new Vue({
    el: '#vueForm',
    data: {
        users: [],
        user: [],
        url: {
            find_user: 'http://localhost:1337/findUser'
        }
    },
    methods: {
        find_user() {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            axios.get(this.url.find_user+'?'+'email='+email+'&'+'password='+password)
                 .then((response) => {
                     //alert(response);
                     this.users = response.data.length;
                     this.user.name = response.data[0].name;
                     if(this.users != 0) {
                         alert('Welcome, '+ this.user.name + '!');
                         document.location.href = '../src/main.html'
                     } else {
                         alert('Error! This account not find!');
                         document.location.href = '../src/login.html'
                     }
                 });

        },

    }
});
