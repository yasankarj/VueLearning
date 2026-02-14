const app = Vue.createApp({
    data() {
        return {
            name: 'Yasanka RJ',
            age: 34,
            favouriteNumber: Math.random(),
            img: 'https://yasankarj.github.io/images/photo1.png'
        }
    }
});
app.mount('#assignment')