<template>
  <div class="header">
    <div class="menu" @click="showMenu()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
      </svg>
    </div>
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="links">
      <a href=""> Sobre mi </a>
      <a href=""> Carrera </a>
      <a href=""> Tecnologías </a>
      <div class="close active">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showMenu() {
      let menu = document.querySelector(".links");

      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      } else {
        menu.classList.add("active");
      }
    }
  }
};
</script>
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

.header .menu{
  display: none;
}

.header .logo {
  width: 10%;
}

.header .logo img {
  width: 4.5rem;
}

.header .links {
  width: 30%;
  display: flex;
  justify-content: space-around;
}

.header .links a {
  font-size: 1.1rem;
  text-decoration: none;
  padding: 10px;
  transition: all 0.3s ease;
  color: hsl(0, 90%, 65%);
}

.header .links a:hover {
  background-color: hsl(0, 90%, 65%);
  color: white;
  border-radius: 5px;
}

.header .close {
  display: none;
}

@media screen and (max-width: 800px) {
  .header {
    width: 100%;
    display: grid;
    grid-template-areas: "menu logo . ";
  }

  .header .menu{
    display: block;
  }
  
  .header .links {
    display: none;
    width: 100%;
    height: 30%;
    background-color: #fff;
    transition: all 1s ease;
    transform: translateY(-100%);
    z-index: 1;
  }

  .header .links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    transform: translateY(0%);
  }

  .header .close.active {
    display: inline-block;
    position: fixed;
    top: 0;
    right: 0;
    color: hsl(0, 90%, 65%);
  }
}
</style>
