var app1 = new Vue({
    el: '#article',
    data: {
        hello: ''
    },
    methods: {
        hello_what() {
            var now = new Date();
            var hours = now.getHours();
            if((hours >= 5) && (hours < 12)) {
                this.hello = 'Доброе утро!';
            } else if((hours >= 12) && (hours < 17)) {
                this.hello = 'Добрый день!';
            } else if((hours >= 17) && (hours < 21)) {
                this.hello = 'Добрый вечер!';
            } else if((hours >= 21) && (hours < 5)) {
                this.hello = 'Здравствуйте!';
            }
        }
    },
    created: function() {
        this.hello_what();
    }
});
