<template>
  <footer>
    <span> © 2021 Adrián Vidal López </span>
    <div class="social">
      <a href="https://github.com/Adry2612">
        <img src="../assets/social/iconmonstr-github-1.svg" alt="Github">
      </a>
      <a href="www.linkedin.com/adrian-vidal-lopez-812b4b187">
        <img src="../assets/social/linkedin-original.svg" alt="Linkedin">
      </a>

      <a href="https://www.infojobs.net/candidate/my-infojobs.xhtml?dgv=1856105975303444127">
        <img src="../assets/social/ij-logo_reduced.svg" alt="Infojobs">
      </a>

      <a href="mailto:adrianvidal2612@gmail.com">
        <img src="../assets/social/icons8-twitter.svg" alt="Twitter">
      </a>

      <a href="mailto:adrianvidal2612@gmail.com">
        <img src="../assets/social/iconmonstr-email-14.svg" alt="Email">
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15rem 1rem 15rem;
  margin-top: 5rem;
}

footer span{
  color: #616161;
}

footer .social{
  width: 30%;
  display: flex;
  justify-content: space-evenly;
}

footer .social a img{
  width: 25px;
  height: 25px;
}
</style>

