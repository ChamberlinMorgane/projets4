<template>
    <main>
        <form action="https://formspree.io/f/xvonqaay" method="POST">
            <div class="grid grid-cols-1 xl:w-1/4 ml-48 z-30">
                <input class=" text-black font-montserrat bg-transparent border-b-2 border-black" placeholder="Nom"
                    type="text" name="Nom" id="nom">
                <input class="text-black bg-transparent border-b-2 border-black" placeholder="Email" type="text"
                    name="Email" id="email">
                <textarea class="text-black bg-transparent border-b-2 border-black" placeholder="Message" name="Message"
                    id="message" cols="30" rows="10"></textarea>
                <button class="border-2 border-black w-20 h-10" type="submit">Envoyer</button>
            </div>
        </form>
    </main>
</template>