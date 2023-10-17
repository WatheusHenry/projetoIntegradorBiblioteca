<template>
  <div>
    <h1 class="text-4xl">Selecione um Livro</h1>
    <ul>
      <Dropdown
        v-model="selectedItem"
        :options="items"
        optionLabel="label"
        optionValue="value"
        :virtualScrollerOptions="{ itemSize: 38 }"
        placeholder="Select Item"
        class="w-full md:w-14rem border border-solid rounded-md my-3"
      />
    </ul>
    <Button class="bg-slate-600 px-5 py-1 border border-solid rounded-md" label="Alugar" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedItem = ref()
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: `Livro ${i}`, value: i })))
</script>
