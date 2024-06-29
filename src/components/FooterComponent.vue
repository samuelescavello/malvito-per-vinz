<template>
    <Footer>
        <div class="text-center pt-4">
            <h3><em>Bed & Breakfast Antica Casina</em></h3>
            <h4>di Felicetta Campolongo</h4>
        </div>
        <div class="container p-4 d-flex justify-content-around">
    <div>
        <h4 class="pb-2"><em>Contatti</em></h4>
        <ul>
            <li>
                <a href="mailto:info@anticacasina.it"><i class="fa-regular fa-envelope pb-2"></i> info@anticacasina.it</a>
            </li>
            <li><i class="fa-solid fa-phone pb-2"></i> cell. 347-6463840 / 347-0178257</li>
            <li><i class="fa-solid fa-phone"></i> telefono e fax. 0984-509537</li>
        </ul>
    </div>
    <div>
        <h4 class="pb-2"><em>Luogo</em></h4>
        <ul>
            <li>
                <a href="https://www.google.com/maps/place/C/da+Trellenze,+snc,+87010+Malvito,+CS" target="_blank">
                    <i class="fa-solid fa-location-dot"></i> C/da Trellenze, snc - 87010 Malvito (Cs)
                </a>
            </li>
        </ul>
    </div>
</div>

    </Footer>
</template>

<script>
export default {

    name: 'FooterComponent',
}
</script>

<style lang="scss" scoped>
Footer {
    background-color: #4C4B46;
    color: white;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a{
        text-decoration: none;
        color: white;
    }
}
</style>