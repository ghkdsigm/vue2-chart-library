<template>
  <div>
    <h1>bar chart.js</h1>
    <canvas id="barChart" width="400" height="400" ref="barchart"></canvas>
  </div>
</template>

<script>
export default {
props:['propsData'],
mounted(){
    const ctx1 = this.$refs.barchart.getContext('2d'); 
    const barChart = new this.$_Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: this.propsData
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            onClick: function(){
                this.$emit('refresh:chart')
            }
        }
    });
    
  }
}
</script>

<style>

</style>