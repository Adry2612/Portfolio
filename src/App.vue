<template>
  <div>
    <headerComponent> </headerComponent>
    <contentComponent> </contentComponent>
    <projectsView> </projectsView>
    <footerComponent> </footerComponent>
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent'
import contentComponent from '@/components/contentComponent'
import projectsView from '@/components/projectsView'
import footerComponent from '@/components/footerComponent'

export default {
  name: 'App',
  components: {
    headerComponent,
    contentComponent,
    projectsView,
    footerComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

body::-webkit-scrollbar {
    -webkit-appearance: none;
}

body::-webkit-scrollbar:vertical {
    width:10px;
}

body::-webkit-scrollbar-thumb {
    background-color: hsl(0, 90%, 65%);
    border-radius: 20px;
    border: 2px solid #f1f2f3;
}

#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(204, 45%, 98%);
}
</style>
