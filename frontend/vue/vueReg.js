var app = new Vue({
    el: '#vueForm',
    data: {
        user: [],
        url: {
            add_user: 'http://localhost:1337/addUsers'
        }
    },
    methods: {
        async add_user() {
            this.user.name = document.getElementById('name').value;
            this.user.email = document.getElementById('email').value;
            this.user.password = document.getElementById('password').value;
            console.log(this.user)
            if(!(((this.user.name) === '') || (this.user.email === '') || (this.user.password.length > 8) || (this.user.password.length < 8))) {
                await axios.post(this.url.add_user, {
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password
                });
                console.log(this.user)
            } else {
                alert('Please, enter correct data!');
            }
        }

    }
});