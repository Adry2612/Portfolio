<template>
  <div class="tecnology">
    <img src="" alt="">
    <div class="info">
      <span class="title"> {{ tecnology.name }} </span>
      <span class="description"> {{ tecnology.description }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tecnologyComponent",
  data(){
    return{}
  },
  props: ["tecnology"],
  beforeMount (){

  }
}
</script>

<style scoped>
.tecnology{
  background-color: #fff;
  border: 1px solid #EDF2F7;
  width: 20rem;
  height: 5rem;
  border-radius: 5px;
  margin: 1rem 0 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.3s ease;
}

.tecnology:hover{
  transform: scale(1.05);
    box-shadow:
      0 6.7px 5.3px rgba(0, 0, 0, 0.044),
      0 22.3px 17.9px rgba(0, 0, 0, 0.066);
}

.tecnology img{
  background-color: black;
  width: 50px;
  height: 50px;
}

.tecnology .info{
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 60%;
}

.tecnology .info .title{
  color: hsl(0, 90%, 65%);
  font-size: 1rem;
  font-weight: bold;
}
.tecnology .info{
  color: #616161;
}

@media screen and (max-width: 1050px){
  .tecnology{
    width: 100%;
    justify-self: center;
    align-items: center;
  }
}
</style>
