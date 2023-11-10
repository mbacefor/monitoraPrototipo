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
              <img :src="gelagua.imagem" :alt="gelagua.nome"/>
            </va-avatar>
            <va-spacer />
            {{ gelagua.nome }}
            <va-spacer />
            <va-button size="small" icon="gear" to="visualizar" @click="setGelaguaCorrente(gelagua)"/>
          </va-card-title>
          <va-card-content>{{ gelagua.descricao }}</va-card-content>
        </va-card>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  import { listaGelaguas, IGelagua } from '../../../../stores/data-atlas'
  const store = listaGelaguas()
  const gelaguas2 = computed(() => store.gelaguasDTO)
  const increment = () => store.loadGelaguasList()
  const novoGelagua = () => store.novoGelagua()
  increment()
  store.loadIDDevicesList()
  async function setGelaguaCorrente(gelagua: IGelagua) {
    const store = listaGelaguas()
    await new Promise(() => store.setGelaguaCorrente(gelagua))
  }
</script>
