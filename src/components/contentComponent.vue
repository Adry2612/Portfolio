<template>
  <div class="content">
    <img src="../assets/photo.jpg" alt="" />

    <div class="description">
      <span id="sayhi">
        Hola! 👋
      </span>
      <span class="decoration"> </span>
      <br />

      <div>
        Me llamo <span class="myName"> Adrián Vidal </span> y soy un desarrollador web junior y amante de la
        tecnologia ubicado en Valencia <span class="country"> ES </span> .
      </div>

      <div>
        Este es mi portfolio, el lugar donde escribo acerca de mis proyectos y
        las cosas que he aprendido. 😀
      </div>

      <button>
        Descarga mi CV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-download"
          viewBox="0 0 16 16"
        >
          <path
            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
          />
          <path
            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: black;
}

.content img {
  background-color: grey;
  width: 25rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 5px;
}

.content .description {
  width: 35rem;
  text-align: left;
  text-justify: left;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  color: #242424;
}

.content .description #sayhi {
  font-size: 2rem;
  font-weight: bold;
}

.content .description .decoration {
  height: 1px;
  width: 80px;
  margin-top: 5px;
  background-color: #616161;
  opacity: 0.2;
}

.content .description div{
  margin-bottom: 1rem;
}

.content .description div .myName{
  font-weight: bold;
}

.content .description div .country{
  letter-spacing: 3px;
}

.content .description button {
  align-self: center;
  font-size: 1.2rem;
  padding: 1.4rem;
  margin-top: 2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease;
  box-shadow:
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 100px 80px rgba(0, 0, 0, 0.07);
}

.content .description button:hover {
  background-color: hsl(0, 90%, 65%);
  color: white;
}

.content .description button svg {
  margin-left: 0.6rem;
}
</style>
