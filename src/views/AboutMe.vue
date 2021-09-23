<template>
  <div class="container">
    <div class="presentation">
      <span class="title"> Sobre mi </span>
      <span class="decoration"> </span>

      <p> Tengo 22 años y soy amante del desarrollo web, el diseño y la seguridad informática. Aunque con poca trayectoria profesional, mi objetivo es no parar de aprender y ser un mejor desarrollador.</p>
    </div>

    <div class="aboutme">
      <div class="work">
        <span class="title">
          Trayectoria Profesional
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
          </svg>
        </span>
        <span class="decoration"> </span>

        <div class="card">
          <img src="@/assets/work/geotap.svg" alt="">

          <div class="content">
            <span> <p class="name"> Geotap Group </p> <p class="date"> Agosto 2021 - Octubre 2021 </p> </span>

            <p class="spendWork"> Desarrollador de aplicaciones </p>
            <ul>
              <li> Flutter </li>
              <li> Python </li>
              <li> ColdFusion </li>
              <li> Angular </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="education">
          <span class="title">
            Estudios
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
              <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg>
          </span>
        <span class="decoration"> </span>

        <div class="card">
          <img src="@/assets/work/logo.svg" alt="">

          <div class="content">
            <span> <p class="name"> IES José Rodrigo Botet </p> <p class="date"> Septiembre 2018 - Junio 2021 </p> </span>

            <p class="spendWork"> Tecnico en Desarrollo de Aplicaciones Web </p>
          </div>
        </div>

        <div class="card">
          <img src="@/assets/work/logo.svg" alt="">

          <div class="content">
            <span> <p class="name"> IES José Rodrigo Botet </p> <p class="date"> Septiembre 2016 - Junio 2018 </p> </span>

            <p class="spendWork"> Tecnico en Sistemas Microinformartícos y Redes </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
    width: 160px;
  }

  .container .presentation p{
    width: 80%;
    color: hsl(216, 15%, 52%);
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  /* Work and Education content. */
  .container .work, .education {
    width: 80vw;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container .aboutme .title{
    color: black;
    font-size: 1.6rem;
    font-weight: bold;
    align-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    align-self: flex-start;
  }

  .container .aboutme .title svg{
    color: black;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .container .aboutme .decoration{
    color: black;
    width: 280px;
    align-self: flex-start;
  }

  .container .education .decoration{
    color: black;
    width: 100px;
    align-self: flex-start;
  }

  /* Cards */
  .container .card{
    width: 60%;
    margin-top: 2rem;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #EDF2F7;
    border-radius: 5px;
    color: #616161;
  }

  .container .card img{
    width: 6rem;
    height: 6rem;
    margin: 0 2rem 0 1rem;
  }

  .container .card .content{
    display: flex;
    flex-direction: column;
  }

  .container .card .content span{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 6rem;
    font-size: 1rem;
  }

  .container .card .content span .name{
    color: hsl(0, 90%, 65%);
    font-size: 1.6rem;
    text-align: left;
  }

  .container .card .content ul{
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
  }

  .container .card .content ul li{
    padding: 0.3rem;
    color: white;
    background-color: hsl(0, 90%, 65%);
    border-radius: 5px;
  }

  .container .card .content .spendWork{
    font-size: 1rem;
    align-self: flex-start;
    justify-self: flex-start;
    margin-top: -1rem;
  }

@media screen and (max-width: 1050px){
  .container .presentation p{
    font-size: 1.2rem;
    line-height: 2.4rem;
  }

  .container .card {
    width: 80%;
    padding: 1rem;

  }

  .container .card img{
    width: 4rem;
    height: 4rem;
    margin: 0 2rem 0 1rem;
  }

  .container .card .content span{
    gap: 1rem;
    font-size: 1rem;
  }

  .container .card .content span .name{
    font-size: 1.2rem;
    text-align: left;
  }

  .container .card .content span .date{
    width: 70%
  }

  .container .card .content ul{
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    gap: 0.5rem;
  }

  .container .card .content ul li{
    padding: 0.3rem;
    color: white;
    background-color: hsl(0, 90%, 65%);
    border-radius: 5px;
  }

  .container .card .content .spendWork{
    margin-top: 0;
  }
}
</style>
