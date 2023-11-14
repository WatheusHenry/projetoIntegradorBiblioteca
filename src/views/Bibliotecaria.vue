<template>
  <div>
    <div class="flex justify-center text-center pt-4">
      <h1 class="text-3xl font-bold">Bibliotecárias</h1>
    </div>
    <div class="flex justify-end text-center my-5">
      <button class="btn bg-green-700 m-auto" @click="abrirModal">Adicionar Bibliotecária</button>
    </div>

    <div
      v-if="modalAberto"
      class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div class="bg-white p-8 rounded-md">
        <h2 class="text-2xl font-bold mb-4">Adicionar Bibliotecária</h2>
        <form @submit.prevent="adicionarBibliotecaria">
          <div class="mb-4">
            <label for="nome" class="block text-sm font-medium text-gray-600">Nome:</label>
            <input
              v-model="novaBibliotecaria.nome"
              type="text"
              id="nome"
              name="nome"
              class="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-600">Email:</label>
            <input
              v-model="novaBibliotecaria.email"
              type="email"
              id="email"
              name="email"
              class="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <button type="submit" class="bg-green-400 text-white px-4 py-2 rounded-md">
            Adicionar
          </button>
          <button @click="fecharModal" class="ml-2 text-gray-600">Cancelar</button>
        </form>
      </div>
    </div>

    <div class="gap-5 m-auto bg-slate-200 rounded-md shadow-sm w-[70%] p-5">
      <h1 class="text-3xl font-bold mb-4">Bibliotecárias</h1>
      <div v-if="bibliotecarias.length === 0">Nenhuma bibliotecária cadastrada.</div>
      <div class="grid grid-cols-4" v-else>
        <div
          v-for="bibliotecaria in bibliotecarias"
          :key="bibliotecaria.id"
          class="mb-4 p-4 border rounded-md"
        >
          <h2 class="text-xl font-bold">{{ bibliotecaria.nome }}</h2>
          <p class="text-gray-600">{{ bibliotecaria.email }}</p>
          <button
            @click="removerBibliotecaria(bibliotecaria.id)"
            class="bg-red-500 text-white px-4 py-2 mt-2 rounded-md"
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const bibliotecarias = ref([])
    const modalAberto = ref(false)
    const novaBibliotecaria = ref({
      nome: '',
      email: ''
    })

    const abrirModal = () => {
      modalAberto.value = true
    }

    const fecharModal = () => {
      modalAberto.value = false
      novaBibliotecaria.value = {
        nome: '',
        email: ''
      }
    }

    const carregarBibliotecarias = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/bibliotecarias')
        bibliotecarias.value = response.data
      } catch (error) {
        console.error('Erro ao carregar bibliotecárias:', error)
      }
    }

    const adicionarBibliotecaria = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/bibliotecarias', {
          nome: novaBibliotecaria.value.nome,
          email: novaBibliotecaria.value.email
        })

        bibliotecarias.value.push(response.data)

        fecharModal()
      } catch (error) {
        console.error('Erro ao adicionar bibliotecária:', error)
      }
    }

    const removerBibliotecaria = async (bibliotecariaId) => {
      try {
        await axios.delete(`http://localhost:8000/api/bibliotecarias/${bibliotecariaId}`)

        bibliotecarias.value = bibliotecarias.value.filter(
          (bibliotecaria) => bibliotecaria.id !== bibliotecariaId
        )
      } catch (error) {
        console.error('Erro ao remover bibliotecária:', error)
      }
    }

    // Chama a função para carregar as bibliotecárias no momento apropriado
    onMounted(() => {
      carregarBibliotecarias()
    })

    return {
      bibliotecarias,
      modalAberto,
      novaBibliotecaria,
      abrirModal,
      fecharModal,
      adicionarBibliotecaria,
      removerBibliotecaria
    }
  }
}
</script>
