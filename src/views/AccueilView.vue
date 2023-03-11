


<template>
  <main class="bg-orange-100">

    <div class="xl:flex xl:justify-center pb-28 ">

      <img class="xl:w-1/4 w-80 pt-28 m-auto xl:pt-5 " src="cathedrale.png" alt="image home page">
      <div class="-mt-64 text-white xl:text-black xl:mt-24 ">
        <h1 class="xl:text-6xl text-4xl font-inria">COMMUNICATION</h1>
        <h4 class="text-xl font-inria xl:text-2xl xl:ml-72 ">Morgane CHAMBERLIN</h4>
        <img class="xl:w-36 xl:ml-48 xl:mt-12 w-20" src="logo.svg" alt="logo">

      </div>

    </div>

    <div class="container mb-32">
      <h2 class="animation xl:text-6xl text-2xl">MES PROJETS MES PROJETS MES PROJETS MES PROJETS
      </h2>
      <div class=" -mt-20 h-28 w-full z-0 bg-lime-800 opacity-40"></div>
    </div>

    <div class="xl:grid xl:grid-cols-2 justify-items-center mt-48 ">
      <div class="grid grid-cols-1">
        <div class="hover:opacity-50 w-full z-0">
          <img class="hover:bg-black" src="cartedevisite.png" alt="projet carte de visite">
          <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
          <p class="xl:text-2xl font-inria text-center">CARTE DE VISITE</p>
        </div>
      </div>


      <div class="grid grid-cols-1">
        <div class="hover:opacity-50 w-full z-0">
          <img class="hover:bg-black" src="citadellebesancon.png" alt="citadelle de besancon">
          <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
          <p class="xl:text-2xl font-inria text-center">CITADELLE DE BESANCON</p>
        </div>
      </div>

      <div class="grid grid-cols-1">
        <div class="hover:opacity-50 w-full z-0">
          <img class="hover:bg-black" src="puma-happysocks.png" alt="puma affiche">
          <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
          <p class="xl:text-2xl font-inria text-center">AFFICHES</p>
        </div>
      </div>

      <div class="grid grid-cols-1">
        <div class="hover:opacity-50 w-full z-0">
          <img class="hover:bg-black" src="emorphoz.png" alt="projet emorphoz">
          <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
          <p class="xl:text-2xl font-inria text-center">GÉNÉRATEUR DE NFT</p>
        </div>
      </div>
    </div>



    <h2>CONTACT CONTACT CONTACT</h2>

    <section id="contact">
      <div class="w-full h-96 bg-lime-800 bg-opacity-40 p-8 ">
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
  animation: translate 15s linear infinite
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