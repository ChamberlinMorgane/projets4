<template>
    <template class="bg-orange-100">

        <router-link class="" to="/"><img class="w-24 ml-10 mt-5 " src="../assets/logo.svg" alt="logo"></router-link>
        <div class=" flex ml-auto gap-10 mr-10 bg-orange-100 text-black">


            <RouterLink class="pt-6 text-xl font-inria xl:text-2xl" to="/Apropos">A propos</RouterLink>
            <a class="pt-6 text-xl font-inria xl:text-2xl" href="#contact">Contact</a>
            <RouterLink class="pt-6 text-xl font-inria xl:text-2xl" to="/Mesprojets">Mes projets</RouterLink>


        </div>
    </template>
</template>
  
<script>

export default {
    components: {},
};
</script>
