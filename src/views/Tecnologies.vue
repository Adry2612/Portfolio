<template>
  <div class="container">
    <div class="presentation">
      <span class="title"> Tecnologías </span>
      <span class="decoration"> </span>

      <p> Una lista de todas mis tecnologías favoritas y con las que suelo trabajar. También se pueden ver las que estoy aprendiendo actualmente. </p>
    </div>

    <div class="control-buttons">
      <button id="all" class="selected" @click="selectCategory($event)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16"> <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/></svg>
        Todo
      </button>
      <button id="front" @click="selectCategory($event)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
        </svg>
        Desarrollo Front-End
      </button>
      <button id="back" @click="selectCategory($event)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-back" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
        </svg>
        Desarrollo Back-End
      </button>
      <button id="others" @click="selectCategory($event)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        Otros
      </button>
      <button id="learning" @click="selectCategory($event)">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.902 14c-1.722-1.39-2.902-3.968-2.902-6.037 0-3.094 2.158-4.89 4.187-4.961.841-.013 1.729.199 2.394.57-.175-1.278-.747-2.259-1.344-2.958l1.367-.614c.283.407.572 1.129.761 1.979.383-.695.848-1.262 1.475-1.628.669-.391 1.778-.412 2.518-.272-.187.658-.577 1.513-1.491 2.075-.562.345-1.467.522-2.384.453.042.283.073.574.087.867.682-.364 1.44-.484 2.243-.472 2.029.071 4.187 1.867 4.187 4.961 0 2.069-1.18 4.647-2.902 6.037h6.902v2h-19.5c-.276 0-.5.224-.5.5s.224.5.5.5h19.5v2h-18.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5h18.5v2h-18.5c-1.932 0-3.5-1.568-3.5-3.5 0-.83.29-1.593.773-2.193-.476-.455-.773-1.097-.773-1.807 0-1.38 1.12-2.5 2.5-2.5h4.402zm15.098 7h-18v-1h18v1zm-10.986-15c-.663-.552-1.435-1.066-2.836-.996-1 .07-2.264 1.102-2.174 3.162.072 1.682 1.25 3.751 2.473 4.504.997.626 1.711.269 2.523-.214l.038.023c.796.471 1.504.807 2.485.191 1.223-.753 2.401-2.822 2.473-4.504.09-2.06-1.174-3.092-2.174-3.162-1.226-.062-2.02.43-2.808.996zm1.75.548c1.172 1.323.973 2.565-.16 4.907 1.07-.441 2.009-1.907 2-2.933-.011-1.246-.887-2.03-1.84-1.974z"/>
        </svg>
        Aprendiendo actualmente
</button>
    </div>

    <div class="allTecnologies" v-if="loaded==false">
      <tecnologySkeleton v-for="i in 4" :key="i">
      </tecnologySkeleton>
    </div>

    <div class="allTecnologies" v-else>
      <tecnologyComponent v-for="tecnology in tecnologies" :tecnology="tecnology" :key="tecnology">
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
      category: 'all',
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
      this.category = event.target.getAttribute('id')
    },

    loadTecnologies(){
      return fetch('https://adrian-vidal-portfolio-api.herokuapp.com/api/tecnologies')
        .then(res => res.json())
    },

    loadSelectCategory(){
      var selected = document.querySelector('.selected').getAttribute('id')
      this.tecnologies = []

      this.loadTecnologies().then(data => {
        data.forEach(tecno => {
          if(selected == 'all'){
            if(tecno.state == 'Learned') this.tecnologies.push(tecno)
          } else if(selected == 'learning'){
            if(tecno.state == 'Learning') this.tecnologies.push(tecno)
          } else if (selected == tecno.category){
            this.tecnologies.push(tecno)
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
    min-height: 60vh;
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
    cursor: pointer;
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

  .container .control-buttons button.selected{
    background-color: hsl(0, 90%, 65%);
    color: #fff;
  }

  .container .allTecnologies{
    margin-top: 2rem;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 0 1rem 0 1rem;
    margin-bottom: 1rem;
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
