<template>
  <div>
    <h1 class="text-4xl mb-2">Livros</h1>
    <DataTable class="border border-solid p-5" :value="products" tableStyle="min-width: 30rem">
      <Column field="name" header="Nome"></Column>
      <Column field="category" header="Categoria"></Column>
      <Column field="quantity" header="Quantidade"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  // Simulando a obtenção de dados do servidor ou de outra fonte
  const dummyData = [
    { code: '001', name: 'Livro 1', category: 'Ficção', quantity: 10 },
    { code: '002', name: 'Livro 2', category: 'Não Ficção', quantity: 5 },
    { code: '003', name: 'Livro 3', category: 'Ficção', quantity: 15 },
    { code: '004', name: 'Livro 4', category: 'Não Ficção', quantity: 7 }
    // Adicione mais objetos conforme necessário
  ]

  products.value = dummyData
})

const products = ref()
</script>
