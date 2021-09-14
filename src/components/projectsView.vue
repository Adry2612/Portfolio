<template>
  <div class="projectsPage">
    <span class="title"> Mis proyectos </span>
    <span class="decoration"> </span>

    <div class="projects">
      <projectComponent v-for="(project, index) in repos" :key="index" :project="project">
      </projectComponent>
    </div>
  </div>
</template>

<script>
import projectComponent from '@/components/projectComponent'
export default {
  name: 'projectsView',
  components: { projectComponent },
  data () {
    return{
      repos: null
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
    })


  }
}
</script>

<style scoped>
.projectsPage {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.projectsPage .title {
  font-size: 1.6rem;
  color: black;
  margin-right: 50rem;
}

.projectsPage .decoration {
  height: 1px;
  width: 170px;
  margin-top: 5px;
  background-color: #616161;
  opacity: 0.2;
  margin-right: 50rem;
}

.projectsPage .projects{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media screen and (max-width: 800px){
  .projectsPage .title {
    font-size: 1.6rem;
    margin: 4rem 25rem 0 0;
  }

  .projectsPage .decoration {
    margin-right: 25rem;
  }
}
</style>
