<template>
    <template>
        <div class="my-auto grid grid-cols-5 gap-5 bg-orange-100 text-black">
            <a href="/">
                <img src="logo.svg" alt="logo">
            </a>
            <RouterLink class="pt-6 text-xl font-bold xl:text-3xl" to="/Apropos">A propos</RouterLink>
            <RouterLink class="pt-6 text-xl font-bold xl:text-3xl" to="/">Contact</RouterLink>
            <RouterLink class="pt-6 text-xl font-bold xl:text-3xl" to="/Mesprojets">Mes projets</RouterLink>

        </div>
    </template>
</template>
  
<script>

export default {
    components: {},
};
</script>
