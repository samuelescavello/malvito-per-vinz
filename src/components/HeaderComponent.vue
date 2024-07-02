<template>
    <header>

        <nav class="container d-flex justify-content-between py-4  bg-white">
            <div class="img-container">
                <img src="../assets/img/2.png" alt="">
            </div>

            <ul class="navbar-nav mr-auto d-flex none-1 ">
                <li class="nav-item ">
                    <span class="nav-link"><router-link to="/">Home</router-link></span>
                    <div id="border"></div>
                </li>
                
                <li class="nav-item ">
                    <span class="nav-link"><router-link to="/stanze">servizi </router-link></span>
                    <div id="border"></div>
                </li>
                <li class="nav-item ">
                    <span class="nav-link"><router-link to="/contatti">Contatti</router-link></span>
                    <div id="border"></div>
                </li>
            </ul>

            <div class="navbar" id="hamburgher-menu" @click="openMenu()">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
                     aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                    </button>
                </div>

                <div class="dropdown mt-2">
                    <ul class="dropdown-menu " id="dropdown">
                        <li class="nav-item ">
                        <span class="nav-link"><router-link to="/">Home</router-link></span>
                    </li>
                    
                    <li class="nav-item ">
                        <span class="nav-link"><router-link to="/stanze">servizi </router-link></span>
                    </li>
                    <li class="nav-item ">
                        <span class="nav-link"><router-link to="/contatti">Contatti</router-link></span>
                    </li>
                    </ul>
                </div>

            </div>

        </nav>






















        <!-- <nav class="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-between container mt-2"  >
            

            <div class="navbar" id="hamburgher-menu" @click="openMenu()">
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <span class="nav-link"><router-link to="/">Home</router-link></span>
                        <div id="border"></div>
                    </li>
                    
                    <li class="nav-item ">
                        <span class="nav-link"><router-link to="/stanze">servizi </router-link></span>
                        <div id="border"></div>
                    </li>
                    <li class="nav-item ">
                        <span class="nav-link"><router-link to="/contatti">Contatti</router-link></span>
                        <div id="border"></div>
                    </li>

                </ul>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon "></span>
                    </button>
            </div>
           



            </div>
            
        </nav> -->
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
    },
    methods: {
            openMenu(){
                document.getElementById("dropdown").classList.toggle("show");
            }
        }
}
</script>

<style lang="scss" scoped>
  #hamburgher-menu{
        display: none;
    }
    @media screen and (max-width: 991px) {
        .none-1{
            display: none !important;
        }
        #hamburgher-menu{
            display: block !important;
        }
    }

    .img-container{
        width: 50px;
        img{
            width: 100%;
        }
    }
 
.navbar {
    background-color: white;

    img {
        width: 50px;
        height: 50px;
    }
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