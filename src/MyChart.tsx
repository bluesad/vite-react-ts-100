import React, { useState } from 'react'
import ReactECharts from 'echarts-for-react'

const MyChart = () => {
  const [data, setData] = useState([120, 200, 150, 80, 70, 110, 130])

  const getOption = () => ({
    // ... other options
    xAxis: {
      type: 'category',
      data,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Series 1',
        type: 'line',
        data: data,
        // Customize Series Style
        itemStyle: {
          color: '#91cc75',
        },
        // Customize Series Style END
      },
      // ... other series
    ],
  })

  return (
    <div>
      <ReactECharts
        option={getOption()}
        style={{ height: '400px', width: '100%' }}
      />
      <button onClick={() => setData([Math.random() * 100, ...data.slice()])}>
        Update Data
      </button>
    </div>
  )
}

export default MyChart
