import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

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
  backgroundColor: string
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
    pesoFinal: Number(0),
  }),
  actions: {
    async carregarMedicoes(gelagua: IGelagua) {
      this.chartData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            label: 'Vendas',
            backgroundColor: '#f87979',
            data: [65, 59, 80, 81, 56],
          },
          {
            label: 'Vendas',
            backgroundColor: '#B9F7F0',
            data: [65, 59, 80, 81, 56],
          },
        ],
      }
      if (gelagua?.identificadorBalanca) {
        await this.loadMedicoesList(gelagua?.identificadorBalanca)
        const medicoesDTO = this.medicoesDTO
        this.chartData.datasets[0].data.length = 0
        this.chartData.datasets[1].data.length = 0

        this.chartData.labels = []
        this.chartData.datasets[0].label = 'Consumo'
        this.chartData.datasets[1].label = 'Medições'
        this.chartData.datasets[0].backgroundColor = '#FF5733'
        this.chartData.datasets[1].backgroundColor = '#D6EAF8'

        for (const medicao of medicoesDTO) {
          const dateString = medicao.dateTime.toString()
          const dateObject = new Date(dateString)
          //this.chartData.labels?.push(dateObject.getTime().toString())
          this.chartData.labels?.push(medicao.dateTime.toString())
          this.chartData.datasets[0].data.push(Number(gelagua.pesoMinimo) + (gelagua.pesoMaximo - medicao.weight))
          this.chartData.datasets[1].data.push(medicao.weight)
          this.pesoFinal = medicao.weight
        }
        //lineChartDataGenerated = useChartData(lineChartData, 0.7)
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
          { $match: { weight: { $gte: 5 } } },
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
