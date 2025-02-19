import { useECharts, UseEChartsOptions } from '@kbox-labs/react-echarts'
import { ECharts } from 'echarts'
import { FC } from 'react'

type UseECharts<T extends HTMLElement> = (
  options: UseEChartsOptions
) => [(node: T) => void, ECharts | undefined]

export const EChart: FC<UseEChartsOptions> = (props) => {
  const [ref, echartsInstance] = useECharts<HTMLDivElement>({
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        areaStyle: {},
      },
    ],
  })

  return <div ref={ref} />
}
