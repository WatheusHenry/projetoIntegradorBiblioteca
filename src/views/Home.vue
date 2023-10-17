<template>
  <div class="p-grid p-fluid">
    <div class="p-col-12">
      <h1>Biblioteca</h1>
    </div>

    <div class="p-col-12 p-md-4" v-for="book in books" :key="book.id">
      <div class="book-card flex">
        <div class="book-cover">
          <img :src="book.cover" alt="Capa do livro" />
        </div>
        <div class="book-details">
          <h3>{{ book.title }}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra dui nec dolor
            porta, at imperdiet ante vehicula. Aenean finibus purus a nisl gravida fermentum.
            Integer dapibus euismod tortor et sodales. Pellentesque lectus ligula, suscipit quis
            lorem ac, vulputate vestibulum augue. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. In faucibus ipsum sed nisi mollis, non
            bibendum dui auctor.
          </p>
          <p>{{ book.author }}</p>
          <p>{{ book.published }}</p>
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
