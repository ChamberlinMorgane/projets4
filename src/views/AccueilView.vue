


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

    <h2 class="xl:mx-48 xl:text-6xl text-2xl justify-center">MES PROJETS MES PROJETS </h2>
    <div class=" -mt-20 mb-16 h-28 w-full z-0 bg-lime-800 opacity-40"></div>
    <div class="xl:grid xl:grid-cols-2 justify-items-center ">
      <div class="grid grid-cols-1">
        <div class=" -mb-20 opacity-10 hover:opacity-50 h-96 w-full z-0 bg-orange-50 hover:bg-black ">
        </div>
        <img class="-mt-72" src="cartedevisite.png" alt="projet carte de visite">
        <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
        <p class="xl:text-2xl font-inria m-auto">CARTE DE VISITE</p>
      </div>


      <div class="grid grid-cols-1">
        <div class=" -mb-20 opacity-10 hover:opacity-50 h-96 w-full z-0 bg-orange-50 hover:bg-black ">
        </div>
        <img class="-mt-72" src="citadellebesancon.png" alt="citadelle de besancon">
        <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
        <p class="xl:text-2xl font-inria m-auto">CITADELLE DE BESANCON</p>
      </div>

      <div class="grid grid-cols-1">
        <div class=" -mb-20 opacity-10 hover:opacity-50 h-96 w-full z-0 bg-orange-50 hover:bg-black ">
        </div>
        <img class="-mt-72" src="puma-happysocks.png" alt="puma affiche">
        <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
        <p class="xl:text-2xl font-inria m-auto">AFFICHES</p>
      </div>

      <div class="grid grid-cols-1">
        <div class=" -mb-20 opacity-10 hover:opacity-50 h-96 w-full z-0 bg-orange-50 hover:bg-black ">
        </div>
        <img class="-mt-72" src="emorphoz.png" alt="projet emorphoz">
        <div class=" h-1 w-1/2 m-auto mt-3 bg-black"></div>
        <p class="xl:text-2xl font-inria m-auto">GÉNÉRATEUR DE NFT</p>
      </div>
    </div>



    <h2>CONTACT CONTACT CONTACT</h2>
    <div>
      <ContactForm />
    </div>

    <div class=" h-96 w-full z-0 bg-lime-800 opacity-40"></div>


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