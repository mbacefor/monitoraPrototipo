import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

interface IGelagua {
  _id: string
  imagem: string
  nome: string
  descricao: string
  identificadorBalanca: string
  ativo: boolean
  pesoMaximo: number
  pesoMinimo: number
}

interface IidDevice {
  _id: string
  totalContabilizado: string
}

//const gelaguasDTO = ref<IGelagua[]>([])

export const listaGelaguas = defineStore('listaGelaguas', {
  state: () => ({
    gelaguasDTO: ref<IGelagua[]>([]),
    gelaguaCorrente: ref<IGelagua>(),
    idDeviceList: ref<IidDevice[]>([]),
  }),
  actions: {
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
      const { data } = await axios.post<IGelagua[]>('/mongo/app/data-vcreo/endpoint/data/v1/action/aggregate', dataToPost, {
        headers: headers,
      })
      this.idDeviceList = data.documents
    },
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
      const { data } = await axios.post<IGelagua[]>('/mongo/app/data-vcreo/endpoint/data/v1/action/find', dataToPost, {
        headers: headers,
      })
      this.gelaguasDTO = data.documents
    },
    async novoGelagua() {
      const novoGelaguaDTO: IGelagua = {
        _id: null,
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
    async salvarGelagua() {
      const dataToPost = {
        collection: 'gelagua',
        database: 'monitora',
        dataSource: 'Cluster0',
        document: {},
      }
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'syGEl7ZdHnF6xem4Rn0GVtpHpm1ahFKyuxCffCyv9NpfqkvbrC7bgiyfRFbZKbbB',
      }
      dataToPost.document = this.gelaguaCorrente

      // Realize a solicitação POST com o Axios
      const { data } = await axios.post<IGelagua[]>(
        '/mongo/app/data-vcreo/endpoint/data/v1/action/insertOne',
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
