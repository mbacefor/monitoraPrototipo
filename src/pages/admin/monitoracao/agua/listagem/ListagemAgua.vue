<template>
  <div class="cards">
    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('cards.title.withStripe') }}</va-card-title>
      <va-card-content>
        <va-chip shadow color="primary" to="../gas"  >{{ t('button.novoGelagua') }}</va-chip>
      </va-card-content>
    </va-card>

    <va-separator />

    <div class="cards-container grid grid-cols-12 items-start gap-6 wrap">
      <template v-for="(gelagua) in gelaguas" :key="'item' + gelagua.id">
        <va-card class="col-span-12 sm:col-span-6 md:col-span-3" stripe stripe-color="info">
          <va-card-title>
            <va-avatar>
              <img :src="gelagua.imagem" :alt="gelagua.nome" />
            </va-avatar>
            <va-spacer />
            {{ gelagua.nome }}
            <va-spacer />
            <va-button size="small" icon="gear" />
          </va-card-title>
          <va-card-content>{{ gelagua.descricao }}</va-card-content>
        </va-card>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vuestic-ui'
import data from '../data.json'

const { t } = useI18n()
const { init: initToast } = useToast()

const gelaguas = ref(data.slice(0, 6))
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

function toggleStar(gelagua: { starred: boolean }) {
  gelagua.starred = !gelagua.starred
}
</script>
