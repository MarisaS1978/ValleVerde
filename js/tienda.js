const { createApp } = Vue;

createApp({
    data() {
        return {
            error: false,
            url: "./js/plantas.json",
            datos: {},
            carrito: {}, 
        };
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.datos = data.plantas;
                });
        },
        agregarAlCarrito(item) {
            if (this.carrito[item.id]) {
                this.carrito[item.id].cantidad += 1;
            } else {
                item.cantidad = 1;
                this.carrito[item.id] = item;
            }
            
        },
        vaciarCarrito() {
            this.carrito = {};
        },
        realizarPago() {
            alert("Pago realizado con éxito"); 
        },
    },
    computed: {
        calcularMontoTotal() {
            return Object.values(this.carrito).reduce((total, item) => total + item.precio * item.cantidad, 0);
        },
    },
    created() {
        this.fetchData(this.url);
    },
}).mount("#app");
