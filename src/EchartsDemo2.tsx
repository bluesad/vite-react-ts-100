import { EChart, EChartProps } from '@kbox-labs/react-echarts'
import { useMemo } from 'react'

// Define LineSeriesData type
type LineSeriesData = {
  type: 'line',
  data: [string, number][]
}[]

const staticProps: EChartProps = {
  xAxis: {
    type: 'category'
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '30%']
  }
}

function EchartsDemo2() {
  const series: LineSeriesData = useMemo(
    () => [
      {
        type: 'line',
        data: [
          ['2022-10-17', 300],
          ['2022-10-18', 100]
        ]
      }
    ],
    []
  )

  return <EChart {...staticProps} series={series} />
}

export default EchartsDemo2;