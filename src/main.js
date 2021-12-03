import Vue from 'vue'
import picker from './index.vue'

new Vue({
  el: '#app',
  data(){
    return {
      v:false,
      defaultIndex:[1,3,4,5]
    }
  },
  mounted(){
    // setTimeout(()=>{
    //   this.defaultIndex = [1,3,4,5]
    // },1000)
  },
  computed:{
    list(){
      let arr = [];
      for (let i = 0; i < 4; i++) {
        arr[i] = []
        for (let j = 0; j < 10; j++) {
          arr[i].push({value:j,label:j+"年"})
        }
      }
      console.log(arr)
      return arr;
    },
    list1(){
      let arr = [];
      for (let i = 0; i < 1; i++) {
        arr[i] = []
        for (let j = 0; j < 10; j++) {
          arr[i].push({value:j,label:j+"年"})
        }
      }
      console.log(arr)
      return arr;
    }
  },
  methods:{
    confirm(val){
      alert(JSON.stringify(val));
      this.v = !this.v
    },
    change(val){
      console.log("change:",JSON.stringify(val));
    }
  },
  components:{picker}
})
