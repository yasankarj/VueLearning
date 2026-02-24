const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue: ''
    };
  },
  methods: {
    addGoal() {
      console.log(this.enteredGoalValue)
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
