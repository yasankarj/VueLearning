const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      toggle: true,
      colorClass: ''
    };
  },
  computed: {
    visibleClass() {
        return this.toggle ? 'visible' : 'hidden'
    }
  },
  methods: {
    toggleBtn() {
        this.toggle = !this.toggle
    }
  }
});

app.mount('#assignment');
