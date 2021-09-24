<template>
<div>
  <div class="tecnology" v-for="i in 10" :key="i">
    <img src="" alt="" class="skeleton">
    <div class="info">
      <div class="title">
        <div class="skeleton skeleton-text"></div>
      </div>
      <div class="description">
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
  /* Skeleton Loading */
  .skeleton{
    animation: skeleton-loading 1s infinite alternate;
    opacity: .7;
  }

  .skeleton-text{
    width: 100%;
    height: .5rem;
    margin-bottom: 0.2rem;
    border-radius: .125rem;
  }

  .skeleton-text:last-child{
    width: 60%;
  }

  @keyframes skeleton-loading {
    0%{
      background-color: hsl(200, 20%, 70%);
    }
    100%{
      background-color: hsl(200, 20%, 95%);
    }
  }

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

.tecnology img{
  width: 42px;
  height: 42px;
}

.tecnology .info .title{
  margin-bottom: 0.5rem;
}

.tecnology .info{
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 60%;
}

</style>