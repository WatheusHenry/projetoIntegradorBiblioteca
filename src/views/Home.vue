<template>
  <div class="">
    <div class="m-auto text-center py-3 w-[60%]">
      <h1 class="text-3xl font-bold mb-5 text-green-600">Biblioteca</h1>
      <h3 class="text-xl font-bold text-slate-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet sapien luctus,
        viverra nunc at, gravida tortor. Phasellus non justo dignissim, auctor turpis eget,
        venenatis libero.
      </h3>
    </div>
    <div class="text-center py-3">
      <h1 class="text-3xl font-bold text-green-600">Livros em Destaque</h1>
    </div>

    <div class="m-auto grid grid-cols-3 w-[50%] py-3">
      <div class="inline-flex justify-center" v-for="book in books" :key="book.id">
        <div class="card" style="width: 15rem">
          <img :src="book.cover" class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 class="text-3xl">{{ book.title }}</h2>
            <p class="card-text">
              {{ book.author }}
            </p>
            <p class="card-text">
              {{ book.published }}
            </p>
            <div class="flex justify-center mt-3">
              <a
                href="#"
                class="btn text-xl font-bold bg-green-400 hover:bg-green-500 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-green-500 text-white"
                >Alugar</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          id: 1,
          title: 'Livro 1',
          author: 'Autor 1',
          published: '2023',
          cover: 'src/assets/260620.jpg'
        },
        {
          id: 2,
          title: 'Livro 2',
          author: 'Autor 2',
          published: '2022',
          cover: 'src/assets/260620.jpg'
        },
        {
          id: 3,
          title: 'Livro 3',
          author: 'Autor 3',
          published: '2022',
          cover: 'src/assets/260620.jpg'
        }
        // Adicione mais livros aqui
      ]
    }
  }
}
</script>

<style scoped>
.book-card {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  padding: 1rem;
}

.book-cover img {
  max-width: fit-content;
  height: auto;
}

.book-details h3 {
  font-size: 1.5rem;
  margin: 0;
  color: #333;
}

.book-details p {
  margin: 0;
  color: #666;
}
</style>
