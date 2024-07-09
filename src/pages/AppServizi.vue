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
                            <img :src="card.image" :alt="card.title">
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="text-center "><em>colazione</em></h2>`
            <p>La prima colazione è il momento più importante di tutta la giornata, perché ci deve ricaricare dopo il
                digiuno notturno.
                Al mattino possiamo anche toglierci la voglia di qualcosa di dolce...
                La colazione servita nella nostra accogliente cucina comprende: caffè (tè, latte, cappuccino,
                cioccolata), brioches, fette biscottate, pane, burro e marmellata, cereali, succhi di frutta, torte
                fatte in casa assicurando un pieno di energia per tutta la giornata.
                Nel caso necessitate di cibi particolari o siate allergici possiamo venire incontro alle vostre
                esigenze, se avvisati con dovuto anticipo.</p>
            <div class="row my-5 text-center">
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" v-for="(last, index) in colazione" :key="index">
                    <div class="card" id="card-colazione">
                        <img :src="last.image" :alt="last.title">
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-center"><em>cosa visitare</em></h2>
                <div>
                    Malvito sorge sulla cima di un poggio alla destra dell' Esaro ed offre una veduta paesaggistica
                    singolare. Si ritiene sia uno dei poci centri calabresi di origine Longobarda, 
                    I caratteri di fortezza medievali sono ancora oggi visibili: le case sovrapposte in un
                    caratteristico groviglio di viuzze strette che, di tanto in tanto si aprono su improvvisi larghi
                    dove si trovano antichi palazzi con artistici portali in tufo.
                    E' da visitare, all'estremità della collina, posto a dominio della vallata, il castello
                    Longobardo-Normanno, le cui origini sono da collocare nel IX - X secolo.
                    E' composto dal Mastio normanno (torre principale) di forma cilindrica cui si può accedere tramite
                    una scaletta elicoidale. Si può anche entrare dal cortile centrale attraverso una scala chiamata di
                    scala francese, che comunica alla cortina.
                    Nel cortile vi è anche l'ingresso ad una sala interrata a forma di cripta.
                    Una campagna varia e ricca di angoli piacevoli, circonda Malvito in un' atmosfera di colori specie
                    in direzione della valle dei mulini. Altra area da vedere è quella degli scavi di Pauciuri, dove è
                    stato riportato alla luce un settore di un edificio monumentale databile al 110 a.C..
                    Si tratta di una villa romana che presenta due diverse fasi di costruzione: nella prima si possono
                    individuare magazzini per derrate; nella seconda la costruzione di impianti termali di cui si
                    distingue un praefurnium.
                    Successivi scavi assegnano al complesso una funzione pubblica facendo anche ipotizzare la presenza
                    di una stazione che la metteva in comunicazione con l' alto tirreno cosentino.
                    In mezzo alle rovine venne sistemata una necropoli bizantina, il primo scoperto in Calabria. Dalla
                    necropoli sono state scavate diciotto tombe dove sono stati rinvenuti numerosi reperti, tra i quali,
                    un anello a croce greco-bizantina.
                    Da segnalare inoltre che Malvito è gemellata, fin dagli inizi degli anni '70 con Rognes, cittadina
                    francese della Provenza, a pochi chilometri da Marsiglia, con la quale ha stretto rapporti di
                    amicizia e che ha avuto come protagonisti i due sindaci pionieri del federalismo europeo, Oscar
                    Principe e Robert Verrier, che conferì a Malvito lo storico primato di essere stato uno tra i primi
                    comuni italiani ad aderire al progetto di unificazione europea.
                </div>
                <div class="row my-5 text-center">
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" v-for="(last, index) in malvito" :key="index">
                    <div class="card" id="card-colazione">
                        <img :src="last.image" :alt="last.title">
                    </div>
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
                    image: '/img/malvitocamera.jpg'
                },
                {
                    title: 'Card title 2',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '/img/malvito2.jpg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '/img/malvito3.jpg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '/img/malvito4.jpg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '/img/malvito5.jpg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '/img/malvito6.jpg'
                },

            ],

            colazione: [
                {
                    title: 'Card title 1',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '/img/stanza-colazione.jpg'
                },
                {
                    title: 'Card title 2',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '/img/col1.jpeg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '/img/col2.jpeg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '/img/col3.jpeg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '/img/col4.jpeg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '/img/col5.jpeg'
                },

            ],

            malvito: [
                {
                 
                    image: '/img/malv11.jpeg'
                },
                {
                    
                    image: '/img/malv12.jpeg'
                },
                {
                    
                    image: '/img/malv13.jpeg'
                },
                {
                    
                    image: '/img/malv14.jpeg'
                },
                {
                    
                    image: '/img/malv15.jpeg'
                },
                {
                    
                    image: '/img/malv16.jpeg'
                },

            ]
        };
    }
};
</script>

<style lang="scss" scoped>
main {
    margin-top: 100px;

    #card-colazione {
        width: 100%;
        height: 300px;

        img {
            width: 100%;
            height: 100%;
        }
    }

}
</style>
