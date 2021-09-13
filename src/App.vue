<template>
  <div>
    <headerComponent> </headerComponent>
    <contentComponent> </contentComponent>
    <projectsView> </projectsView>
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent'
import contentComponent from '@/components/contentComponent'
import projectsView from '@/components/projectsView'

export default {
  name: 'App',
  components: {
    headerComponent,
    contentComponent,
    projectsView
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(204, 45%, 98%);
}
</style>
