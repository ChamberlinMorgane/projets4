<template>
    <header class="sticky top-0 z-50 flex h-16 w-screen items-center bg-orange-100">
        <MenuAlt1Icon class="absolute right-4 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="!MenuOpen" />
        <XIcon class="absolute right-4 z-50 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="MenuOpen" />
        <a href="/">
        </a>
        <nav class="absolute left-0 top-0 bottom-0 right-0 h-screen -translate-x-full bg-orange-100 opacity-0"
            :class="MenuOpen && 'translate-x-0 opacity-100'">
            <ul
                class="flex h-full flex-col items-center justify-center gap-14 text-left font-work-sans text-3xl font-bold text-black">
                <li>
                    <RouterLink to="/" @click="MenuOpen = !MenuOpen">Accueil</RouterLink>
                </li>
                <li>
                    <RouterLink to="/Apropos" @click="MenuOpen = !MenuOpen">A propos</RouterLink>
                </li>
                <li>
                    <RouterLink to="/" @click="MenuOpen = !MenuOpen">Contact</RouterLink>
                </li>
                <li>
                    <RouterLink to="/Mesprojets" @click="MenuOpen = !MenuOpen">Mes Projets</RouterLink>
                </li>

            </ul>
        </nav>
    </header>
</template>

<script>
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/outline";

export default {
    data() {
        return {
            MenuOpen: false,
        };
    },
    components: { MenuAlt1Icon, XIcon },
};
</script> 