new Vue({
    el: '#app',
    data: {
        title: 'Local Weather App',
        weatherDataCity: [],
        weatherDataMain: [],
        weatherDataWeather: [],
        cityName: '',
    },

    created() {
        this.getWeatherData()
    },

    methods: {
        getWeatherData: function (city) {
            axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=7dd3552e9a532470997bbefc96969b50&units=metric')
            .then((resp) => {
                this.weatherDataCity = resp.data;
                this.weatherDataMain = resp.data.main;
                this.weatherDataWeather = resp.data.weather[0];
                console.log(resp.data)
            })
            .catch((e) => {
                console.error(e)
            })

        }
    }
})