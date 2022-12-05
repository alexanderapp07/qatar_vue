<template>
    <body class="crear">
        <h2>Bienvenido</h2>
        <form @submit.prevent="signup">
            <div class="cont">
                <h2>Crear perfil</h2>
                <p>
                    <label for="iname">Nombre</label>
                    <input id="iname " type="text" name=" nombre " v-model="nombre"/>
                </p>

                <p>
                    <label for="iapellido">Apellido</label>
                    <input id="iapellido " type="text" name=" nombre " v-model="apellido"/>
                </p>
                <p>
                    <label for="inick">Correo</label>
                    <input id="inick" type="text" name=" nombre " v-model="email"/>
                </p>
                <p>
                    <label for="ipass">Contraseña</label>
                    <input id="ipass " type="text" name=" nombre " v-model="password"/>
                </p>
                <div class="dbotones">
                    <input type="submit" value=" Aceptar " />
                    <router-link to="/">
                        <input type="submit" value=" Rechazar " />
                    </router-link>
                </div>
            </div>
            <br />
            <div class="subirImagen">
                <h2>Arrastra y suelta una imagen</h2>
                <span>0</span>
                <button>selecciona tus archivos</button>
                <input type="file" id="input-file" hidden multiple />
            </div>
            <div id="preview"></div>
        </form>
    </body>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CrearUsuario',
    data() {
        return {
            nombre: "",
            apellido: "",
            email: "",
            password: "",
            token: ""
        }
    },
    created() {

    },
    methods: {
        async signup() {
            let url = 'http://fixture_qatar_backend.test/api/auth/register'
            await axios.post(url, {
                nombre: this.nombre,
                apellido: this.apellido,
                email: this.email,
                password: this.password
            })
            .then(response => {
                console.log(response)
                localStorage.setItem('status', true)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', response.data.user.id)
                localStorage.setItem('perfil', response.data.perfil_id)
            })
            .catch(error => {
                console.log(error)
            })
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    @import '../assets/css/estilos.css';
</style>