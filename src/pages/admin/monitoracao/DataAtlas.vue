<template>
  <H1>DataAtlas</H1>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import axios from 'axios'

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

  const gelaguas2 = ref<IGelagua[]>([])

  onMounted(() => {
    loadGelaguasList()
  })

  async function loadGelaguasList() {
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
    gelaguas2.value = data.documents
  }
</script>
