<template>
  <div>
    <h1>bar chart.js 데이터 연습용</h1>
    <canvas id="barChart" width="400" height="400" ref="barchart"></canvas>
  </div>
</template>

<script>
export default {
props:['labeSet','dataSet'],
// firstData:{
//         type:String,
//         required:true
//     },
//     secondData:{
//         type:String,
//         required:true
//     }`
mounted(){
    const ctx1 = this.$refs.barchart.getContext('2d'); 
    const barChart = new this.$_Chart(ctx1, {
        type: 'bar',
        data: {
            labels: this.labeSet,
            datasets: [{
                label: '# of Votes',
                data: this.dataSet,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderWidth: 1
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            // onClick: function(){
            //     this.$emit('refresh:chart')
            // }
        }
    });
    
  }
}
</script>

<style>

</style>