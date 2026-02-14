const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
      // fullName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50 || value < 0) {
        this.counter = 0;
      }
    }
    //   name(value) {
    //     if (value === '')
    //       this.fullName = ''
    //     else
    //       this.fullName = value + ' ' + this.lastName
    //   },
    //   lastName(value) {
    //     if (value === '')
    //       this.fullName = ''
    //     else
    //       this.fullName = this.name + ' ' + value
    //   }
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '')
        return ''
      return this.name + ' ' + this.lastName
    }
  },
  methods: {
    outputFullname(lastName) {
      if (this.name === '')
        return ''
      return this.name + ' ' + lastName
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
