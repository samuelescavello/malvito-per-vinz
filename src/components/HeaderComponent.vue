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
                    <a class="nav-link" href="#">Servizi<span class="sr-only">(current)</span></a>
                    <div id="border"></div>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="#">contatti<span class="sr-only">(current)</span></a>
                    <div id="border"></div>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Link 1
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action 1</a>
                        <a class="dropdown-item" href="#">Action 2</a>
                        <a class="dropdown-item" href="#">Action 3</a>
                    </div>
                </li>
                
            </ul>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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

            img{
            width: 50px;
            height: 50px;
        }
        }
        .nav-item:hover .dropdown-menu {
            display: block;
        }
        header{
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
        .nav-link{
           text-decoration: none;
        }
        .router-link-active {
            color: rgb(90, 203, 255) !important;
            text-decoration: none; 
        }
</style>