<template>
    <section class="form-login">
        <h5>Iniciar sesion</h5>
        <form @submit.prevent="login">
            <input class="controls" type="text" name="User" placeholder="Correo" v-model="email">
            <input class="controls" type="password" name="Password" placeholder="password" v-model="password">
            <input class="buttons" type="submit" name="" value="Acceder">
        </form>
        <p><a href="#">olvide la contra</a> </p>
        <p><a href="#">Crear una cuenta </a> </p>
    </section>
</template>

<script>
import axios from 'axios'
import Clasificaciones from '../components/Clasificaciones.vue'

export default {
    name: 'Login',
    data() {
        return {
            email: "",
            password: "",
            token: "",
        }
    },
    components: {
        Clasificaciones
    },
    created() {
    },
    methods: {
        async login() {
            let url = 'http://fixture_qatar_backend.test/api/auth/login'
            await axios.post(url, {
                email: this.email,
                password: this.password,
            })
            .then(response => {
                console.log(response);
                localStorage.setItem('status', true)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', response.data.user.id),
                localStorage.setItem('perfil', response.data.perfil_id)
            })
            .catch(error => {
                    console.log(error)
                })
            this.$router.push('/')
        }
    },
}
</script>
<style scoped>
    @import '../assets/css/estilosSesion.css';
</style>