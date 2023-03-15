<template>
    <main class="bg-orange-100">

        <div class=" flex w-full h-96 snap-x overflow-x-auto overflow-y-hidden pb-14 mt-10">
            <div class="w-full shrink-0 rounded-lg shadow-xl ">
                <img src="../assets/communication-1.jpg" alt="image concert" />
            </div>
            <div class="w-full shrink-0 rounded-lg shadow-xl">
                <img src="../assets/communication-2.jpg" alt="image concert" />
            </div>
            <div class="w-full shrink-0 rounded-lg shadow-xl">
                <img src="../assets/communication-3.jpg" alt="image concert" />
            </div>
            <div class="w-full shrink-0 rounded-lg shadow-xl">
                <img src="../assets/communication-4.jpg" alt="image concert" />
            </div>
        </div>

        <h2 class="xl:-mt-52 z-40 font-inria xl:text-8xl text-center text-4xl -mt-60 text-white ">A propos</h2>

        <div class="grid grid-cols-2 ">
            <h2 class="font-caveat xl:text-6xl xl:ml-20 mt-48 text-3xl">PRÉSENTATION</h2>
            <div class="h-1 w-full mt-52 bg-black"></div>
        </div>
        <div class="grid grid-cols-1 xl:flex xl:space-x-20 xl:m-20">
            <img class="w-48 xl:w-72 m-auto mt-10" src="../assets/photo-moi.png" alt="Photo de moi">
            <div class="text-center flex flex-col p-20">
                <p>Je suis Actuellement en deuxième année d’un Bachelor Métiers du Multimédia et de
                    l’Internet, je suis
                    spécialisée
                    en parcours Communication et UX Design.</p>

                <p>
                    Ayant toujours aimer le domaine de la communication digitale j’ai décidé de me spécialisée dans ce
                    parcours
                    et
                    de faire la fin de ma formation en alternance pour avoir en plus de la théorie du concret et quelque
                    chose
                    de
                    professionnalisant.</p>
                <p>
                    acquis une solide expérience en matière de marketing numérique, de stratégie de contenu et de gestion de
                    réseaux
                    sociaux, je voudrais par la suite me spécialiser dans ce domaine.

                    Je suis toujours à l’affut des dernières tendances en matière de communication digitale. Je veux après
                    l’obtention de mon BUT rentrer dans la vie professionnelle ou faire un master en communication et
                    marketing.
                </p>
            </div>
        </div>

        <div class="xl:ml-20 xl:max-w-sm xl:space-y-8 pt-3 pb-6 ml-16">
            <div class="flex space-x-3">
                <img src="../assets/enveloppe.svg" alt="mail">
                <p class="mt-3">cmorgane2003@gmail.com</p>
            </div>
            <div class="flex space-x-3">
                <img src="../assets/iphone.svg" alt="telephone">
                <p class="mt-3">0769935323</p>
            </div>
            <div class="flex space-x-3">
                <img src="../assets/batiment.svg" alt="adresse">
                <p class="mt-3">4 Place tharradin, 25200 Montbéliard</p>
            </div>
        </div>

        <div class="grid grid-cols-2 mb-20">
            <h2 class="font-caveat xl:text-6xl xl:ml-20 mt-10 text-3xl">COMPÉTENCES</h2>
            <div class="h-1 w-full mt-20 bg-black"></div>
        </div>
        <div class="xl:flex justify-center gap-x-20 gap-y-10">
            <div class="grid grid-cols-1  ">
                <img class="xl:w-32 m-auto w-24" src="../assets/Figma.svg" alt="Figma">
                <p class="text-center mt-3 xl:text-xl font-montserrat">Figma</p>
            </div>
            <div>
                <img class="xl:w-32 m-auto w-24" src="../assets/Adobe.svg" alt="Suite Adobe">
                <p class="text-center mt-3 xl:text-xl font-montserrat">Suite Adobe</p>
            </div>
            <div>
                <img class="xl:w-32 m-auto w-24" src="../assets/Vuejs.svg" alt="Vuejs">
                <p class="text-center mt-3 xl:text-xl font-montserrat">VueJS</p>
            </div>
            <div>
                <img class="xl:w-32 m-auto w-24" src="../assets/Wordpress.svg" alt="Wordpress">
                <p class="text-center mt-3 xl:text-xl font-montserrat">Wordpress</p>
            </div>
            <div>
                <img class="xl:w-32 m-auto w-24" src="../assets/reseaux.svg" alt="Wordpress">
                <p class="text-center mt-3 xl:text-xl font-montserrat">Réseaux Sociaux</p>
            </div>
            <div>
                <img class="xl:w-32 m-auto w-24" src="../assets/cv.svg" alt="Wordpress">
                <div class="grid grid-cols-2">
                    <p class="text-center mt-3 xl:text-xl font-montserrat">CV</p>
                    <a href="CV.pdf" download rel="noopener noreferrer" target="_blank"><img class="w-5 mt-5"
                            src="../assets/telecharger.png" alt="icone téléchargement"></a>
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

