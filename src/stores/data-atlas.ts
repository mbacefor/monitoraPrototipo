import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

interface IGelagua {
  _id: number
  imagem: string
  nome: string
  descricao: string
  identificadorBalanca: string
  ativo: boolean
  pesoMaximo: number
  pesoMinimo: number
}

//const gelaguasDTO = ref<IGelagua[]>([])

export const listaGelaguas = defineStore('listaGelaguas', {
  state: () => ({
    gelaguasDTO: ref<IGelagua[]>([]),
  }),
  actions: {
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
