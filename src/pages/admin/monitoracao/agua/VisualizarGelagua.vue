<template>
  <div class="form-elements grid grid-cols-12 gap-6">
    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('monitora.operacoes') }}</va-card-title>
      <va-card-content>
        <va-popover
          icon="water_drop"
          color="warning"
          message="Clique para voltar para a tela de listagem!"
          placement="right"
          open
        >
          <va-chip shadow color="primary" to="listagem">{{ t('monitora.garrafao.listagem') }}</va-chip>
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
              <va-input v-model="dtoGarrafao._id" placeholder="Identificador do garrafão" label="identificador" readonly/>
            </div>
            <div class="col-span-full md:col-span-4 grid grid-cols-1 md:grid-cols-3">
              <fieldset class="flex flex-col">
                <va-switch v-model="dtoGarrafao.ativo" label="Ativo" class="mr-8 mb-2" readonly/>
              </fieldset>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12"></div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoGarrafao.nome" placeholder="Texto identificador Garrafão" label="Nome" readonly />
            </div>
            <div class="flex md:col-span-8 sm:col-span-6 col-span-12">
              <va-input
                v-model="dtoGarrafao.descricao"
                type="textarea"
                placeholder="Campo livre para descrição do botijão"
                label="Descrição"
                readonly
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
                readonly
              />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoGarrafao.pesoMinimo" type="number" label="Peso Mínimo" readonly> </va-input>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoGarrafao.pesoMaximo" type="number" label="Peso Máximo" readonly> </va-input>
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
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import VaChart from '../../../../components/va-charts/VaChart.vue'
  import { listaGelaguas } from '../../../../stores/data-atlas'
  const store = listaGelaguas()
  const { t } = useI18n()
  const dtoListaDeviceID = computed(() => store.idDeviceList)
  const dtoGarrafao = computed(() => store.gelaguaCorrente)
  const lineChartDataGenerated = computed(() => store.chartData)
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
