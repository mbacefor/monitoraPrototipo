<!--Realiza a listagem dos botijoes-->

<template>
  <div class="cards">
    <va-card class="larger-padding col-span-12">
      <va-card-content>
        <va-button preset="primary" text-color="#1E3A8A" class="mr-6 mb-3" to="editar" @click="novoBotijao">
          <i class="fas fa-plus"> </i> {{ t('Novo') }}
        </va-button>
      </va-card-content>
    </va-card>

    <va-separator />

    <div class="cards-container grid grid-cols-12 items-start gap-6 wrap">
      <template v-for="botijao in botijao2" :key="botijao._id.$oid">
        <va-card class="col-span-12 sm:col-span-6 md:col-span-3" stripe stripe-color="#1E3A8A ">
          <va-card-title>
            <va-avatar color="#DEE5F2" custom-content>
              <va-icon name="propane_tank" color="primary" style="font-size: 35px" />
            </va-avatar>
            <va-spacer />
            {{ botijao.nome }}
            <va-spacer />
            <va-button size="small" color="#DEE5F2" icon-color="#812E9E" @click="setBotijaoCorrente(botijao)">
              <i class="fas fa-eye text-blue-900"></i>
            </va-button>
          </va-card-title>
          <va-card-content>
            <div><strong>Status:</strong> {{ botijao.ativo ? 'Ativo' : 'Inativo' }}</div>
            <div>{{ botijao.descricao }}</div>
          </va-card-content>
        </va-card>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'
  import { listaBotijao, IBotijao } from '../../../../stores/data-atlas-gas'

  const router = useRouter()
  const { t } = useI18n()
  const store = listaBotijao()
  const botijao2 = computed(() => store.botijaoDTO)
  const increment = () => store.loadBotijaoList()
  const novoBotijao = () => store.novoBotijao()
  increment()
  store.loadIDDevicesList()

  /**
   * Metodo que inicia a visualização do botijao
   * @param botijao
   */
  async function setBotijaoCorrente(botijao: IBotijao) {
    const store = listaBotijao()
    await store.setBotijaoCorrente(botijao)
    await store.carregarMedicoes(botijao)
    router.push({ name: 'gasVisualizar' })
  }
</script>
