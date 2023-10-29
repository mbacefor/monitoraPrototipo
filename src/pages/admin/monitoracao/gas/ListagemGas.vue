<template>
  <div class="cards">
    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('monitora.operacoes') }}</va-card-title>
      <va-card-content>
        <va-popover
          icon="propane_tank"
          color="warning"
          message="Clique e cadastre um novo Botijão!"
          placement="right"
          open
        >
          <va-chip shadow color="primary" to="editar">{{ t('monitora.botijao.botaoNovo') }}</va-chip>
        </va-popover>
      </va-card-content>
    </va-card>

    <va-separator />

    <div class="cards-container grid grid-cols-12 items-start gap-6 wrap">
      <template v-for="botijao in botijoes" :key="'item' + botijao.id">
        <va-card class="col-span-12 sm:col-span-6 md:col-span-3" stripe stripe-color="info">
          <va-card-title>
            <va-avatar>
              <img :src="botijao.imagem" :alt="botijao.nome" />
            </va-avatar>
            <va-spacer />
            {{ botijao.nome }}
            <va-spacer />
            <va-button size="small" icon="propane_tank" title="Visualizar o botijão" to="visualizar" />
          </va-card-title>
          <va-card-content>{{ botijao.descricao }}</va-card-content>
        </va-card>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useToast } from 'vuestic-ui'
  import data from '../../../../data/monitora/botijoes.json'

  const { t } = useI18n()
  const { init: initToast } = useToast()

  const botijoes = ref(data.slice(0, 6))
  const appBanners = ref(false)
  const banners = ref(false)
  const notifications = ref(true)

  function getGenderIcon(gender: string) {
    return gender === 'male' ? 'mars' : 'venus'
  }

  function getGenderColor(gender: string) {
    return gender === 'male' ? 'info' : 'success'
  }

  function notify(name: string) {
    initToast({
      message: `Clicked ${name}`,
      position: 'bottom-right',
    })
  }

  function toggleStar(botijao: { starred: boolean }) {
    botijao.starred = !botijao.starred
  }
</script>
