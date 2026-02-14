const app = Vue.createApp({
  data() {
    return {
      name: "",
      counter: 10,
      max: 0,
      confirmedName: ""
    };
  },
  methods: {
    add(num) {
      this.counter += num;
      this.max = this.max < this.counter ? this.counter : this.max;
    },
    reduce(num) {
      this.counter = this.counter >= num ? this.counter - num : this.counter;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' +lastName;
    },
    submitForm() {
      alert("Submit!");
    },
    confirmName() {
      this.confirmedName = this.name
    }
  }
});

app.mount('#events');
