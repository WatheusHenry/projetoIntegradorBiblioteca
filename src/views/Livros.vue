<template>
  <div>
    <div class="flex justify-center text-center pt-4">
      <h1 class="text-3xl font-bold">Livros</h1>
    </div>
    <div class="flex justify-end text-center my-5">
      <button class="btn bg-green-700 m-auto" @click="abrirModal">Adicionar Livro</button>
    </div>

    <div
      v-if="modalAberto"
      class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div class="bg-white p-8 rounded-md">
        <h2 class="text-2xl font-bold mb-4">Adicionar Livro</h2>
        <form @submit.prevent="adicionarLivro">
          <div class="mb-4">
            <label for="titulo" class="block text-sm font-medium text-gray-600">Título:</label>
            <input
              v-model="novoLivro.titulo"
              type="text"
              id="titulo"
              name="titulo"
              class="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div class="mb-4">
            <label for="autor" class="block text-sm font-medium text-gray-600">Autor:</label>
            <input
              v-model="novoLivro.autor"
              type="text"
              id="autor"
              name="autor"
              class="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div class="mb-4">
            <label for="disponivel" class="block text-sm font-medium text-gray-600"
              >Disponível:</label
            >
            <input
              v-model="novoLivro.disponivel"
              type="checkbox"
              id="disponivel"
              name="disponivel"
              class="mt-1"
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
      <div class="grid grid-cols-4 gap-5 rounded-md p-5">
        <div
          v-for="livro in books"
          :key="livro.id"
          class="shadow bg-slate-100 mb-4 p-4 w-52 border rounded-md"
        >
          <h2 class="text-xl font-bold">{{ livro.titulo }}</h2>
          <p class="text-gray-600">{{ livro.autor }}</p>
          <p v-if="livro.disponivel" class="text-green-500 mb-2">Disponível</p>
          <p v-else class="text-red-500 mb-2">Indisponível</p>
          <router-link to="/alugar" class="bg-green-700 p-1 rounded text-white">
            <button>Alugar</button>
          </router-link>
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
    const books = ref([])
    const modalAberto = ref(false)
    const novoLivro = ref({
      titulo: '',
      autor: '',
      disponivel: true
    })
    const alugar = () => {
      {
        // Adicione a lógica para navegar para a outra rota aqui
        this.$router.push('/alugar')
      }
    }
    const abrirModal = () => {
      modalAberto.value = true
    }

    const fecharModal = () => {
      modalAberto.value = false
      novoLivro.value = {
        titulo: '',
        autor: '',
        disponivel: true
      }
    }
    const carregarLivros = async () => {
      const response = await axios.get('http://localhost:8000/api/livros')
      books.value = response.data
    }

    onMounted(() => {
      carregarLivros()
    })

    const adicionarLivro = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/livros', {
          titulo: novoLivro.value.titulo,
          autor: novoLivro.value.autor,
          disponivel: novoLivro.value.disponivel
        })

        books.value.push(response.data)

        fecharModal()
      } catch (error) {
        console.error('Erro ao adicionar livro:', error)
      }
    }

    return {
      books,
      modalAberto,
      novoLivro,
      abrirModal,
      fecharModal,
      adicionarLivro,
      alugar
    }
  }
}
</script>
