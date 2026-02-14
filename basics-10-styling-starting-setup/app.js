const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
      boxDSelected: false,
      boxESelected: false
    };
  },
  computed: {
    boxDClasses() {
      return {active: this.boxDSelected}
    }
  },
  methods: {
    boxSelected(box) {
      switch(box){
        case 'A':
          this.boxASelected = !this.boxASelected;
          break;
        case 'B':
          this.boxBSelected = !this.boxBSelected;
          break;
        case 'C':
          this.boxCSelected = !this.boxCSelected;
          break;
        case 'D':
          this.boxDSelected = !this.boxDSelected;
          break;
        case 'E':
          this.boxESelected = !this.boxESelected;
          break;
        default:
          break;
        
      }
    }
  }
});

app.mount('#styling');
