<template>
  <nav class="d-flex justify-content-between align-items-center">
    <router-link to="/">
      <img class="logo" src="../assets/images/logo.png" alt="" />
    </router-link>

    <div class="dropdown">
      <div
        class=""
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div class="d-none d-sm-block">
          <img src="../assets/images/icon_user.png" alt="" />
          <span class="mx-2 text-white fw-bold">Il mio account</span>
          <i class="fa-solid fa-angle-down text-white"></i>
        </div>
        <div class="d-block d-sm-none text-light">
          <i class="fa-solid fa-bars fa-2xl"></i>
        </div>
      </div>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Le mie richieste</a></li>
        <li><a class="dropdown-item" href="#">Le mie spedizioni</a></li>
        <li><a class="dropdown-item" href="#">Archivio</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  padding: 0.4rem 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
.logo {
  max-width: 235px;
}
span,
i {
  vertical-align: middle;
}
</style>
