<template>
  <div class="projectsPage">
    <span class="title"> Mis proyectos </span>
    <span class="decoration"> </span>

    <div class="projects">
      <projectComponent> </projectComponent>
    </div>
  </div>
</template>

<script>
import projectComponent from '@/components/projectComponent'
export default {
  name: 'projectsView',
  components: { projectComponent },
  data () {
    return {
      repos: []
    }
  },
  methods: {
    async getData () {
      return fetch('https://api.github.com/users/Adry2612/repos')
        .then(response => response.json())
    }
  },
  created () {
    this.getData().then(data => {
      this.repos = data
      console.log(this.repos)
    })
  }
}
</script>

<style scoped>
.projectsPage {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
</style>
