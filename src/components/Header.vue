<template>
    <nav class="navbar navbar-expand-lg" style="background-color:#ab2a3e;">
        <div class="container">
            <a class="navbar-brand" href="/">
                Qatar 2022
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="clasificaciones">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="calendario">Resultados y pronosticos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="maximos-goleadores">Estadísticas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="fasefinal">Fase final</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="acercade">Acerca De</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a v-if="login == 'true'" class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Perfil</a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li>
                                <router-link class="dropdown-item" to="pantallaperfil">Ver perfil</router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="editarperfil">Editar perfil</router-link>
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                            <li>
                                <a v-on:click="logout" class="dropdown-item">Cerrar Sesion</a>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
        name: 'Header',
        data() {
            return {
                login: localStorage.getItem('status')
            }
        },
        props: {
            title: String
        },
        methods: {
            logout() {
                localStorage.clear()
                this.$router.go(0)
            },
            refresh() {
                this.$router.go(0)
            }
        },
    }
</script>

<style scoped>
    @import '../assets/css/estilos.css';
</style>