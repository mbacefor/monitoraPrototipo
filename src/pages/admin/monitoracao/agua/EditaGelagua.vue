<!--Cria e edita um novo gelagua-->
<template>
  <va-form ref="formRef">
    <div class="form-elements grid grid-cols-12 gap-6">
      <va-card class="larger-padding col-span-12">
        <va-card-title>{{ t('monitora.operacoes') }}</va-card-title>
        <va-card-content>
          <va-popover
            icon="propane_tank"
            color="warning"
            message="Clique e salve os dados do Garrafão!"
            placement="right"
            open
          >
            <va-chip shadow color="primary" @click="validate() && salvarNovoGelagua()">{{
              t('monitora.garrafao.botaoSalvar')
            }}</va-chip>
          </va-popover>
        </va-card-content>
      </va-card>
      <va-card class="col-span-12">
        <va-card-title>{{ t('monitora.garrafao.editarTitulo') }}</va-card-title>
        <va-card-content>
          <div class="grid grid-cols-12 gap-6">
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input
                v-model="dtoGarrafao._id"
                placeholder="Identificador do garrafão"
                label="identificador"
                readonly
              />
            </div>
            <div class="col-span-full md:col-span-4 grid grid-cols-1 md:grid-cols-3">
              <fieldset class="flex flex-col">
                <va-switch v-model="dtoGarrafao.ativo" label="Ativo" class="mr-8 mb-2" />
              </fieldset>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12"></div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input
                v-model="dtoGarrafao.nome"
                placeholder="Texto identificador garrafão"
                label="Nome (*)"
                :rules="[(value) => (value && value.length > 5) || 'Nome é requerido (maior 5 caracteres)']"
              />
            </div>
            <div class="flex md:col-span-8 sm:col-span-6 col-span-12">
              <va-input
                v-model="dtoGarrafao.descricao"
                type="textarea"
                placeholder="Campo livre para descrição do garrafão"
                :rules="[(value) => (value && value.length > 10) || 'Descrição é requerida (maior 10 caracteres)']"
                label="Descrição (*)"
              >
              </va-input>
            </div>
            <div class="flex md:col-span-4 col-span-12">
              <va-select
                v-model="dtoGarrafao.identificadorBalanca"
                label="Identificador Balança (*)"
                searchable
                text-by="_id"
                track-by="_id"
                value-by="_id"
                :options="dtoListaDeviceID"
                :rules="[(v) => v || 'O campo é requerido. Selecione uma das medições!']"
              />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input
                v-model="dtoGarrafao.pesoMinimo"
                type="number"
                label="Peso Mínimo (*)"
                :rules="[(v) => validateNumero(v)]"
              >
              </va-input>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input
                v-model="dtoGarrafao.pesoMaximo"
                type="number"
                label="Peso Máximo (*)"
                :rules="[(v) => validateNumero(v)]"
              >
              </va-input>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </va-form>
</template>

<script setup lang="ts">
  import { ref, computed, reactive } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { listaGelaguas, IGelagua } from '../../../../stores/data-atlas'
  import { useRouter } from 'vue-router'
  import { useColors, useToast } from 'vuestic-ui'
  import { useForm } from 'vuestic-ui'

  const { isValid, validate, reset, resetValidation } = useForm('formRef')
  const { init: initToast } = useToast()
  const { colors } = useColors()
  const router = useRouter()
  const store = listaGelaguas()
  const dtoListaDeviceID = computed(() => store.idDeviceList)
  const carregaDeviceID = () => store.loadIDDevicesList()
  carregaDeviceID()

  const { t } = useI18n()
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
  const dtoGarrafao = reactive(ref(gelaguaInstance))

  async function salvarNovoGelagua() {
    const store = listaGelaguas()
    if (validate()) {
      await store.salvarGelagua(dtoGarrafao.value)
      router.push({ name: 'agua' })
      const color = colors.info
      initToast({ message: 'Novo gelagua criado!', color })
    } else {
      const color = colors.danger
      initToast({ message: 'Novo gelagua criado!', color })
    }
  }

  const validateNumero = (value: string | null) => {
    if (!value) {
      return 'Campo requerido!'
    }
    return Number(value) >= 0 || 'Deve ser mairo que ZERO!'
  }
</script>

<style lang="scss" scoped>
  fieldset {
    margin-bottom: 0.5rem;
  }
</style>
