<template>
  <div class="flex justify-center">
    <div class="card">
      <h1 class="text-4xl mb-10">Bem Vindo</h1>
      <div class="p-fluid">
        <div class="p-field my-3">
          <label class="text-lg font-semibold" for="username">RA do Aluno</label>
          <InputText class="border border-solid p-2" id="username" v-model="ra" />
        </div>
      </div>
      <Button
        class="mt-10 bg-slate-600 px-5 py-1 border border-solid rounded-md"
        label="Alugar Livros"
        @click="alugar"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const ra = ref('')

    const alugar = () => {
      // Lógica de autenticação aqui
      console.log('ra:', ra.value)

      // Substitua a lógica de console.log() com a autenticação real
    }

    return {
      ra,
      alugar,
    }
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  padding: 20px;
  text-align: center;
}
</style>
