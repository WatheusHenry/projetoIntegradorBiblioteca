<template>
  <div class="">
    <div class="text-center py-5">
      <h1 class="text-5xl">Livros</h1>
    </div>
    <div class="grid grid-cols-4 gap-5 p-5">
      <div class="inline-flex justify-center" v-for="book in books" :key="book.id">
        <div class="card " style="width: 15rem">
          <img :src="book.cover" class="card-img-top "  alt="..." />
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
                class="btn text-2xl font-bold bg-green-400 hover:bg-green-500 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-green-500 text-white"
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
          id: 1,
          title: 'Livro 1',
          author: 'Autor 1',
          published: '2023',
          cover: 'src/assets/260620.jpg'
        },
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
        },
        {
          id: 4,
          title: 'Livro 4',
          author: 'Autor 4',
          published: '2022',
          cover: 'src/assets/260620.jpg'
        },
        {
          id: 5,
          title: 'Livro 5',
          author: 'Autor 5',
          published: '2022',
          cover: 'src/assets/260620.jpg'
        },
        {
          id: 5,
          title: 'Livro 5',
          author: 'Autor 5',
          published: '2022',
          cover: 'src/assets/260620.jpg'
        },
        {
          id: 5,
          title: 'Livro 5',
          author: 'Autor 5',
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
