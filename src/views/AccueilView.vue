


<template>
  <main class="bg-orange-100">

    <div class="xl:grid xl:grid-cols-2 xl:items-center pb-28 ">

      <img class="xl:w-2/4 w-80 pt-28 m-auto xl:pt-5 " src="../assets/cathedrale.png" alt="image home page">
      <div class="-mt-64 text-white xl:text-black xl:mt-24 xl:-ml-64">
        <h1 class="xl:text-8xl text-4xl font-inria text-center hover:font-bold">COMMUNICATION</h1>
        <h4 class="text-xl font-inria xl:text-2xl  text-center hover:font-bold ">Morgane CHAMBERLIN</h4>
        <img class="xl:w-36 xl:mt-12 w-20 m-auto xl:hover:w-48" src="../assets/logo.svg" alt="logo">

      </div>

    </div>

    <div class="container mb-32">
      <h2 class="animation xl:text-6xl text-4xl">MES PROJETS MES PROJETS MES PROJETS MES PROJETS
      </h2>
      <div class=" -mt-20 h-28 w-full z-0 bg-lime-800 opacity-40"></div>
    </div>

    <div class="xl:grid xl:grid-cols-2 justify-items-center mt-48 ">
      <div class="grid grid-cols-1">
        <div class="hover:opacity-50 w-full z-0">
          <a href="Cartevisite"><img class="hover:bg-black" src="../assets/cartedevisite.png"
              alt="projet carte de visite"></a>
          <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
          <p class="xl:text-2xl font-inria text-center">CARTE DE VISITE</p>
        </div>
      </div>


      <div class="grid grid-cols-1">
        <div class="hover:opacity-50 w-full z-0">
          <a href="Citadelle"><img class="hover:bg-black" src="../assets/citadellebesancon.png"
              alt="citadelle de besancon"></a>
          <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
          <p class="xl:text-2xl font-inria text-center">CITADELLE DE BESANCON</p>
        </div>
      </div>

      <div class="grid grid-cols-1">
        <div class="hover:opacity-50 w-full z-0">
          <a href="Affiche"><img class="hover:bg-black" src="../assets/puma-happysocks.png" alt="puma affiche"></a>
          <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
          <p class="xl:text-2xl font-inria text-center">AFFICHES</p>
        </div>
      </div>

      <div class="grid grid-cols-1">
        <div class="hover:opacity-50 w-full z-0">
          <a href="Emorphoz"><img class="hover:bg-black" src="../assets/emorphoz.png" alt="projet emorphoz"></a>
          <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
          <p class="xl:text-2xl font-inria text-center">GÉNÉRATEUR DE NFT</p>
        </div>
      </div>
    </div>


    <div class="container mb-32 mt-11">
      <h2 class="animation xl:text-6xl text-4xl">CONTACT CONTACT CONTACT CONTACT CONTACT</h2>
      <div class=" -mt-20 h-28 w-full z-0 bg-pink-300 bg-opacity-20"></div>
    </div>


    <section id="contact">
      <div class=" xl:p-8 xl:my-32 mt-32">
        <ContactForm />
      </div>
    </section>


  </main>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  }
}


</script>

<style>
.container {
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.animation {
  overflow: hidden;
  white-space: nowrap;
  animation: translate 20s linear infinite
}

@keyframes translate {

  0% {
    transform: translateX(-100%)
  }

  100% {
    transform: translateX(100%)
  }

}
</style>