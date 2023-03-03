<script setup>
import { ref, onMounted } from 'vue';

import Chart from '@/components/Chart.vue'
</script>

<template>
    <main class="bg-orange-100">

        <h2>PRÉSENTATION</h2>

        <img src="#" alt="Photo de moi">
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

        <Chart />
        <p>Wordpress</p>
        <p>VueJs</p>
        <p>Suite Adobe</p>
        <p>Goggle Wordpace</p>
        <p>HTML/CSS</p>
        <p>Réseaux Sociaux</p>
        <p>Mettre en place chartjs pour faire des donut en js et les mettres dans mes différentes catégorie. </p>
    </main>
</template>

