<template>
    <Footer>
        <div class="text-center pt-4">
            <h3><em>Bed & Breakfast Antica Casina</em></h3>
            <h4>di Felicetta Campolongo</h4>
        </div>
        <div class="container p-4 d-flex justify-content-around">
            <div>
                <h4 class="pb-2"><em>contatti</em></h4>
                <ul>
                    <li><i class="fa-regular fa-envelope pb-2"></i> info@anticacasina.it</li>
                    <li><i class="fa-solid fa-phone pb-2"></i> cell. 347-6463840 / 347-0178257</li>
                    <li><i class="fa-solid fa-phone"></i> telefono e fax. 0984-509537</li>
                    <li></li>
                </ul>
            </div>
            <div>
                <h4 class="pb-2"><em>luogo</em></h4>
                <ul>
                    <li><i class="fa-solid fa-location-dot"></i> C/da Trellenze, snc - 87010 Malvito (Cs)</li>
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
}
</style>