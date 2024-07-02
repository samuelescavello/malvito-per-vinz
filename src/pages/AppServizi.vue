<template>
    <main>
        <div class="container mb-6">
            <div class="row mb-3">
                <div class="col-12 text-center mt-5 mb-3">
                    <h1><em>le nostre stanze</em></h1>
                    <p>Le camere sono tutte molto spaziose e dotate di bagno privato.
                        I servizi sono nuovi, ampi e confortevoli.
                        L'arredamento delle camere è curato in ogni dettaglio, nel rispetto dello stile del luogo e
                        dell'ambiente.
                        Tutti gli ambienti hanno pavimenti in ceramica e più finestre da cui godere di splendidi
                        panorami, appagati da uno scenario irripetibile.
                        Il bed & breakfast dispone di X stanze, arredate con stile sobrio ed elegante, tutte dotate di
                        aria condizionata, bagno, TV e cassaforte.
                        Agli ospiti viene offerto: servizio di prima colazione a buffet nella sala al primo piano,
                        parcheggio privato e biancheria.
                        Le nostre stanze godono tutte di un ampia veduta, completamente arredate e corredate per
                        rivivere il calore di casa propria.
                        Tutte le camere sono scrupolosamente curate e pulite, con la massima attenzione nei particolari.
                    </p>
                </div>
                <div class="row my-5 text-center">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" v-for="(card, index) in cards" :key="index">
                        <div class="card">
                            <img :src="card.image"  :alt="card.title">
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="text-center "><em>colazione</em></h2>`
            <p>La prima colazione è il momento più importante di tutta la giornata, perché ci deve ricaricare dopo il digiuno notturno.
Al mattino possiamo anche toglierci la voglia di qualcosa di dolce...
La colazione servita nella nostra accogliente cucina comprende: caffè (tè, latte, cappuccino, cioccolata), brioches, fette biscottate, pane, burro e marmellata, cereali, succhi di frutta, torte fatte in casa assicurando un pieno di energia per tutta la giornata.
Nel caso necessitate di cibi particolari o siate allergici possiamo venire incontro alle vostre esigenze, se avvisati con dovuto anticipo.</p>
            <div class="row my-5 text-center">
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" v-for="(last, index) in colazione" :key="index">
                    <div class="card" id="card-colazione">
                        <img :src="last.image"  :alt="last.title">
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
export default {
    name: "AppStanze",
    data() {
        return {
            cards: [
                {
                    title: 'Card title 1',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/malvitocamera.jpg'
                },
                {
                    title: 'Card title 2',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/malvito2.jpg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/malvito3.jpg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/malvito4.jpg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/malvito5.jpg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/malvito6.jpg'
                },

            ],

            colazione: [
                {
                    title: 'Card title 1',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/stanza-colazione.jpg'
                },
                {
                    title: 'Card title 2',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/col1.jpeg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/col2.jpeg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/col3.jpeg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/col4.jpeg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/col5.jpeg'
                },

            ]
        };
    }
};
</script>

<style lang="scss" scoped>
main {
    margin-top: 100px;
    #card-colazione{
        width: 100%;
        height: 300px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    
}
</style>
