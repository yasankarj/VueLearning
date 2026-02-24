const app = Vue.createApp({
  data() {
    return { 
      label: 'Hide',
      showList: true,
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
    },
    toggleList() {
        this.showList = !this.showList;
        this.label = this.showList ? 'Hide' : 'Show';
    }
  }
});

app.mount('#assignment');
