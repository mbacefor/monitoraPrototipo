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
                value-by="_id"
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
        <va-chart :data="lineChartDataGenerated" type="line"  />
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useChartData } from '../../../../data/charts/composables/useChartData'
  import { lineChartData } from '../../../../data/charts'
  import VaChart from '../../../../components/va-charts/VaChart.vue'
  import { listaGelaguas } from '../../../../stores/data-atlas'
  const store = listaGelaguas()
  //store.loadIDDevicesList()
  const dtoListaDeviceID = computed(() => store.idDeviceList)
  const dtoGelaguaCorrente = computed(() => store.gelaguaCorrente)
  const dtoGarrafao = computed(() => store.gelaguaCorrente)

  async function carregarMedicoes() {
    if (dtoGelaguaCorrente.value?.identificadorBalanca) {
      await store.loadMedicoesList(dtoGelaguaCorrente.value?.identificadorBalanca)
      const medicoesDTO = computed(() => store.medicoesDTO)
      lineChartData.datasets[0].data.length = 0
      lineChartData.labels = [] 
      lineChartData.datasets[0].label = 'Medições'
      for (const medicao of medicoesDTO.value) {
        lineChartData.labels?.push(medicao.dateTime.toString())
        lineChartData.datasets[0].data.push(medicao.weight)
      }
      lineChartDataGenerated = useChartData(lineChartData, 0.7)
    }
  }
  carregarMedicoes()

  const { t } = useI18n()
  let lineChartDataGenerated = useChartData(lineChartData, 0.7)
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
