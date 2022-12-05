<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-2">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoTlod0Ezhx9TL8p365Q7iGmG_EqwaWcJ_Ot-S6vhxLgqax_Z72ryWMUEQ5SWahwIgkWywgiD21LwRqkoU9eg-5v8mjPYwi8u6rsIJnYnq4u2Grxr7B9rBwMVJE82vZVvZi8Z-Y4SfPGM2n9oBB1FZDxXa2ST5ywafBpMlI1EWiSEYdVsjMusCML9X/s1600/Qatar2022256x.png" class="img-thumbnail" >
            </div>
            <div class="col-7" >
                <form @submit.prevent="guardarPerfil"> <!-- Aquí va el método que pongas en methods (POST) -->
                    <div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="nombre">Nombre:</span>
                            <input type="text" class="form-control" id="nombreText" v-bind:value="users.nombre" sele>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="apellido">Apellido:</span>
                            <input type="text" class="form-control" id="apellidoText" v-bind:value="users.apellido">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="nickname">Correo:</span>
                            <input disabled type="text" class="form-control" id="nicknameText" v-bind:value="users.email">
                        </div>
                        <div class="input-group mb-3" >
                            <span class="input-group-text" id="selecciones">Selecciones favoritas:</span>
                            <select class="form-select-lg" id="seleccionesSelect" v-model="selectFavorito" @change="agregarFavorito"> 
                                    <option value="">Seleccione</option>                      
                                    <option class="opciones" id="opciones" v-for="pais in paises" :key="pais.id" v-bind:value="pais.id">{{pais.nombre}}</option>
                            </select>
                            <textarea class="form-floating" id="seleccionesText" v-model="seleccionesText" ></textarea>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="pronostico">Pronostico del campeón:</span>
                            <select class="form-select-lg" id="pronosticoSelect" v-model="selectPronostico" @change="agregarPronostico">
                                <option value="">Seleccione</option>
                                <option  v-for="pais in paises" :key="pais.id" v-bind:value="pais.id">{{pais.nombre}}</option>
                            </select>
                            <textarea class="form-floating" id="pronosticoText" v-model="pronosticoText"></textarea>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="infoadicional">Información adicional:</span>
                            <textarea class="form-floating p-5" id="infoadicionalText" v-model="informacion"></textarea>
                        </div>
                        <div class="input-group mb-3">
                            <button type="submit" class="btn btn-dark">Guardar</button>
                            <router-link class="btn btn-danger" to="/">Cancelar</router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import PantallaPerfil from './PantallaPerfil.vue';

    export default{
        name: 'EditarPerfil',
        data(){
            return{
                paises:Array,
                users:Array,
                selectFavorito:'',
                seleccionesText:'',
                selectPronostico:'',
                pronosticoText:'',
                id: localStorage.getItem('user'),
                perfil_id: localStorage.getItem('perfil'),
                informacion: '',
            }
        },
        created(){
            this.getPaises()
            this.getUsers()
        },
        methods:{
            async getPaises(){
                let url = 'http://fixture_qatar_backend.test/api/paises'
                await axios.get(url).then(response =>{
                    this.paises = response.data.paises
                    console.log(this.paises)
                    //console.log(this.users.nombre)
                }).catch(error => {
                    console.log(error)
                })
            },
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
                    console.log(this.users.nombre)
                }).catch(error => {
                    console.log(error)
                })
            },
            agregarFavorito(){
                this.seleccionesText +=`${this.selectFavorito},`;
                console.log(this.seleccionesText)
            },
            agregarPronostico(){
                this.pronosticoText = `${this.selectPronostico}`;
            },
            async guardarPerfil() {
                let url = 'http://fixture_qatar_backend.test/api/perfiles/' + this.perfil_id
                
                let paises = document.getElementById('seleccionesText').value
                let array = paises.split(',')
                array.pop()

                console.log(array)

                await axios.put(url, {
                    campeon_pais_id: this.selectPronostico,
                    favoritos: array,
                    informacion: this.informacion,
                    usuario_id: this.id
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        Accept: 'application/json'
                    }
                })
                .then(response => {
                    console.log(response)
                    /*localStorage.setItem('status', true)
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('user', response.data.user.id)*/
                })
                .catch(error => {
                    console.log(error)
                })
                this.$router.push('/pantallaperfil')
            }
        },
    }
</script>