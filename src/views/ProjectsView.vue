<template>
  <div class="projectsPage">
    <div class="presentation">
      <span class="title"> Proyectos </span>
      <span class="decoration"> </span>

      <p> Aqui se pueden encontrar algunos de los proyectos en los que he trabajado. También estan disponibles en mi perfil de <a href="">GitHub</a>.</p>
    </div>

    <div class="projects" v-if="loaded==false">
      <projectSkeleton v-for="i in 4" :key="i" > </projectSkeleton>
    </div>

    <div class="projects" v-else>
      <projectComponent v-for="(project, index) in repos" :key="index" :project="project" >
      </projectComponent>
    </div>
 
  </div>
</template>

<script>
import projectComponent from '@/components/projectComponent'
import projectSkeleton from '@/components/projectSkeleton'
export default {
  name: 'projectsView',
  components: { projectComponent, projectSkeleton },
  data () {
    return{
      repos: null,
      loaded: false
    }
  },
  methods: {
    getData () {
      return fetch('https://api.github.com/users/Adry2612/repos')
        .then(response => response.json())
    }
  },
  mounted () {
    this.getData().then(data => {
      this.repos = data
      this.loaded = true
    })
  }
}
</script>

<style scoped>
.projectsPage{
  width: 100vw;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Page title and decoration. */
.projectsPage .presentation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.projectsPage .presentation .title{
  color: black;
  font-size: 2.4rem;
  font-weight: bold;
}

.projectsPage .decoration{
  background-color: #616161;
  height: 1px;
  opacity: 0.2;
  margin-top: 5px;
}

.projectsPage .presentation .decoration{
  width: 180px;
}

.projectsPage .presentation p{
  width: 80%;
  color: hsl(216, 15%, 52%);
  font-size: 1.4rem;
  line-height: 2.4rem;
}

.projectsPage .presentation p a{
  font-weight: bold;
  color: hsl(216, 15%, 52%);
  text-decoration: none;
  cursor: pointer;
}

.projectsPage .projects{
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media screen and (max-width: 1050px){
  .projectsPage .title {
    font-size: 1.6rem;
  }
}

@media screen and (max-width: 800px){
  .projectsPage .projects{
    width: 100vw;
    grid-template-columns: repeat(1,1fr);
  }
}
</style>
