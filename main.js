new Vue({
    el: '#app',
    data: {
        title: 'Local Weather App',
        weatherData: []
    },

    created() {
        this.getWeatherData()
    },

    methods: {
        getWeatherData: function () {
            axios.get("https://api.openweathermap.org/data/2.5/weather?appid=7dd3552e9a532470997bbefc96969b50&q=London")
            .then((resp) => {
                this.weatherData = resp.data
                console.log(resp.data)
            })
            .catch((e) => {
                console.error(e)
            })
        }
    }
})