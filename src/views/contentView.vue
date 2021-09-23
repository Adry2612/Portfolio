<template>
  <div>
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

  <projects-view> </projects-view>
  </div>
</template>

<script>

import projectsView from '@/components/projectsView'
export default {
  components: {
    projectsView
  }
}
</script>
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
  margin-left: 2rem;
}

.content .description {
  width: 35rem;
  text-align: left;
  text-justify: left;
  font-size: 1.6rem;
  text-size-adjust: auto;
  display: flex;
  flex-direction: column;
  color: #242424;
  margin: 0 2rem 0 2rem;
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

@media screen and (max-width: 1050px){
  .content img{
    width: 22rem;
    height: 22rem;
    margin-left: 2rem;
  }
}

@media screen and (max-width: 1050px) and (max-height: 700px){
  .content img{
    width: 14rem;
    height: 14rem;
    margin-left: 2rem;
  }

  .content .description #sayhi {
    font-size: 1.6rem;
  }

  .content .description .decoration {
    width: 65px;
  }

  .content .description {
    font-size: 1.2rem;
  }

  .content .description button {
    font-size: 1rem;
    padding: 1.2rem;
    margin-top: 1rem;
  }
}

@media screen and (max-width: 800px){
  .content{
    flex-direction: column;
  }

  .content img{
    width: 16rem;
    height: 16rem;
    margin: 18rem 0 2rem 0;
  }

  .content .description{
    font-size: 1.6rem;
    width: 70vw;
    margin: 2rem;
  }

  .content .description #sayhi{
    font-size: 1.8rem;
  }

  .content .description .decoration{
    width: 65px;
  }
}

@media screen and (max-width: 800px) and (max-height: 700px){
  .content{
      flex-direction: row;
  }

  .content img{
    width: 16rem;
    height: 16rem;
    margin-left: 10rem;
  }

}

@media screen and (max-width: 600px){
  .content img{
    width: 14rem;
    height: 14rem;
    margin-top: 2rem;
  }

  .content .description{
  font-size: 1rem;
  text-size-adjust: auto;
  }
}

@media screen and (max-height: 700){
  .content img{
      width: 14rem;
      height: 14rem;
      margin-top: 2rem;
    }
}
</style>
