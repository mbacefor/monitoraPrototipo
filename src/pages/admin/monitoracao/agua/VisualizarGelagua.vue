<template>
  <div class="form-elements grid grid-cols-12 gap-6">
    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('monitora.operacoes') }}</va-card-title>
      <va-card-content>
        <va-popover
          icon="water_drop"
          color="warning"
          message="Clique e salve os dados do Botijão!"
          placement="right"
          open
        >
          <va-chip shadow color="primary" to="Listar">{{ t('monitora.garrafao.botaoSalvar') }}</va-chip>
        </va-popover>
      </va-card-content>
    </va-card>
    <va-card class="col-span-2">
      <va-card-title>{{ t('monitora.garrafao.visualizarTitulo') }}</va-card-title>
      <va-card-content>
        <div class="grid grid-cols-1 gap-6">
          <img src="/public/garrafao.png" alt="garrafao.nome" />
        </div>
      </va-card-content>
    </va-card>
    <va-card class="col-span-10">
      <va-card-title>{{ t('monitora.garrafao.visualizarTitulo') }}</va-card-title>
      <va-card-content>
        <form>
          <div class="grid grid-cols-12 gap-6">
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoGarrafao._id" placeholder="Identificador do garrafão" label="identificador" />
            </div>
            <div class="col-span-full md:col-span-4 grid grid-cols-1 md:grid-cols-3">
              <fieldset class="flex flex-col">
                <va-switch v-model="dtoGarrafao.ativo" label="Ativo" class="mr-8 mb-2" />
              </fieldset>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12"></div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoGarrafao.nome" placeholder="Texto identificador Garrafão" label="Nome" />
            </div>
            <div class="flex md:col-span-8 sm:col-span-6 col-span-12">
              <va-input
                v-model="dtoGarrafao.descricao"
                type="textarea"
                placeholder="Campo livre para descrição do botijão"
                label="Descrição"
              >
              </va-input>
            </div>
            <div class="flex md:col-span-4 col-span-12">
              <va-select
                v-model="dtoGarrafao.identificadorBalanca"
                label="Identificador Balança"
                searchable
                text-by="_id"
                track-by="_id"
                :options="dtoListaDeviceID"
              />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoGarrafao.pesoMinimo" type="number" label="Peso Mínimo"> </va-input>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoGarrafao.pesoMaximo" type="number" label="Peso Máximo"> </va-input>
            </div>
          </div>
        </form>
      </va-card-content>
    </va-card>
    <va-card v-if="lineChartDataGenerated" class="chart-widget col-span-12">
      <va-card-title>{{ t('charts.lineChart') }}</va-card-title>
      <va-card-content>
        <va-chart :data="lineChartDataGenerated" type="line" />
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useChartData } from '../../../../data/charts/composables/useChartData'
  import {
    lineChartData,
    doughnutChartData,
    bubbleChartData,
    pieChartData,
    barChartData,
    horizontalBarChartData,
  } from '../../../../data/charts'
  import VaChart from '../../../../components/va-charts/VaChart.vue'
  import { listaGelaguas, IGelagua } from '../../../../stores/data-atlas'
  const store = listaGelaguas()
  const dtoListaDeviceID = computed(() => store.idDeviceList)
  const carregaDeviceID = () => store.loadIDDevicesList()
  carregaDeviceID()
  const dtoGelaguaCorrente = computed(() => store.gelaguaCorrente)

  const gelaguaInstance: IGelagua = {
    _id: '',
    nome: '',
    imagem: 'https://picsum.photos/300/200/?image=1044',
    descricao: '',
    identificadorBalanca: '',
    ativo: true,
    pesoMaximo: 0,
    pesoMinimo: 0,
  }
  // Crie uma referência (ref) para a instância
  const dtoGarrafao1 = ref(gelaguaInstance)
  const dtoGarrafao = dtoGelaguaCorrente

  const { t } = useI18n()

  const lineChartDataGenerated = useChartData(lineChartData, 0.7)
</script>

<style lang="scss" scoped>
  fieldset {
    margin-bottom: 0.5rem;
  }
  .chart-widget {
    .va-card__content {
      height: 300px;
    }
  }
</style>
