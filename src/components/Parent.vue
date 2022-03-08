<template>
  <div id="Parent">
    <bar-chart-2 :labeSet="chartLabelSet" :dataSet="chartDataSet"></bar-chart-2>    
    <line-chart  :labeSet="chartLabelSet" :dataSet="chartDataSet"></line-chart> 
    <bar-chart></bar-chart>
    <!-- <div v-for="item in chartLabelSet" :key="item">{{item}}</div> -->
  </div>
</template>

<script>
import BarChart from './BarChart.vue'
import BarChart2 from './BarChart2.vue'
import LineChart from './LineChart.vue'
import axios from 'axios'

export default {  
  name: 'Parent',
  components: {
    BarChart,
    BarChart2,
    LineChart
  },  
  data(){
    return{
      chartLabelSet:[],
      chartDataSet:[]
    }
  },
  methods:{
    
  },
  mounted(){
      
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/users')// 이런식으로 데이터를받아오면 이런식으로 가령 app.vue 상위폴더에서 데이터 처리를하고 하위 컴포넌트에 내려보내준다
    .then(res => {
      const array = res.data
      for(let i=2; i <= array.length - 5; i++){
        this.chartLabelSet.push(array[i].name);
        this.chartDataSet.push(array[i].id);
      }      
    })
    .catch(err => console.log(err))
  }

}
</script>

<style>
</style>
