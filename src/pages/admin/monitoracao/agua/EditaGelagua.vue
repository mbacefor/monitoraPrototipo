<template>
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
          <va-chip shadow color="primary" to="Listagem" @click="salvar">{{ t('monitora.garrafao.botaoSalvar') }}</va-chip>
        </va-popover>
      </va-card-content>
    </va-card>
    <va-card class="col-span-12">
      <va-card-title>{{ t('monitora.garrafao.editarTitulo') }}</va-card-title>
      <va-card-content>
        <form>
          <div class="grid grid-cols-12 gap-6">
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoGarrafao._id" placeholder="Identificador do Botijão" label="identificador" readonly=""/>
            </div>
            <div class="col-span-full md:col-span-4 grid grid-cols-1 md:grid-cols-3">
              <fieldset class="flex flex-col">
                <va-switch v-model="dtoGarrafao.ativo" label="Ativo" class="mr-8 mb-2" />
              </fieldset>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12"></div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoGarrafao.nome" placeholder="Texto identificador Botijão" label="Nome" />
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
                text-by="description"
                track-by="id"
                :options="simpleOptions"
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
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { listaGelaguas } from '../../../../stores/data-atlas'
  const store = listaGelaguas()
  const dtoGarrafao = computed(() => store.gelaguasDTO)
  const salvar = () => store.salvarGelagua()
  //const novoGelagua = () => store.novoGelagua()


  const { t } = useI18n()
  /*const dtoGarrafao = ref({
    _id: {
      $oid: '6506fc4545ddf81865da9deb',
    },
    nome: 'Garrafão',
    imagem: 'https://picsum.photos/300/200/?image=1044',
    descricao: 'Garrafão da faculdade 1',
    identificadorBalanca: 'MI SCALE5',
    ativo: true,
    pesoMaximo: 42.8,
    pesoMinimo: 12.6,
  })*/
  const simpleOptions = ref([
    {
      id: 1,
      description: 'First option',
    },
    {
      id: 2,
      description: 'Second option',
    },
    {
      id: 3,
      description: 'Third option',
    },
  ])

  function salvarNovoGelagua() {
    salvar()
  }
</script>

<style lang="scss" scoped>
  fieldset {
    margin-bottom: 0.5rem;
  }
</style>
