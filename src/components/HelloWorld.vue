<template>
  <div class="chart-component-container">
    <div class="title-container">
      <div class="title">
        <p>
          Case Study
        </p>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6.5" y="0.843093" width="8" height="8" transform="rotate(45 6.5 0.843093)" stroke="#E55477"/>
        </svg>
      </div>
    </div>
    <div class="chart-component">
      <div class="bar-chart">
        <div class="chart-title">
         Monthly average income
       </div>
        <figure id="chart">
         <v-chart :options="option" auto-resize></v-chart>
       </figure>
      </div>
      <div class="total-container">
        <div class="total">
          <div class="big-bullet">
            <div class="small-bullet">
            </div>
          </div>
          <p>Monthly profit: £1,452.56</p>
        </div>
        <div class="total">
          <div class="big-bullet">
            <div class="small-bullet">
            </div>
          </div>
          <p>Total ROI/year:  109%</p>
        </div>
      </div>
    </div>
    <div class="chart-component pie">
      <div class="pie-chart">
        <div class="chart-title">
          Monthly average income
        </div>
        <figure id="chart2">
          <v-chart :options="option2" auto-resize></v-chart>
        </figure>
      </div>
      <div class="total-container-pie">
        <div class="total">
          <div class="line"></div>
          <p>Total investment: £17,336.36</p>
        </div>
        <div class="total">
          <div class="line2"></div>
          <p>Total payout over 5 years:  94.154.63</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/tooltip'
export default {
  components: {
    chart: ECharts
  },
  data () {
    return {
      option: {
        // title: {
        //   text: '温度计式图表',
        //   subtext: 'From ExcelHome',
        //   sublink: 'http://e.weibo.com/1341556070/AizJXrAEa'
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {// 坐标轴指示器，坐标轴触发有效
            type: 'shadow'// 默认为直线，可选为：'line' | 'shadow'
          }
          // formatter: function (params) {
          //   return params[0].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value + '<br/>' + params[1].seriesName + ' : ' + (params[1].value + params[0].value)
          // }
        },
        legend: {
          selectedMode: false,
          data: ['Monthly profit']
        },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     mark: {show: true},
        //     dataView: {show: true, readOnly: false},
        //     restore: {show: true},
        //     saveAsImage: {show: true}
        //   }
        // },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
          }
        ],
        yAxis: [
          {
            type: 'value',
            boundaryGap: [0, 1.1]
          }
        ],
        series: [
          {
            name: 'Acutal',
            type: 'bar',
            stack: 'sum',
            barCategoryGap: '50%',
            itemStyle: {
              normal: {
                color: '#3471D4',
                barBorderColor: '#3471D4',
                barBorderWidth: 2,
                barBorderRadius: 0,
                label: {
                  show: true, position: 'insideTop'
                }
              }
            },
            data: [1554, 1570, 1586, 1548, 1655, 1550, 1595, 1536, 1548, 1590, 1584, 1580]
          }
        ]
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
        calculable: true,
        series: [
          {
            name: 'Acutal',
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
              {value: 335, itemStyle: {color: '#5ab1ef'}},
              {value: 1548, itemStyle: {color: '#FFB980'}}
            ]
          }
        ]
      }
    }
  }
}
</script>
<style>
  .chart-component-container .title-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  .chart-component-container .title-container .title {
    border-bottom: 1px solid;
    padding: 0 0 5px 0;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  svg {
    margin-bottom: -12px;
    background: white;
  }
  .chart-component {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .chart-component .chart-title {
    display: flex;
    padding-left: 100px;
    justify-content: flex-start;
    align-items: flex-start;
    color: #3471D4;
    font-size: 20px;
  }
  .pie {
    margin-top: 50px;
  }
  .echarts {
    margin-top: -50px;
    width: 950px;
    height: 500px;
  }
  .total {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0;
  }
  .total p {
    margin-left: 10px;
  }
  .big-bullet {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8px;
    height: 8px;
    border: 1px solid;
    border-radius: 50%;
  }
  .small-bullet {
    width: 3px;
    height: 3px;
    background: black;
    border-radius: 50%;
  }
  .total-container-pie {
    position: absolute;
    z-index: 0;
    left: 38%;
    height: 435px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #chart2 {
    z-index: 2;
  }
  .total-container-pie .total:nth-child(1n) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .total-container-pie .total:nth-child(2n) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .line {
    width: 100px;
    position: relative;
    z-index: 2000;
    border-top: 1px solid #3471D4;
    transform: rotate(-22.41deg);
  }
  .line2 {
    width: 100px;
    transform: rotate(24.89deg);
    border-bottom: 1px solid #3471D4;
  }
</style>
