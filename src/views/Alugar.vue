<template>
  <div class="w-[70%] h-[65vh] m-auto">
    <div class="mt-5">
      <h1 class="text-4xl text-center">Alugar livro:</h1>
      <div class="flex gap-5">
        <div class="w-full">
          <label for="dd-city" class="mt-2">Selecione o livro:</label>
          <Dropdown
            v-model="selectedItem"
            :options="items"
            optionLabel="label"
            optionValue="value"
            :virtualScrollerOptions="{ itemSize: 38 }"
            inputId="dd-city"
            class="w-full h-10 text-xs md:w-14rem border border-solid rounded-md my-3"
          />
        </div>
        <div class="w-full">
          <label for="dd-city" class="mt-2">Selecione a bibliotecaria:</label>
          <Dropdown
            v-model="selectedItem"
            :options="items"
            optionLabel="label"
            optionValue="value"
            :virtualScrollerOptions="{ itemSize: 38 }"
            inputId="dd-city"
            class="w-full h-10 text-xs md:w-14rem border border-solid rounded-md my-3"
          />
        </div>
        <div class="w-full">
          <label for="dd-city" class="mt-2">Informe seu RA:</label>
          <InputText
            v-model="ra"
            inputId="dd-city"
            class="w-full text-white h-10 text-xs md:w-14rem border border-solid rounded-md my-3"
          />
        </div>
      </div>
      <Button class="m-auto bg-slate-600 px-5 py-1 border border-solid rounded-md" label="Alugar" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedItem = ref()
const ra = ref()
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: `Livro ${i}`, value: i })))
</script>
