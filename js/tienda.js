const { createApp } = Vue

createApp({
    data() {
        return {
            error: false,
            url: "./js/plantas.json",
            datos: {},

        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.datos = data.plantas
                });
        }

    },
    created() { 
        this.fetchData(this.url)
    }

}).mount('#app')