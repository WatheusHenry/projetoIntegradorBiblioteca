<template>
  <div class="w-[70%] h-[65vh] m-auto">
    <div class="mt-5">
      <h1 class="text-4xl text-center">Alugar livro:</h1>
      <div class="flex gap-5">
        <div class="w-full">
          <label for="dd-city" class="mt-2">Selecione o livro:</label>
          <Dropdown
            v-model="livroSelecionado"
            :options="livros"
            optionLabel="titulo"
            optionValue="id"
            inputId="dd-city"
            class="w-full h-10 text-xs md:w-14rem border border-solid rounded-md my-3"
          />
        </div>
        <div class="w-full">
          <label for="dd-city" class="mt-2">Selecione a bibliotecaria:</label>
          <Dropdown
            v-model="bibliotecariaSelecionada"
            :options="bibliotecarias"
            optionLabel="nome"
            optionValue="id"
            inputId="dd-city"
            class="w-full h-10 text-xs md:w-14rem border border-solid rounded-md my-3"
          />
        </div>
      </div>
      <Button @click="alugarLivro" class="m-auto bg-slate-600 px-5 py-1 border border-solid rounded-md" label="Alugar" />
      <div v-if="mensagemVisivel" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div class="bg-white p-8 rounded-md">
          <p class="text-xl font-semibold">{{ mensagem }}</p>
          <button @click="fecharMensagem" class="mt-4 bg-slate-600 px-4 py-2 text-white rounded-md">Fechar</button>
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
    const livros = ref([])
    const bibliotecarias = ref([])
    const livroSelecionado = ref(null)
    const bibliotecariaSelecionada = ref(null)
    const mensagemVisivel = ref(false)
    const mensagem = ref('')

    const carregarLivros = async () => {
      const response = await axios.get('http://localhost:8000/api/livros')
      livros.value = response.data
    }

    const carregarBibliotecarias = async () => {
      const response = await axios.get('http://localhost:8000/api/bibliotecarias')
      bibliotecarias.value = response.data
    }

    const alugarLivro = async () => {
      if (!livroSelecionado.value || !bibliotecariaSelecionada.value) {
        mensagem.value = 'Selecione um livro e uma bibliotecária para alugar.'
        mostrarMensagem()
        return
      }

      try {
        await axios.post('http://localhost:8000/api/livros/alugar', {
          livro_id: livroSelecionado.value,
          bibliotecaria_id: bibliotecariaSelecionada.value
        })
        mensagem.value = 'Livro alugado com sucesso!'
        mostrarMensagem()
      } catch (error) {
        mensagem.value = 'Este livro ja está alugado, não foi possivel completar a ação'
        mostrarMensagem()
      }
    }

    const mostrarMensagem = () => {
      mensagemVisivel.value = true
    }

    const fecharMensagem = () => {
      mensagemVisivel.value = false
    }

    onMounted(() => {
      carregarLivros()
      carregarBibliotecarias()
    })

    return {
      livros,
      bibliotecarias,
      livroSelecionado,
      bibliotecariaSelecionada,
      alugarLivro,
      mensagemVisivel,
      mensagem,
      fecharMensagem
    }
  }
}
</script>
