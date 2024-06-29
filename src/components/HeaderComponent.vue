<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-between container mt-2">
            <img src="../assets/img/2.png" alt="">
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <span class="nav-link"><router-link to="/">Home</router-link></span>
                        <div id="border"></div>
                    </li>
                    <li class="nav-item ">
                        <span class="nav-link"><router-link to="/servizi">Servizi</router-link></span>
                        <div id="border"></div>
                    </li>
                    <li class="nav-item ">
                        <span class="nav-link"><router-link to="/stanze">Stanze </router-link></span>
                        <div id="border"></div>
                    </li>
                    <li class="nav-item ">
                        <span class="nav-link"><router-link to="/contatti">Contatti</router-link></span>
                        <div id="border"></div>
                    </li>

                </ul>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    </header>
</template>

<script>
import { store } from '../store';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: white;

    img {
        width: 50px;
        height: 50px;
    }
}

.nav-item:hover .dropdown-menu {
    display: block;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1030;
    padding: 0;
    height: 80px;
    background-color: white;
}

#border {
    width: 100%;
    height: 3px;
    background-color: #60ecff49;
    display: none;
    margin-top: -3px;
}

.nav-item:hover #border {
    display: block;
}

.nav-link {
    text-decoration: none;
}

a{
    text-decoration: none !important;
    color: black !important;
}

.router-link-active {
    color: rgb(90, 203, 255) !important;
}

</style>