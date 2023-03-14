<template>
    <main>
        <form action="https://formspree.io/f/xvonqaay" method="POST">
            <div
                class="grid grid-cols-1 xl:w-2/4 w-2/3 mx-auto border-4 border-black rounded-xl p-10 z-30 bg-lime-800 bg-opacity-40">
                <input class=" font-montserrat bg-transparent border-b-2 border-black placeholder-black mb-10 mt-2 pb-3"
                    placeholder="Nom" type="text" name="Nom" id="nom">
                <input class="bg-transparent placeholder-black border-b-2 border-black mb-10 mt-2 pb-3" placeholder="Email"
                    type="text" name="Email" id="email">
                <textarea class="placeholder-black bg-transparent border-b-2 border-black " placeholder="Message"
                    name="Message" id="message" cols="30" rows="5"></textarea>
                <button class="border-2 border-black w-20 h-10 mt-7 m-auto" type="submit">Envoyer</button>
            </div>
        </form>
    </main>
</template>