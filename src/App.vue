<template>
  <div id="app">
    <header>
      <div class="flex justify-between">
      <div class="inline-flex">
        <img alt="Vue logo" class="logo flex" src="@/assets/livro.png" width="125" height="125" clas/>

        <h1 class="flex mt-5 text-4xl text-center align-middle">BiBlioteca</h1>
      </div>
      <div class="inline-flex gap-2">
        <RouterLink class="h-10" to="/login">Login</RouterLink>
        <RouterLink class="h-10" to="/registro">Registro</RouterLink>
      </div>
    </div> 
      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/livros">Livros</RouterLink>
          <RouterLink to="/alugar">Alugar</RouterLink>
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
  width: 100vw; /* 100% da largura da janela do navegador */
  height: 100vh; /* 100% da altura da janela do navegador */
  display: flex;
  flex-direction: column;
}

header {
  text-align: center;
  padding: 1rem;
  background-color: #333; /* Cor de fundo da barra de navegação */
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
  flex: 1; /* Preenche a altura restante */
  max-width: 100%;
  padding: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
