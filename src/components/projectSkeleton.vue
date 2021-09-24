<template>
  <div>
    <div class="card" v-for="i in 4" :key="i">
            <div class="img skeleton"></div>
            <div class="info">
              <div class="title">
                <div class="skeleton skeleton-text"></div>
              </div>

              <div class="description">
                  <div class="skeleton skeleton-text"></div>
                  <div class="skeleton skeleton-text"></div>
                  <div class="skeleton skeleton-text"></div>
              </div>
            </div>
    </div>
  </div>
</template>

<style scoped>
/* Skeleton Loading */
.card .skeleton{
  animation: skeleton-loading 1s infinite alternate;
  opacity: .7;
}

.projects .skeleton-text{
  width: 100%;
  height: .5rem;
  border-radius: .125rem;
  margin-bottom: 0.2rem;
}

.card .skeleton-text:last-child{
  width: 15rem;
}

.card {
  width: 60%;
  height: 50%;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #EDF2F7;
  margin: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: 0.3s all ease;
  align-self: center;
  justify-self: center;
}

.card .img{
  width: 42px;
  height: 42px;
  margin-right: 1rem;
}

.card .info .title{
  margin-bottom: 1rem;
}

.card .info{
  display: flex;
  flex-direction: column;
}

@keyframes skeleton-loading {
  0%{
    background-color: hsl(200, 20%, 70%);
  }
  100%{
    background-color: hsl(200, 20%, 95%);
  }
}

</style>