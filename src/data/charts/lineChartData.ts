import { TLineChartData } from '../types'

const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

const getSize = (minSize = 5) => Math.max(minSize, new Date().getMonth())
const size = getSize()

const generateValue = () => Math.floor(Math.random() * 100)
const generateArray = (length: number) => Array.from(Array(length), generateValue)

const generateYLabels = () => {
  const flip = !!Math.floor(Math.random() * 2)
  return flip ? ['Debit', 'Credit'] : ['Credit', 'Debit']
}
const yLabels = generateYLabels()

export const lineChartData: TLineChartData = {
  labels: months.slice(0, size),
  datasets: [
    {
      label: yLabels[0],
      backgroundColor: 'primary',
      data: generateArray(size),
    },
  ],
}
