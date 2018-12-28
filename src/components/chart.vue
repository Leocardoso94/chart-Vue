<template>
  <div class="chart-component">
    <figure id="chart">
      <v-chart :options="option" auto-resize></v-chart>
    </figure>
    <figure id="chart2">
      <v-chart :options="option2" auto-resize></v-chart>
    </figure>
  </div>
</template>
<script>
// import ECharts from 'vue-echarts/components/ECharts';
import echarts from 'echarts'
import 'echarts/lib/chart/line'
//  import 'vue-echarts-liquidfill'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/tooltip'
export default {
  components: {
    chart: echarts
  },
  // props: ['xAxis', 'yAxis'],
  data () {
    return {
      option: {
        color: ['#0eb746'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        // grid: {
        //   left: '3%',
        //   right: '4%',
        //   bottom: '3%',
        //   containLabel: true
        // },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisTick: {
              alignWithLabel: false
            },
            axisLine: {
              lineStyle: {
                color: 'transparent'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            data: [],
            axisTick: {
              alignWithLabel: false
            },
            splitLine: {
              lineStyle: {
                color: '#c4cedd'
              }
            },
            axisLine: {
              lineStyle: {
                color: 'transparent'
              }
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: '40%',
            data: []
          },
          {
            type: 'bar'
          }
        ],
        label: {
          normal: {
            show: false,
            position: 'top',
            formatter: '{c}'
          }
        }
      },
      option2: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['1', '2']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'center',
                  max: 1548
                }
              }
            },
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              },
              emphasis: {
                label: {
                  show: true,
                  position: 'center',
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              }
            },
            data: [
              { value: 335, name: '直接访问' },

              {value: 1548, name: '搜索引擎'}
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.option.xAxis[0].data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321]
    this.option.series[0].data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321]
  }
}
</script>
<style>
  span {
    color: red;
  }
</style>
<!--<style scoped>-->
<!--figure {-->
  <!--display: inline-block;-->
  <!--margin: 0;-->
  <!--/*border: 1px solid rgba(0, 0, 0, .1);*/-->
  <!--/*border-radius: 8px;*/-->
  <!--box-shadow: 0 !important;-->
  <!--padding: 0;-->
  <!--width: 100%;-->
  <!--height: 400px;-->
  <!--background: transparent;-->
<!--}-->
<!--.echarts {-->
  <!--width: 100%;-->
  <!--height: 100%;-->
<!--}-->
<!--.charts-tag {-->
  <!--background-color: transparent !important;-->
<!--}-->
<!--</style>-->
