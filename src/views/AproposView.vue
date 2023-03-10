<script setup>
import { ref, onMounted } from 'vue';

import Chart from '@/components/Chart.vue'
</script>

<template>
    <main class="bg-orange-100">

        <h2>PRÉSENTATION</h2>

        <img class="w-20 xl:w-64 " src="photo-moi.png" alt="Photo de moi">
        <p>Je suis Actuellement en deuxième année d’un Bachelor Métiers du Multimédia et de l’Internet, je suis spécialisée
            en parcours Communication et UX Design.

            Ayant toujours aimer le domaine de la communication digitale j’ai décidé de me spécialisée dans ce parcours et
            de faire la fin de ma formation en alternance pour avoir en plus de la théorie du concret et quelque chose de
            professionnalisant.

            acquis une solide expérience en matière de marketing numérique, de stratégie de contenu et de gestion de réseaux
            sociaux, je voudrais par la suite me spécialisée me spécialiser dans ce domaine.

            Je suis toujours à l’affut des dernières tendances en matière de communication digitale. Je veux après
            l’obtention de mon BUT rentrer dans la vie professionnelle ou faire un master dans la communication et
            marketing.
        </p>


        <h2>MES COMPÉTENCES</h2>
        <div class="xl:flex space-x-14 ">
            <div class="grid grid-cols-1">
                <img class="xl:w-32" src="Figma.svg" alt="Figma">
                <p class="mx-auto">Figma</p>
            </div>
            <div>
                <img class="xl:w-32" src="Adobe.svg" alt="Suite Adobe">
                <p class="mx-auto">Suite Adobe</p>
            </div>
            <div>
                <img class="xl:w-32" src="Vuejs.svg" alt="Vuejs">
                <p class="mx-auto">VueJS</p>
            </div>
            <div>
                <img class="xl:w-32" src="Wordpress.svg" alt="Wordpress">
                <p class="mx-auto">Wordpress</p>
            </div>
        </div>





    </main>
</template>

