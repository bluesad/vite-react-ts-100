import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const ChartOne = () => {
  const chartRef = useRef(null)
  const chartInstanceRef = useRef<echarts.EChartsType>(null) // Ref to hold the chart instance

  useEffect(() => {
    console.log(chartRef)

    // Initialize a new chart instance
    if (chartRef.current) {
      chartInstanceRef.current = echarts.init(chartRef.current)
    }

    // Define the chart options
    const options = {
      title: {
        text: 'Echarts Example',
      },
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {},
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    }

    // Apply the options to the chart
    typeof chartInstanceRef?.current === 'object' &&
    chartInstanceRef.current !== null &&
    'setOption' in chartInstanceRef.current
      ? (chartInstanceRef.current as echarts.ECharts).setOption(options)
      : {}
    // Cleanup function to dispose of the chart instance
    return () => {
      typeof chartInstanceRef?.current === 'object' &&
      chartInstanceRef.current !== null &&
      'setOption' in chartInstanceRef.current
        ? (chartInstanceRef.current as echarts.ECharts).dispose()
        : {}
    }
  }, [chartRef])

  return <div ref={chartRef} style={{ width: '600px', height: '400px' }}></div>
}

export default ChartOne
