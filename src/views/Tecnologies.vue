<template>
  <div class="container">
    <div class="presentation">
      <span class="title"> Tecnologías </span>
      <span class="decoration"> </span>

      <p> Una lista de todas mis tecnologías favoritas y con las que suelo trabajar. También se pueden ver las que estoy aprendiendo actualmente. </p>
    </div>

    <div class="control-buttons">
      <button id="all" class="selected" @click="selectCategory($event)"> <img src="../assets/icons/all.svg"> Todo </button>
      <button id="front" @click="selectCategory($event)"> <img src="../assets/icons/front.svg"> Desarrollo Front-End </button>
      <button id="back" @click="selectCategory($event)"> <img src="../assets/icons/back.svg"> Desarrollo Back-End </button>
      <button id="others" @click="selectCategory($event)"> <img src="../assets/icons/others.svg"> Otros </button>
      <button id="learning" @click="selectCategory($event)"> <img src="../assets/icons/learning.svg"> Aprendiendo actualmente</button>
    </div>

    <div class="allTecnologies" v-if="loaded==false">
      <tecnologySkeleton v-for="i in 4" :key="i">
      </tecnologySkeleton>
    </div>

    <div class="allTecnologies" v-else>
      <tecnologyComponent v-for="(tecnology, index) in tecnologies" :key="index" :tecnology="tecnology">
      </tecnologyComponent>
    </div>
</div>

</template>

<script>
import tecnologyComponent from '@/components/tecnologyComponent'
import tecnologySkeleton from '@/components/tecnologySkeleton'
export default {
  components: { tecnologyComponent, tecnologySkeleton },

  data() {
    return{
      tecnologies: [],
      loaded: false
    }
  },
  methods: {
    selectCategory(event) {
      this.loaded = false
      let buttons = document.querySelectorAll('button');
      for (var i = 0; i<buttons.length; i++){
        if (buttons[i].classList.contains('selected')) {
          buttons[i].classList.remove('selected')
        }
      }
      event.target.classList.add('selected')
      this.loadSelectCategory()
    },

    loadTecnologies(){
      return fetch('http://localhost:3700/api/tecnologies')
        .then(res => res.json())
    },

    loadSelectCategory(){
      var selected = document.querySelector('.selected').getAttribute('id')
      this.tecnologies = []

      this.loadTecnologies().then(data => {
      data.forEach(tecno => {
        if(selected == 'all'){
          if(tecno.state == 'Learned') this.tecnologies.push(tecno)
          console.log(this.tecnologies)
        } else if(selected == 'learning'){
          if(tecno.state == 'Learning') this.tecnologies.push(tecno)
          console.log(this.tecnologies)
        } else if (selected == tecno.category){
          this.tecnologies.push(tecno)
          console.log(this.tecnologies)
        }

        this.loaded = true
      })
    })
    }
  },
  mounted(){
    this.loadTecnologies().then(data => {
      this.tecnologies = data
      this.loaded = true
    })
  }
}

</script>
<style scoped>
.container{
    width: 100vw;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* Page title and decoration. */
  .container .presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .container .presentation .title{
    color: black;
    font-size: 2.4rem;
    font-weight: bold;
  }

  .container .decoration{
    background-color: #616161;
    height: 1px;
    opacity: 0.2;
    margin-top: 5px;
  }

  .container .presentation .decoration{
    width: 220px;
  }

  .container .presentation p{
    width: 80%;
    color: hsl(216, 15%, 52%);
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  .container .control-buttons{
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
  }

 .container .control-buttons button{
    width: 10rem;
    height: 2rem;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    box-shadow:
    0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042),
    0 100px 80px rgba(0, 0, 0, 0.07);
    transition: all 0.5s ease;
  }

  .container .control-buttons button:hover{
    background-color: hsl(0, 90%, 65%);
    color: #fff;
    fill: #fff;
  }

  .container .control-buttons button:hover img{
    fill: #fff;
  }

  .container .control-buttons button#all.selected{
    background-color: #769ECB;
  }
  .container .control-buttons button#front.selected{
    background-color: #9DBAD5;
  }
  .container .control-buttons button#back.selected{
    background-color: #FAF3DD;
  }
  .container .control-buttons button#others.selected{
    background-color: #C8D6B9;
  }
  .container .control-buttons button#learning.selected{
    background-color: #8FC1A9;
  }

  .container .allTecnologies{
    margin-top: 2rem;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 1rem 0 1rem;
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
    padding: 0.5rem;
  }

  .tecnology img{
  background-color: black;
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  border-radius: 5px;
}

.tecnology .info{
  width: 100%;
}

.tecnology .info .title{
  margin-bottom: 1rem;
}


@media screen and (max-width: 1050px){
  .container .presentation p{
    font-size: 1.2rem;
  }

  .container .control-buttons{
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

  }
  .container .allTecnologies {
    margin-top: 2rem;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>