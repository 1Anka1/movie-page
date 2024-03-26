<template>
  <header class="header container">
    <nav class="header__nav-header">
      <div class="header__logo-container">
        <!-- <img src="~/assets/img/tv.png" width="50" height="50" /> -->
        <span class="header__title-logo">MovieBox</span>
      </div>
      <ASearch />
      <div class="header__sign-in-form">
        <a href="#">
          <span>Sign In</span>
        </a>
        <a href="#">
          <svg width="36" height="36" class="header_icon">
            <!-- <use href="~/assets/img/sprite.svg#icon-menu"></use> -->
          </svg>
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header__nav-header {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  align-items: center;
}

.header__logo-container {
  display: flex;
  gap: 20px;
  align-items: center;
}

.header__title-logo {
  font-size: 32px;
  font-weight: 700;
  vertical-align: middle;
}

.header__sign-in-form {
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
}

.header__nav-header a {
  color: black;
  font-family: 'Source Code Pro', monospace;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.7rem;
  transition: 0.3s;
}

.header_icon {
  background-color: #be123c;
  color: black;
  border-radius: 50%;
  padding: 2px 4px;
}

.header__nav-header a:hover {
  color: rgba(134, 50, 183, 0.657);
}
</style>
