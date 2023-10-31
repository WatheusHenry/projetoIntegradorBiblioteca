<template>
  <div id="app">
    <header>
      <div class="flex justify-between">
        <div class="inline-flex mx-5 mt-3">
          <img
            alt="Vue logo"
            class="logo flex"
            src="@/assets/livro.png"
            width="80"
            height="80"
            clas
          />

          <h1 class="flex text-6xl">BiBlioteca</h1>
        </div>
        <div class="inline-flex gap-5 mt-4 mr-5 h-12">
          <RouterLink
            class="btn bg-green-400 p-2 px-4 text-xl font-bold hover:bg-green-500 inline-flex"
            to="/login"
            >Login</RouterLink
          >
          <RouterLink
            class="btn bg-green-400 p-2 px-4 text-xl font-bold hover:bg-green-500"
            to="/registro"
            >Registro</RouterLink
          >
        </div>
      </div>
      <div class="flex justify-center">
        <nav class="bg-gray-700 rounded p-2 px-5 gap-5">
          <RouterLink class="px-5 p-1 rounded" to="/">Home</RouterLink>
          <RouterLink to="/livros" class="px-5 p-1 rounded">Livros</RouterLink>
          <RouterLink to="/alugar" class="px-5 p-1 rounded">Alugar</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app {
 /* 100% da largura da janela do navegador */
  height: 100vh; /* 100% da altura da janela do navegador */
  display: flex;
  flex-direction: column;
}

header {
  text-align: center;
  padding:1rem 0px ;
  background-color: rgb(31 41 55); /* Cor de fundo da barra de navegação */
  color: white;
}

.logo {
  margin: 0 0 0 0;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 100%;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

main {
  max-width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
