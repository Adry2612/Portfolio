<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="links">
      <a href=""> Sobre mi </a>
      <a href=""> Carrera </a>
      <a href=""> Tecnologías </a>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100vw;
  height: 10vh;
  background-color: #fff;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header .logo {
  width: 10%;
}

.header .logo img{
  width: 4.5rem;
}

.header .links{
  width: 30%;
  display: flex;
  justify-content: space-around;
}

.header .links a{
  font-size: 1.1rem;
  text-decoration: none;
  padding: 10px;
  transition: all 0.3s ease;
  color: hsl(0, 90%, 65%);
}

.header .links a:hover{
  background-color: hsl(0, 90%, 65%);
  color: white;
  border-radius: 5px;
}

</style>
