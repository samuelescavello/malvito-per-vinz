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

        </div>
    </main>
</template>

<script>
export default {
    name: "AppStanze",
    data() {
        return {
          
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
