<template>
  <div class="flex justify-center mt-5">
    <div class="card">
      <h1 class="text-4xl mb-10">Registrar-se</h1>
      <div class="p-fluid">
        <div class="p-field my-3">
          <label class="text-lg font-semibold" for="email">E-mail</label>
          <InputText class="border border-solid p-2" id="email" v-model="email" />
        </div>
        <div class="p-field my-3">
          <label class="text-lg font-semibold" for="nome">Nome</label>
          <InputText class="border border-solid p-2" id="nome" v-model="nome" />
        </div>
        <div class="p-field my-3">
          <label class="text-lg font-semibold" for="senha">Senha</label>
          <InputText class="border border-solid p-2" id="senha" v-model="senha" />
        </div>
        <div class="p-field my-3">
          <label class="text-lg font-semibold" for="repetirsenha">Repetir Senha</label>
          <InputText class="border border-solid p-2" id="repetirsenha" v-model="repetirsenha" />
        </div>
      </div>
      <Button
        class="mt-10 bg-slate-600 px-5 py-1 border border-solid rounded-md"
        label="Registrar"
        @click="registro"
      />
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'

export default {
  setup() {
    const email = ref('')

    const registro = () => {
      // Lógica de autenticação aqui
      console.log('email:', email.value)

      // Substitua a lógica de console.log() com a autenticação real
    }

    return {
      email,
      registro,
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
