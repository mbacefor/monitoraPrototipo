<template>
  <div class="form-elements grid grid-cols-12 gap-6">
    <va-card class="larger-padding col-span-12">
      <va-card-title>{{ t('monitora.operacoes') }}</va-card-title>
      <va-card-content>
        <va-popover
          icon="propane_tank"
          color="warning"
          message="Clique e salve os dados do Botijão!"
          placement="right"
          open
        >
          <va-chip shadow color="primary" to="Listar">{{ t('monitora.botijao.botaoSalvar') }}</va-chip>
        </va-popover>
      </va-card-content>
    </va-card>
    <va-card class="col-span-12">
      <va-card-title>{{ t('monitora.botijao.editarTitulo') }}</va-card-title>
      <va-card-content>
        <form>
          <div class="grid grid-cols-12 gap-6">
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoBotijao._id.$oid" placeholder="Identificador do Botijão" label="identificador" />
            </div>
            <div class="col-span-full md:col-span-4 grid grid-cols-1 md:grid-cols-3">
              <fieldset class="flex flex-col">
                <va-switch v-model="dtoBotijao.ativo" label="Ativo" class="mr-8 mb-2" />
              </fieldset>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12"></div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoBotijao.nome" placeholder="Texto identificador Botijão" label="Nome" />
            </div>
            <div class="flex md:col-span-8 sm:col-span-6 col-span-12">
              <va-input
                v-model="dtoBotijao.descricao"
                type="textarea"
                placeholder="Campo livre para descrição do botijão"
                label="Descrição"
              >
              </va-input>
            </div>
            <div class="flex md:col-span-4 col-span-12">
              <va-select
                v-model="dtoBotijao.identificadorBalanca"
                label="Identificador Balança"
                searchable
                text-by="description"
                track-by="id"
                :options="simpleOptions"
              />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoBotijao.pesoMinimo" type="number" label="Peso Mínimo"> </va-input>
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="dtoBotijao.pesoMaximo" type="number" label="Peso Máximo"> </va-input>
            </div>
          </div>
        </form>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  const dtoBotijao = ref({
    _id: {
      $oid: '6506fc4545ddf81865da9deb',
    },
    nome: 'Botijão Fazenda 3',
    imagem: 'https://picsum.photos/300/200/?image=1044',
    descricao: 'Botijão da Minha Fazenda 3',
    identificadorBalanca: 'MI SCALE5',
    ativo: true,
    pesoMaximo: 42.8,
    pesoMinimo: 12.6,
  })
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
</script>

<style lang="scss" scoped>
  fieldset {
    margin-bottom: 0.5rem;
  }
</style>
