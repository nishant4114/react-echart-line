import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import './App.css';

class App extends Component {

  getOption = () => {
    return {
      title: {
        text: 'Transport Agency records'
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['Maruti Suzuki','Hyundai','Honda']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
        }
      ],
      yAxis : [
        {
          type : 'value',
          axisLabel : {
            formatter: '{value} km'
        }
        }
      ],
      series : [
        {
          name:'Maruti Suzuki',
          type:'line',
          stack: 'Total amount',
          areaStyle: {normal: {}},
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'Hyundai',
          type:'line',
          stack: 'Total amount',
          areaStyle: {normal: {}},
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'Honda',
          type:'line',
          stack: 'Total amount',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        }
      ]
    };
  };
  onChartClick = (param, echarts) => {
    console.log(param, echarts);
    alert('chart click');
    // this.setState({
    //   cnt: this.state.cnt + 1,
    // })
  };

  onChartLegendselectchanged = (param, echart) => {
    console.log(param, echart);
    alert('chart legendselectchanged');
  };

  onChartReady = (echarts) => {
    console.log('echart is ready', echarts);
  };  

  render() {
    let onEvents = {
      'click': this.onChartClick,
      'legendselectchanged': this.onChartLegendselectchanged
    };

    let code = "let onEvents = {\n" +
    "  'click': this.onChartClick,\n" +
    "  'legendselectchanged': this.onChartLegendselectchanged\n" +
    "}\n\n" +
    "<ReactEcharts \n" +
   "  option={this.getOption()} \n" +
   "  style={{height: 300}} \n" +
   "  onChartReady={this.onChartReady} \n" +
   "  onEvents={onEvents} />";
    return (
      <div className="App">
        <h1>Simple line chart</h1>
        {/* <label> Chart With event <strong> onEvents </strong>（{this.state.cnt}）: (Click the chart, and watch the console)</label> */}
         <ReactEcharts
            option={this.getOption()}
            style={{height: '350px', width: '50%', left:'25%'}}
            onChartReady={this.onChartReady}
            onEvents={onEvents} />
            className='react_for_echarts' />
            <code>{code}</code>
      </div>
    );
  }
}

export default App;
