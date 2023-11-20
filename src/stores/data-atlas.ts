import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
// Importe a biblioteca regression-js
import * as regression from 'regression'

export interface IGelagua {
  _id?: string
  imagem: string
  nome: string
  descricao: string
  identificadorBalanca: string
  ativo: boolean
  pesoMaximo: number
  pesoMinimo: number
}

interface IGelaguaDocuments {
  documents: [IGelagua]
}

export interface IidDevice {
  _id: string
  totalContabilizado: string
}

interface IidDeviceDocuments {
  documents: [IidDevice]
}

export interface IMedicoes {
  _id: string
  weight: number
  dateTime: Date
  deviceID: string
}

interface IMedicoesDocuments {
  documents: [IMedicoes]
}

interface ChartDataset {
  label: string
  backgroundColor: string[]
  data: number[]
}

interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

export const listaGelaguas = defineStore('listaGelaguas', {
  state: () => ({
    gelaguasDTO: ref<IGelagua[]>([]),
    gelaguaCorrente: ref<IGelagua>(),
    idDeviceList: ref<IidDevice[]>([]),
    medicoesDTO: ref<IMedicoes[]>([]),
    chartData: ref<ChartData>(),
    chartDataPizza: ref<ChartData>(),
    pesoFinal: Number(0),
    dataFinal: String(''),
  }),
  actions: {
    async carregarMedicoes(gelagua: IGelagua) {
      this.chartData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            label: 'Vendas',
            backgroundColor: ['#f87979'],
            data: [65, 59, 80, 81, 56],
          },
          {
            label: 'Vendas',
            backgroundColor: ['#B9F7F0'],
            data: [65, 59, 80, 81, 56],
          },
          {
            label: 'Vendas',
            backgroundColor: ['#B9F7F0'],
            data: [65, 59, 80, 81, 56],
          },
        ],
      }
      // Seus dados
      const dataRegressao: number[][] = []
      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }
      if (gelagua?.identificadorBalanca) {
        await this.loadMedicoesList(gelagua?.identificadorBalanca)
        const medicoesDTO = this.medicoesDTO
        this.chartData.datasets[0].data.length = 0
        this.chartData.datasets[1].data.length = 0
        this.chartData.datasets[2].data.length = 0

        this.chartData.labels = []
        this.chartData.datasets[0].label = 'Consumo'
        this.chartData.datasets[1].label = 'Medições'
        this.chartData.datasets[2].label = 'Previsão'
        this.chartData.datasets[0].backgroundColor = ['#FF5733']
        this.chartData.datasets[1].backgroundColor = ['#D6EAF8']
        this.chartData.datasets[2].backgroundColor = ['#08E037']

        for (const medicao of medicoesDTO) {
          const dateString = medicao.dateTime.toString()
          const dateObject = new Date(dateString)
          // Adicionando um novo elemento [x, y]
          const novoElemento: number[] = [medicao.weight, dateObject.getTime()]
          dataRegressao.push(novoElemento)
          this.chartData.labels?.push(dateObject.toLocaleDateString('pt-BR', options))
          //const dataFormatada = dataFinal.toLocaleDateString('pt-BR', options)
          //this.chartData.labels?.push(medicao.dateTime.toLocaleDateString('pt-BR', options))
          this.chartData.datasets[0].data.push(Number(gelagua.pesoMinimo) + (gelagua.pesoMaximo - medicao.weight))
          this.chartData.datasets[1].data.push(medicao.weight)
          this.chartData.datasets[2].data.push(medicao.weight)
          this.pesoFinal = medicao.weight
        }

        // Loop do valor atual até o minimo

        const inicio = this.pesoFinal
        const fim = gelagua.pesoMinimo
        const result = regression.linear(dataRegressao)

        for (let i = inicio; i >= fim; i--) {
          console.log(i)
          // Ajustando o modelo de regressão linear
          // Usando a função predict para prever o valor de y para um novo valor de x
          const novoX = Number(i)
          const finalTime = Math.floor(result.predict(novoX)[1])
          const dataFinal = new Date()
          dataFinal.setTime(finalTime)
          const dataFormatada = dataFinal.toLocaleDateString('pt-BR', options)
          this.chartData.labels?.push(dataFormatada)
          this.chartData.datasets[2].data.push(novoX)
          this.dataFinal = dataFormatada
          //this.chartData.datasets[0].data.push(novoX)

          //lineChartDataGenerated = useChartData(lineChartData, 0.7)
        }
      }
    },

    /**
     * Obtem a listagem de devices de medições
     */
    async loadIDDevicesList() {
      const dataToPost = {
        collection: 'medicoes',
        database: 'monitora',
        dataSource: 'Cluster0',
        pipeline: [
          { $match: { weight: { $gte: 0 } } },
          { $group: { _id: '$deviceID', totalContabilizado: { $sum: 1 } } },
          { $sort: { _id: -1 } },
        ],
      }
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'syGEl7ZdHnF6xem4Rn0GVtpHpm1ahFKyuxCffCyv9NpfqkvbrC7bgiyfRFbZKbbB',
      }

      // Realize a solicitação POST com o Axios
      const { data } = await axios.post<IidDeviceDocuments>(
        '/mongo/app/data-vcreo/endpoint/data/v1/action/aggregate',
        dataToPost,
        {
          headers: headers,
        },
      )

      this.idDeviceList = data.documents

      this.chartDataPizza = {
        labels: ['North America', 'South America', 'Australia'],
        datasets: [
          {
            label: 'Balanças com Medições',
            backgroundColor: ['#FF5733', '#D6EAF8', '#08E037'],
            data: [2478, 5267, 734],
          },
        ],
      }

      this.chartDataPizza.datasets[0].data.length = 0
      this.chartDataPizza.labels.length = 0
      //this.chartDataPizza.datasets[0].backgroundColor.length = 0

      for (const deviceID of this.idDeviceList) {
        this.chartDataPizza.labels?.push(deviceID._id)
        this.chartDataPizza.datasets[0].data.push(Number(deviceID.totalContabilizado))
        //this.chartDataPizza.datasets[0].backgroundColor.push('#FF5733')
      }
    },
    /**
     * Obtem a liatagem de gelaguas
     */
    async loadGelaguasList() {
      const dataToPost = {
        collection: 'gelagua',
        database: 'monitora',
        dataSource: 'Cluster0',
        filter: {},
      }
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'syGEl7ZdHnF6xem4Rn0GVtpHpm1ahFKyuxCffCyv9NpfqkvbrC7bgiyfRFbZKbbB',
      }

      // Realize a solicitação POST com o Axios
      const { data } = await axios.post<IGelaguaDocuments>(
        '/mongo/app/data-vcreo/endpoint/data/v1/action/find',
        dataToPost,
        {
          headers: headers,
        },
      )
      this.gelaguasDTO = data.documents
    },
    /**
     * Obtem as medicoes de um device de medição
     * @param pdeviceID
     */
    async loadMedicoesList(pdeviceID: string) {
      const dataToPost = {
        collection: 'medicoes',
        database: 'monitora',
        dataSource: 'Cluster0',
        filter: { deviceID: pdeviceID },
      }
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'syGEl7ZdHnF6xem4Rn0GVtpHpm1ahFKyuxCffCyv9NpfqkvbrC7bgiyfRFbZKbbB',
      }

      // Realize a solicitação POST com o Axios
      const { data } = await axios.post<IMedicoesDocuments>(
        '/mongo/app/data-vcreo/endpoint/data/v1/action/find',
        dataToPost,
        {
          headers: headers,
        },
      )
      this.medicoesDTO = data.documents
    },
    async novoGelagua() {
      const novoGelaguaDTO: IGelagua = {
        _id: '',
        nome: '',
        imagem: 'https://picsum.photos/200/300?random=4',
        descricao: '',
        identificadorBalanca: '',
        ativo: true,
        pesoMaximo: 0,
        pesoMinimo: 0,
      }
      this.gelaguaCorrente = novoGelaguaDTO
    },
    async setGelaguaCorrente(gelagua: IGelagua) {
      this.gelaguaCorrente = gelagua
    },
    async salvarGelagua(gelagua: IGelagua) {
      const dataToPost = {
        collection: 'gelagua',
        database: 'monitora',
        dataSource: 'Cluster0',
        document: {},
      }
      this.gelaguaCorrente = gelagua
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'syGEl7ZdHnF6xem4Rn0GVtpHpm1ahFKyuxCffCyv9NpfqkvbrC7bgiyfRFbZKbbB',
      }

      delete gelagua._id
      dataToPost.document = gelagua

      // Realize a solicitação POST com o Axios
      const { data } = await axios.post<IGelagua[]>(
        '/mongo/app/data-vcreo/endpoint/data/v1/action/insertOne',
        dataToPost,
        {
          headers: headers,
        },
      )
    },
    async excluirGelagua(idGelagua: string) {
      const dataToPost = {
        collection: 'gelagua',
        database: 'monitora',
        dataSource: 'Cluster0',
        filter: {
          _id: { $oid: idGelagua },
        },
      }
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'syGEl7ZdHnF6xem4Rn0GVtpHpm1ahFKyuxCffCyv9NpfqkvbrC7bgiyfRFbZKbbB',
      }
      const { data } = await axios.post<IGelagua[]>(
        '/mongo/app/data-vcreo/endpoint/data/v1/action/deleteOne',
        dataToPost,
        {
          headers: headers,
        },
      )
    },
  },
})

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    async fetchCount() {
      const response = await fetch('https://api.example.com/count')
      const data = await response.json()
      this.count = data.count
    },
  },
})
