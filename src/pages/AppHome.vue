<template>
    <main>
        <div class="jumbo">
            <img src="../assets/img/piscina4.jpeg" alt="" />
        </div>

        <div class="container">
            <div class="row mb-3">
                <div class="col-12 text-center mt-5 mb-3">
                    <h1>B&B - Antica Casina</h1>
                </div>

                <div class="row my-5 " >
                    <div class="col-6 d-flex align-items-center">
                        <div>
                            <h2>il nostro B&B</h2>
                            <p>
                                "Antica casina" si trova a pochi Km dal centro di Malvito , E' il posto ideale per ritrovare
                                il vero contatto con la natura, lontano dalla confusione.Luogo ideale al relax e alle tante
                                proposte per il tempo libero che la bella Calabria può offrire.
                                Situato in una straordinaria posizione panoramica permette di godere di tramonti
                                indimenticabili.
                                Gli ospiti potranno soggiornare in un edificio camere situate al secondo piano,
                                ristrutturato di recente con tutti i comfort.
                                Il Bed and Breakfast "Antica casina" è dotato di ampio parcheggio privato.
                            </p>
                        </div>
                        
                    </div>

                    <div class="col-6 ">
                        <div class="col-6">
                        <div id="container">
                            <div class="row my-5">
                                <div class="col-6">
                                    <div class="container">
                                        <img class="image top" src="../assets/img/casa2.jpeg"
                                            alt="Top Image">
                                        <img class="image bottom"
                                            src="../assets/img/casa1.jpeg"
                                            alt="b&b image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>	

                </div>


                <div class="row my-5 ">
                    <div class="col-6">
                        <div id="container">
                            <div class="row my-5">
                                <div class="col-6">
                                    <div class="container">
                                        <img class="image top2" src="../assets/img/pratoepiscina.jpeg"
                                            alt="Top Image">
                                        <img class="image bottom2"
                                            src="../assets/img/piscina3.jpeg"
                                            alt="Bottom Image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 d-flex align-items-center">
                        <div>
                            <h2> comfort</h2>
                            <p>
                                Gli ospiti potranno soggiornare in un edificio camere situate al secondo piano, ristrutturato di recente con tutti i comfort , incluso di piscina. Il Bed and Breakfast "Antica casina" è dotato di ampio parcheggio privato.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-5 text-center">
                <h2 class="mb-5">grandi spazi aperti</h2>
                <p>La struttura vanta grandi spazi aperti che offrono un'oasi di tranquillità e relax. Il giardino, curato nei minimi dettagli, è arricchito da una varietà di piante e fiori che creano un'atmosfera incantevole e profumata.</p>
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" v-for="(card, index) in cards" :key="index">
                    <div class="card">
                        <img :src="card.image" class="card-img-top" :alt="card.title">
                    </div>
                </div>
                <h2 class="mt-3"><em>CONTATTI</em></h2>
                <div class="container my-5">
            <div class="row">
                <div class="col-md-6 order-md-2 my-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title"><em>Contatti</em></h4>
                            <ul class="list-unstyled">
                                <li><i class="fa-regular fa-envelope"></i> <a
                                        href="mailto:info@anticacasina.it">info@anticacasina.it</a></li>
                                <li> <i class="fa-brands fa-whatsapp"></i><a href="https://wa.me/message/3JGXRL3FKUIYH1"> cell. 347-6463840</a></li>
                                
                                <li><i class="fa-solid fa-phone"></i> telefono e fax. 0984-509537</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 order-md-1 my-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title"><em>Luogo</em></h4>
                            <ul class="list-unstyled">
                                <li><i class="fa-solid fa-location-dot"></i> C/da Trellenze, snc - 87010 Malvito (Cs)
                                </li>
                            </ul>
                            <div class="mt-3">
                                <!-- Mappa di Google Maps -->
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12098.33378993981!2d14.553874899999999!3d40.70517085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1719669072723!5m2!1sit!2sit"
                                    width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>


            
        </div>
    </main>
</template>

<script>
export default {
    name: "AppHome",
    data() {
        return {
            cards: [
                {
                    title: 'Card title 1',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/piscina3.jpeg'
                },
                {
                    title: 'Card title 2',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/piscinaultima.jpeg'
                },
                {
                    title: 'Card title 3',
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: '../src/assets/img/prato2.jpeg'
                },
                
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
main {
    margin-top: 80px;
    .jumbo {
        height: 600px;
        width: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    #container {
        position: relative;
        width: 100%;
        /* Imposta la larghezza desiderata per il container */
        height: 300px;
        /* Imposta l'altezza desiderata per il container */
        display: flex;
        justify-content: center;
        align-items: center;
        /* Imposta l'altezza e la larghezza desiderata per il container */
    }

    .image {
        position: absolute;
        width: 400px;
        height: 250px;
        object-fit: cover;
        border-radius: 10px;
        /* Per mantenere le proporzioni dell'immagine */
    }

    .image.top {
        top: 0;
        left: 120px;
        /* Sposta leggermente a sinistra */
        z-index: 0;
        /* Posto sopra l'altra immagine */
    }

    .image.bottom {
        top: 90px;
        /* Sposta leggermente più in basso */
        left: 0;
        z-index: 1;
        /* Posto sotto l'altra immagine */
    }
    .image.top2 {
        top: 90px;
        left: 120px;
        /* Sposta leggermente a sinistra */
        z-index: 1;
        /* Posto sopra l'altra immagine */
    }

    .image.bottom2{
        top: 0;
        /* Sposta leggermente più in basso */
        left: 0;
        z-index: 0;
        /* Posto sotto l'altra immagine */
    }
}
</style>
