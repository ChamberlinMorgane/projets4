<template class>
    <main>

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

        <h2 class="xl:-mt-52 z-40 font-inria xl:text-8xl text-center text-4xl -mt-60 text-white ">MES PROJETS</h2>


        <div class="grid grid-cols-1 xl:grid-cols-2 gap-20 place-items-center mt-48">

            <div class="xl:max-w-xl max-w-xs bg-lime-800 bg-opacity-50 border border-gray-200 rounded-lg shadow ">
                <a href="Citadelle">
                    <img class="rounded-t-lg h-full w-full" src="../assets/citadelle-besancon-.jpg"
                        alt="citadelle besancon" />
                </a>
                <div class="p-5">
                    <a href="Citadelle">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black text-center font-inria">Animation
                            Citadelle
                            de
                            Besançon</h5>
                    </a>
                    <p class="mb-3 font-normal font-montserrat text-gray-900 text-center">Cette animation a été faite dans
                        le
                        cadre de ma
                        formation en MMi, il s’agit d’un travail en design. </p>


                    <a href="Citadelle"
                        class="inline-flex px-3 py-2 text-sm font-medium font-montserrat text-center text-black bg-b-transparent border-2 border-black rounded-lg hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                        EN SAVOIR PLUS

                    </a>

                </div>
            </div>

            <div class="xl:max-w-xl max-w-xs bg-lime-800 bg-opacity-50 border border-gray-200 rounded-lg shadow ">
                <a href="Cartevisite">
                    <img class="rounded-t-lg w-full h-1/3" src="../assets/cartedevisite.png" alt="carte de visite" />
                </a>
                <div class="p-5">
                    <a href="Cartevisite">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black text-center font-inria">Création carte
                            de visite</h5>
                    </a>
                    <p class="mb-3 font-normal font-montserrat text-gray-900 text-center">Carte de visite pour 3 magasins
                        fait dans le cadre de ma formation en alternance à la Société de la Licorne. </p>


                    <a href="Cartevisite"
                        class="inline-flex  px-3 py-2 text-sm font-medium font-montserrat text-center text-black bg-b-transparent border-2 border-black rounded-lg hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                        EN SAVOIR PLUS

                    </a>

                </div>
            </div>

            <div class="xl:max-w-xl max-w-xs bg-lime-800 bg-opacity-50 border border-gray-200 rounded-lg shadow ">
                <a href="Affiche">
                    <img class="rounded-t-lg h-2/3 w-full" src="../assets/puma-happysocks.png" alt="Affiche puma" />
                </a>
                <div class="p-5">
                    <a href="Affiche">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black text-center font-inria">Affiche Puma,
                            HappySocks, La Chaise Longue</h5>
                    </a>
                    <p class="mb-3 font-normal font-montserrat text-gray-900 text-center">Affiche fait dans le cadre de ma
                        formation en alternance à la Société de la Licorne.</p>


                    <a href="Affiche"
                        class="inline-flex  px-3 py-2 text-sm font-medium font-montserrat text-center text-black bg-b-transparent border-2 border-black rounded-lg hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                        EN SAVOIR PLUS

                    </a>

                </div>
            </div>

            <div class="xl:max-w-xl max-w-xs bg-lime-800 bg-opacity-50 border border-gray-200 rounded-lg shadow ">
                <a href="Emorphoz">
                    <img class="rounded-t-lg h-2/3 w-full" src="../assets/emorphoz.png" alt="Projet S3" />
                </a>
                <div class="p-5">
                    <a href="Emorphoz">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black text-center font-inria">Projet Emorphoz
                        </h5>
                    </a>
                    <p class="mb-3 font-normal font-montserrat text-gray-900 text-center">Projet fait dans le cadre de ma
                        foramtion en MMI ou j'ai eu le rôle de Chargée de communication. </p>


                    <a href="Emorphoz"
                        class="inline-flex  px-3 py-2 text-sm font-medium font-montserrat text-center text-black bg-b-transparent border-2 border-black rounded-lg hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                        EN SAVOIR PLUS

                    </a>

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
