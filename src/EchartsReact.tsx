'use client'
import React, { useEffect, useRef } from 'react'
import ReactECharts from 'echarts-for-react'
import './index.css'

// Scatter Plot
const scatterOption = {
  series: [
    {
      type: 'scatter',
      symbolSize: 'var(--echarts-symbol-size)',
      itemStyle: {
        color: 'var(--echarts-symbol-color)',
        borderColor: 'var(--echarts-symbol-border-color)',
        borderWidth: 'var(--echarts-symbol-border-width)',
      },
    },
  ],
}

// Line Chart with Data Points
const lineOption = {
  series: [
    {
      type: 'line',
      symbol: 'circle',
      symbolSize: 'var(--echarts-symbol-size)',
      showSymbol: true,
      itemStyle: {
        color: 'var(--echarts-symbol-color)',
        borderColor: 'var(--echarts-symbol-border-color)',
        borderWidth: 'var(--echarts-symbol-border-width)',
      },
    },
  ],
}

// Bubble Chart
const bubbleOption = {
  series: [
    {
      type: 'scatter',
      symbolSize: (data: number[]) => {
        return (
          data[2] *
          parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              '--echarts-symbol-size'
            )
          )
        )
      },
      itemStyle: {
        opacity: 'var(--echarts-symbol-opacity)',
      },
    },
  ],
}

// Step 7: Add event handlers
const onEvents = {
  click: (params: unknown) => {
    console.log('Chart clicked:', params)
  },
  legendselectchanged: (params: unknown) => {
    console.log('Legend selection changed:', params)
  },
}

export default function Home() {
  const option = {
    textStyle: {
      color: 'var(--echarts-text-color)',
    },
    // TODO: Customize Title and Tooltip
    title: {
      text: 'Customized Title',
      subtext: 'Subtitle',
      left: 'center',
      textStyle: {
        color: '#0080ff',
        fontSize: 48,
        fontFamily: 'var(--echarts-title-font-family)',
      },
      subtextStyle: {
        color: '#8000ff',
        fontSize: 24,
      },
    },
    tooltip: {
      trigger: 'item', // 'axis' | 'item' | 'none'
      // backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backgroundColor: 'var(--echarts-tooltip-bg-color)',
      borderColor: '#ccc',
      borderWidth: 1,
      // formatter: '{a} <br/>{b}: {c}',
      formatter: (params: {
        seriesName: unknown
        name: unknown
        value: unknown
      }) => {
        return `${params.seriesName}<br/>${params.name}: ${params.value}`
      },
    },
    // Customize Title and Tooltip END
    // TODO: Axis Styling
    xAxis: {
      type: 'category',
      axisLabel: {
        show: true,
        // color: 'red',
        // fontSize: 12,
        fontFamily: 'Arial',
        margin: 8,

        color: 'var(--echarts-axis-label-color)',
        fontSize: 'var(--echarts-axis-label-font-size)',
        fontWeight: 'var(--echarts-axis-label-font-weight)',
        padding: 'var(--echarts-axis-label-padding)',
        // rotate: 'var(--echarts-axis-label-rotate)',
      },
      name: 'Days',
      nameTextStyle: {
        fontFamily: 'Arial',
        // fontSize: 14,
        // fontWeight: 'bold',
        // color: '#300ff3',

        color: 'var(--echarts-axis-title-color)',
        fontSize: 'var(--echarts-axis-title-font-size)',
        fontWeight: 'var(--echarts-axis-title-font-weight)',
        padding: 'var(--echarts-axis-title-padding)',
      },
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

      axisLine: {
        show: true,
        lineStyle: {
          color: 'var(--echarts-axis-line-color)',
          width: 'var(--echarts-axis-line-width)',
          type: 'var(--echarts-axis-line-type)',
        },
      },

      axisTick: {
        show: true,
        length: 'var(--echarts-axis-tick-length)',
        lineStyle: {
          width: 'var(--echarts-axis-tick-width)',
          color: 'var(--echarts-axis-tick-color)',
        },
      },

      nameLocation: 'middle',
      nameGap: 30,
      splitLine: {
        show: false,
        lineStyle: {
          color: 'var(--echarts-split-line-color)',
          type: 'dashed',
        },
      },
    },
    yAxis: {
      type: 'value',
      name: 'Values',
      nameTextStyle: {
        fontSize: 14,
        color: '#333',
      },
      axisLabel: {
        color: '#666',
        fontSize: 12,
      },
    },
    // Axis Styling END
    // TODO: Customize Legend
    legend: {
      data: ['Series 1', 'Series 2'],
      orient: 'horizontal',
      left: 'right',
      show: true,
      type: 'scroll',
      bottom: '5%',
      textStyle: {
        color: 'var(--echarts-legend-text-color)',
        fontSize: 'var(--echarts-legend-font-size)',
      },
      itemStyle: {
        borderColor: 'var(--echarts-legend-border-color)',
        borderWidth: 1,
      },
      emphasis: {
        textStyle: {
          color: 'var(--echarts-legend-emphasis-color)',
        },
      },
    },
    // Customize Legend END
    // TODO: Customize Grid
    grid: {
      top: '15%',
      right: '5%',
      bottom: '15%',
      left: '5%',
      containLabel: true,
      borderColor: 'var(--echarts-grid-border-color)',
      borderWidth: 1,
      backgroundColor: 'var(--echarts-grid-bg-color)',
    },
    // Customize Grid END
    series: [
      {
        name: 'Series 1',
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        // TODO: Customize Series Style
        itemStyle: {
          // color: '#5470c6', // TODO: Color of the data points
          borderColor: '#333', // TODO: Series Border color
          borderWidth: 2, // TODO: Series Border width
          opacity: 0.8, // TODO: Series Opacity
        },
        label: {
          show: true, // TODO: Show labels
          color: '#fff', // TODO: Label color
          fontSize: 12, // TODO: Label font size
          fontFamily: 'Arial', // TODO: Label font family
        },
        // Customize Series Style END
        symbol: 'circle', // TODO: Shape of the data points
        symbolSize: 10, // TODO: Size of the data points
        emphasis: {
          scale: 'var(--echarts-emphasis-scale)',
          itemStyle: {
            shadowBlur: 'var(--echarts-emphasis-shadow-blur)',
            shadowColor: 'var(--echarts-emphasis-shadow-color)',
          },
        },
        select: {
          itemStyle: {
            color: 'var(--echarts-symbol-selected-color)',
            opacity: 'var(--echarts-symbol-selected-opacity)',
          },
        },
      },
      {
        name: 'Series 2',
        type: 'bar',
        data: [150, 230, 224, 218, 135, 147, 260],
      },
    ],
  }

  const chartRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.getEchartsInstance().resize()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <ReactECharts
      ref={chartRef}
      option={option}
      style={{ height: '500px' }}
      onEvents={onEvents}
      notMerge={true}
      lazyUpdate={true}
    />
  )
}
