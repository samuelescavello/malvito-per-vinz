<template>
    <header>

        <nav class="container d-flex justify-content-between pt-2 bg-white">
            <div class="img-container">
                <img src="../assets/img/2.png" alt="">
            </div>

            <div class=" none-1 d-flex align-items-center">
                <div class="nav-item mx-2">
                    <span class="nav-link"><router-link to="/">Home</router-link></span>
                    <div id="border"></div>
                </div>
                
                <div class="nav-item mx-2">
                    <span class="nav-link"><router-link to="/stanze">Servizi </router-link></span>
                    <div id="border"></div>
                </div>
                <div class="nav-item mx-2">
                    <span class="nav-link"><router-link to="/contatti">Contatti</router-link></span>
                    <div id="border"></div>
                </div>
            </div>

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
        width: 90px;
        img{
            width: 100%;
        }
    }
 
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1030;
    padding: 0;
    height: 112px;
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