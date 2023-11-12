<!--Realiza a listagem dos gelaguas-->

<template>
  <div class="cards">
    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('monitora.operacoes') }}</va-card-title>
      <va-card-content>
        <va-popover
          icon="propane_tank"
          color="warning"
          message="Clique e cadastre um novo Garrafão!"
          placement="right"
          open
        >
          <va-chip shadow color="primary" to="editar" @click="novoGelagua">{{
            t('monitora.garrafao.botaoNovo')
          }}</va-chip>
        </va-popover>
      </va-card-content>
    </va-card>

    <va-separator />

    <div class="cards-container grid grid-cols-12 items-start gap-6 wrap">
      <template v-for="gelagua in gelaguas2" :key="'item' + gelagua.id">
        <va-card class="col-span-12 sm:col-span-6 md:col-span-3" stripe stripe-color="info">
          <va-card-title>
            <va-avatar>
              <img :src="gelagua.imagem" :alt="gelagua.nome" />
            </va-avatar>
            <va-spacer />
            {{ gelagua.nome }}
            <va-spacer />
            <va-button size="small" icon="gear" @click="setGelaguaCorrente(gelagua)" />
          </va-card-title>
          <va-card-content>{{ gelagua.descricao }}</va-card-content>
        </va-card>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { listaGelaguas, IGelagua } from '../../../../stores/data-atlas'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const { t } = useI18n()
  const store = listaGelaguas()
  const gelaguas2 = computed(() => store.gelaguasDTO)
  const increment = () => store.loadGelaguasList()
  const novoGelagua = () => store.novoGelagua()
  increment()
  store.loadIDDevicesList()
  /**
   * Metodo que inicia a visualização do gelhagua
   * @param gelagua
   */
  async function setGelaguaCorrente(gelagua: IGelagua) {
    const store = listaGelaguas()
    await store.setGelaguaCorrente(gelagua)
    await store.carregarMedicoes(gelagua)
    router.push({ name: 'aguaVisualizar' })
  }
</script>
