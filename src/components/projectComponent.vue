<template>
  <div class="project">
    <div class="title">
      <img src="../assets/signo-de-github.svg" alt="">
      <span> <h3> {{ project.name }} </h3> </span>
    </div>

    <div> {{project.description}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  props: ["project"]
}
</script>

<style scoped>
  .project {
    width: 60%;
    height: 50%;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #EDF2F7;
    margin: 2rem 0 2rem 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: 0.3s all ease;
    align-self: center;
    justify-self: center;
  }

  .project:hover{
    transform: scale(1.05);
    box-shadow:
      0 6.7px 5.3px rgba(0, 0, 0, 0.044),
      0 22.3px 17.9px rgba(0, 0, 0, 0.066);
  }

  .project .title{
    display: flex;
    flex-direction: row;
    align-content: center;
  }

  .project .title img{
    width: 42px;
    height: 42px;
    margin-right: 1rem;
  }
  .project .title span h3{
    color: hsl(0, 90%, 65%);
    text-align: left;
  }

  .project div{
    color: #616161;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
