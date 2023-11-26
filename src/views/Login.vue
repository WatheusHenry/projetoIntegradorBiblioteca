<template>
  <div class="flex justify-center mt-5">
    <div class="card">
      <h1 class="text-4xl mb-10">Login</h1>
      <div class="p-fluid">
        <div class="p-field my-3">
          <label class="text-lg font-semibold" for="username">E-mail</label>
          <InputText class="border border-solid p-2" id="username" v-model="email" />
          
        </div>
        <div class="p-field my-3">
          <label class="text-lg font-semibold" for="username">Senha</label>
          <InputText class="border border-solid p-2" id="username" v-model="senha" />
          
        </div>

      </div>
      <Button
        class="mt-10 bg-slate-600 px-5 py-1 border border-solid rounded-md"
        label="Entrar"
        @click="login"
      />
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'

export default {
setup() {
  const email = ref('')


  const login = () => {
    // Lógica de autenticação aqui
    console.log('email:', email.value)

    // Substitua a lógica de console.log() com a autenticação real
  }

  return {
    email,
    login,
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
