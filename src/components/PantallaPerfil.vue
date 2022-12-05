<template>
    <div class="container mt-5">
        <div class="mb-6"></div>
        <div class="row justify-content-center">
            <div class="col-2">
                <div class="mb-3">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoTlod0Ezhx9TL8p365Q7iGmG_EqwaWcJ_Ot-S6vhxLgqax_Z72ryWMUEQ5SWahwIgkWywgiD21LwRqkoU9eg-5v8mjPYwi8u6rsIJnYnq4u2Grxr7B9rBwMVJE82vZVvZi8Z-Y4SfPGM2n9oBB1FZDxXa2ST5ywafBpMlI1EWiSEYdVsjMusCML9X/s1600/Qatar2022256x.png"
                    id="imagenPerfil" class="img-thumbnail">
                </div>  
                <div class="mb-3">
                        <router-link class="btn btn-dark" to="editarperfil">Editar Perfil</router-link>
                </div>
            </div>
            <div class="col-7" >
                <div class="input-group mb-3">
                    <span class="input-group-text" id="nombre">Nombre:</span>
                    <input value="" type="text" class="form-control" id="nombreText" v-bind:placeholder="users.nombre" disabled>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="nombre">Apellido:</span>
                    <input type="text" class="form-control" id="nombreText" v-bind:placeholder="users.apellido" disabled>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="nombre">Email:</span>
                    <input type="email" class="form-control" id="nombreText" v-bind:placeholder="users.email" disabled>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="nombre">Información:</span>
                    <input type="text" class="form-control" id="nombreText" v-bind:placeholder="perfil.informacion" disabled>
                </div>
                <div class="input-group mb-3" >
                    <span class="input-group-text" id="nombre">Seleciones favoritas:</span>
                    <a><input v-for="elemento in favoritos" :key="elemento.id" class="form-control" id="seleccionesText" v-bind:value="paises[elemento-1].nombre" disabled></a>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="nombre">Pronóstico de campeón:</span>
                    <textarea class="form-floating" id="pronosticoText" v-bind:value="paises[perfil.campeon_pais_id-1].nombre" disabled></textarea>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default{
        name: 'PantallaPerfil',
        data(){
            return{
                users: Array,
                id: localStorage.getItem('user'),
                perfil_id: localStorage.getItem('perfil'),
                perfil: Array,
                paises: Array,
                favoritos: Array,
                favoritosText: '',
            }

        },
        created(){
            this.getUsers()
            this.getPerfil()
            this.getPaises()
        },
        methods:{
            async getUsers(){
                let url = 'http://fixture_qatar_backend.test/api/users/' + this.id
                await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        Accept: 'application/json'
                    }
                }).then(response =>{
                    this.users = response.data.users
                    console.log(this.users)
                }).catch(error => {
                    console.log(error)
                })
            },
            async getPerfil() {
                let url = 'http://fixture_qatar_backend.test/api/perfiles/' + this.perfil_id
                await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        Accept: 'application/json'
                    }
                }).then(response =>{
                    this.perfil = response.data.perfiles
                    console.log(this.perfil)
                    this.favoritos = this.perfil.favoritos
                    console.log(this.favoritos)
                }).catch(error => {
                    console.log(error)
                })
            },
            async getPaises(){
                let url = 'http://fixture_qatar_backend.test/api/paises'
                await axios.get(url).then(response =>{
                    this.paises = response.data.paises
                    console.log(this.paises)
                }).catch(error => {
                    console.log(error)
                })
            },

        },
    }
</script>