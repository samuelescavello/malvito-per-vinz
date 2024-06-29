<template>
    <main>
        <div class="jumbo">
            <img src="../assets/img/piscina4.jpeg" alt="Antica Casina" />
        </div>

        <div class="container my-5">
            <div class="row">
                <div class="col-md-6 order-md-2 my-3">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title"><em>Contatti</em></h4>
                            <ul class="list-unstyled">
                                <li><i class="fa-regular fa-envelope"></i> <a
                                        href="mailto:info@anticacasina.it">info@anticacasina.it</a></li>
                                <li><i class="fa-solid fa-phone"></i> cell. 347-6463840 / 347-0178257</li>
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
    </main>
</template>

<script>
export default {
    name: 'ContactPage',
    // Eventuale logica aggiuntiva
}
</script>

<style scoped>
/* Stili specifici per il componente ContactPage */
.jumbo {
    height: 600px;
    width: 100%;
    margin-top: 80px;
    overflow: hidden;
}

.jumbo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-title {
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.card-body {
    padding: 1.25rem;
}

ul.list-unstyled {
    margin-bottom: 0;
}

@media (max-width: 768px) {
    .jumbo {
        height: 400px;
    }
}
</style>