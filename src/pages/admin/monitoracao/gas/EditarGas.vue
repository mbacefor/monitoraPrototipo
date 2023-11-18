<!--Cria e edita um novo botijao-->
<template>
  <va-form ref="formRef">
    <div class="form-elements grid grid-cols-12 gap-6">
      <va-card class="larger-padding col-span-12">
        <va-card-content class="space-x-3">
          <va-button preset="primary" text-color="#1E3A8A" class="mr-6 mb-1" to="listagem">
            <i class="fas fa-arrow-left"></i> Voltar
          </va-button>
          <va-button preset="primary" text-color="#1E3A8A" class="mr-6 mb-3" to="Listagem" @click="salvarNovoBotijao">
            <i class="fas fa-save"></i> Salvar
          </va-button>
        </va-card-content>
      </va-card>
      <va-card class="col-span-12">
        <va-card-title>{{ t('Cadastro Botijão') }}</va-card-title>
        <va-card-content>
          <form>
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-12 sm:col-span-8 md:col-span-8 mb-2">
                <label for="identificadorBotijao" class="text-lg font-bold text-blue-900"
                  >Identificador do Botijão</label
                >
                <va-input
                  id="identificadorBotijao"
                  v-model="dtoBotijao._id"
                  class="bg-gray-100 cursor-not-allowed text-gray-500"
                  placeholder="Identificador"
                  readonly
                />
              </div>
              <div class="col-span-12 sm:col-span-8 md:col-span-4 md:col-start-1">
                <label for="nomeBotijao" class="text-lg font-bold text-blue-900">Nome</label>
                <va-input id="nomeBotijao" v-model="dtoBotijao.nome" placeholder="Nome do Botijão" />
              </div>
              <div class="col-span-12 sm:col-span-8 md:col-span-4">
                <label for="nomeBotijao" class="text-lg font-bold text-blue-900">Identificador Balança</label>
                <va-select
                  v-model="dtoBotijao.identificadorBalanca"
                  searchable
                  text-by="_id"
                  track-by="_id"
                  value-by="_id"
                  :options="dtoListaDeviceID"
                />
              </div>
              <div class="col-span-12 md:col-span-2 md:col-start-10">
                <label class="text-lg font-bold text-blue-900">Ativo</label>
                <fieldset class="flex flex-col">
                  <va-switch v-model="dtoBotijao.ativo" color="#1E3A8A" class="mr-8 mb-2" />
                </fieldset>
              </div>
              <div class="col-span-12 sm:col-span-10 md:col-span-10">
                <label for="descricaoBotijao" class="text-lg font-bold text-blue-900">Descrição</label>
                <va-input
                  id="descricaoBotijao"
                  v-model="dtoBotijao.descricao"
                  type="textarea"
                  placeholder="Campo livre para descrição do botijão"
                />
              </div>
              <div class="col-span-12 sm:col-span-6 md:col-span-4">
                <label for="tipoBotijao" class="text-lg font-bold text-blue-900">Tipo de Botijão</label>
                <select id="tipoBotijao" v-model="dtoBotijao.tipoBotijao" class="w-full p-2 bg-blue-100 rounded">
                  <option value="">Selecione o tipo de botijão</option>
                  <option v-for="tipo in tipoBotijaoData" :key="tipo.id" :value="tipo.id">{{ tipo.nome }}</option>
                </select>
              </div>

              <div v-if="true" class="col-span-12 sm:col-span-6 md:col-span-4">
                <label for="pesoMinimo" class="text-lg font-bold text-blue-900">Peso Minimo</label>
                <va-input
                  id="pesoMinimo"
                  v-model="dtoBotijao.pesoMinimo"
                  class="bg-gray-100 cursor-not-allowed text-gray-500"
                  type="number"
                  readonly
                />
              </div>
              <div v-if="true" class="col-span-12 sm:col-span-6 md:col-span-4">
                <label for="pesoMaximo" class="text-lg font-bold text-blue-900">Peso Máximo</label>
                <va-input
                  id="pesoMaximo"
                  v-model="dtoBotijao.pesoMaximo"
                  class="bg-gray-100 cursor-not-allowed text-gray-500"
                  type="number"
                  readonly
                />
              </div>
            </div>
          </form>
        </va-card-content>
      </va-card>
    </div>
  </va-form>
</template>

<script setup lang="ts">
  import { ref, computed, reactive, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { listaBotijao, IBotijao } from '../../../../stores/data-atlas-gas'
  import { useRouter } from 'vue-router'
  import { useColors, useToast } from 'vuestic-ui'
  import { useForm } from 'vuestic-ui'
  import tipoBotijaoData from '../../../../data/monitora/tipoBotijao.json'

  const { isValid, validate, reset, resetValidation } = useForm('formRef')
  const { init: initToast } = useToast()
  const { colors } = useColors()
  const router = useRouter()
  const store = listaBotijao()
  const dtoListaDeviceID = computed(() => store.idDeviceList)
  const carregaDeviceID = () => store.loadIDDevicesList()
  carregaDeviceID()

  const { t } = useI18n()
  const botijaoInstance: IBotijao = {
    _id: '',
    nome: '',
    imagem: 'https://picsum.photos/300/200/?image=1044',
    descricao: '',
    identificadorBalanca: '',
    ativo: true,
    tipoBotijao: '',
    pesoMaximo: 0,
    pesoMinimo: 0,
  }
  // Crie uma referência (ref) para a instância
  const dtoBotijao = reactive(ref(botijaoInstance))

  // Assista a alterações no tipoBotijao e atualize pesoMinimo
  watch(
    () => dtoBotijao.value.tipoBotijao,
    (novoValor, valorAntigo) => {
      const tipoSelecionado = tipoBotijaoData.find((tipo) => tipo.id === novoValor)
      dtoBotijao.value.pesoMinimo = tipoSelecionado ? parseFloat(tipoSelecionado.pesoMinimo.$numberDecimal) : 0
      dtoBotijao.value.pesoMaximo = tipoSelecionado ? parseFloat(tipoSelecionado.pesoMaximo.$numberDecimal) : 0
    },
  )

  async function salvarNovoBotijao() {
    const store = listaBotijao()
    if (validate()) {
      await store.salvarBotijao(dtoBotijao.value)
      router.push({ name: 'gas' })
      const color = colors.info
      initToast({ message: 'Novo botijão criado!', color })
    } else {
      const color = colors.danger
      initToast({ message: 'Novo botijão criado!', color })
    }
  }
</script>

<style lang="scss" scoped>
  fieldset {
    margin-bottom: 0.5rem;
  }
</style>
