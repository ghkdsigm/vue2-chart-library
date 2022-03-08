import Chart from 'chart.js'

//차트플러그인
export default{
    install(Vue){
        Vue.prototype.$_Chart = Chart;

        // Barchart.vue
        this.$_Chart
        
        // Linechart.vue
        this.$_Chart
    }
}