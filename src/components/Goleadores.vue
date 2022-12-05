<template>
    <div class="container-fluid">
        <section class="u-align-center u-clearfix u-image u-image-tiles u-shading u-section-1" id="carousel_0faa"
        data-image-width="454" data-image-height="476">
        <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-custom-font u-font-source-sans-pro u-text u-text-1">Maximos Goleadores:</h2>
        <p class="u-text u-text-2">Lista de los maximos goleadores del mundial Qatar 2022
        </p>
        <img class="u-image u-image-default u-image-1" src="images/360199190.jpg" alt="" data-image-width="720"
            data-image-height="998">
        <div class="u-table u-table-responsive u-table-1">
            <table class="u-table-entity">
            <colgroup>
                <col width="24.54%">
                <col width="23.5%">
                <col width="22.06%">
                <col width="3.79%">
                <col width="26.11%">
            </colgroup>
            <thead class="u-palette-5-dark-3 u-table-header u-table-header-1">
                <tr style="height: 74px;">
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-1">
                    Nombre</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-2">
                    Apellido</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-3">
                    País</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-4">
                    Goles</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-5">
                    Foto</th>
                </tr>
            </thead>
            <tbody class="u-black u-table-body u-table-body-1">
                <tr v-for="goleador in goleadores" :key="goleador.id" style="height: 140px;">
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-6">
                        <br>{{goleador.nombre}}
                    </th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-6">
                        <br>{{goleador.apellido}}
                    </th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-7">{{goleador.pais}}</th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-8">{{goleador.cantidad}}</th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-10"></th>
                </tr>
            </tbody>
            </table>
        </div>
        
        <img class="u-image u-image-round u-radius-30 u-image-2"
            src="images/klose-alemania-partido-de-futbol-internacional-amistoso-alemania-paises-bajos-3-0-imtech-arena-de-hamburgo-g7hb18.jpg"
            alt="" data-image-width="918" data-image-height="1390">
        <img class="u-image u-image-round u-radius-29 u-image-3" src="images/Ronaldo-Luis-Nazario-de-Lima.jpg" alt=""
            data-image-width="1066" data-image-height="1600">
        <img class="u-image u-image-round u-radius-29 u-image-4" src="images/E81NfY-XIAUXDg9.jpg" alt=""
            data-image-width="1080" data-image-height="1498">
        <img class="u-image u-image-round u-radius-30 u-image-5" src="images/a2fd9eb98dced8e6b5d4c957aac4db7e.jpg" alt=""
            data-image-width="918" data-image-height="1230">
        <p class="u-large-text u-text u-text-variant u-text-3">Cristiano&nbsp;<b>Ronaldo</b>
            <br>Nacimiento: Funchal, Madeira, Portugal 5 de febrero de 1985 (37 años)<br>País: Portugal<br>Nacionalidad(es):
            Portuguesa<br>Altura:1,87 m (6′ 2″)
        </p>
        <p class="u-small-text u-text u-text-palette-5-base u-text-variant u-text-4">
            <a class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-5-base u-btn-1"
            href="https://nicepage.com">Mostrar Mas </a>
        </p>
        </div>
    </section>
    </div>
    <div class="container-fluid">
        <section class="u-align-center u-clearfix u-image u-image-tiles u-shading u-section-1" id="carousel_0faa"
        data-image-width="454" data-image-height="476">
        <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-custom-font u-font-source-sans-pro u-text u-text-1">Maximos Asistidores:</h2>
        <p class="u-text u-text-2">Lista de los maximos asistidores mundial Qatar 2022</p>
        <img class="u-image u-image-default u-image-1" src="images/360199190.jpg" alt="" data-image-width="720"
            data-image-height="998">
        <div class="u-table u-table-responsive u-table-1">
            <table class="u-table-entity">
            <colgroup>
                <col width="24.54%">
                <col width="23.5%">
                <col width="22.06%">
                <col width="3.79%">
                <col width="26.11%">
            </colgroup>
            <thead class="u-palette-5-dark-3 u-table-header u-table-header-1">
                <tr style="height: 74px;">
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-1">
                    Nombre</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-2">
                    Apellido</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-3">
                    País</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-4">
                    Asistencias</th>
                <th
                    class="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-5-dark-1 u-table-cell u-table-cell-5">
                    Foto</th>
                </tr>
            </thead>
            <tbody class="u-black u-table-body u-table-body-1">
                <tr v-for="asistidor in asistidores" :key="asistidor.id" style="height: 140px;">
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-6">
                        <br>{{asistidor.nombre}}
                    </th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-6">
                        <br>{{asistidor.apellido}}
                    </th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-7">{{asistidor.pais}}</th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-8">{{asistidor.cantidad}}</th>
                    <th class="u-border-1 u-border-palette-5-dark-1 u-table-cell u-table-cell-10"></th>
                </tr>
            </tbody>
            </table>
        </div>
        
        <img class="u-image u-image-round u-radius-30 u-image-2"
            src="images/klose-alemania-partido-de-futbol-internacional-amistoso-alemania-paises-bajos-3-0-imtech-arena-de-hamburgo-g7hb18.jpg"
            alt="" data-image-width="918" data-image-height="1390">
        <img class="u-image u-image-round u-radius-29 u-image-3" src="images/Ronaldo-Luis-Nazario-de-Lima.jpg" alt=""
            data-image-width="1066" data-image-height="1600">
        <img class="u-image u-image-round u-radius-29 u-image-4" src="images/E81NfY-XIAUXDg9.jpg" alt=""
            data-image-width="1080" data-image-height="1498">
        <img class="u-image u-image-round u-radius-30 u-image-5" src="images/a2fd9eb98dced8e6b5d4c957aac4db7e.jpg" alt=""
            data-image-width="918" data-image-height="1230">
        <p class="u-large-text u-text u-text-variant u-text-3">Cristiano&nbsp;<b>Ronaldo</b>
            <br>Nacimiento: Funchal, Madeira, Portugal 5 de febrero de 1985 (37 años)<br>País: Portugal<br>Nacionalidad(es):
            Portuguesa<br>Altura:1,87 m (6′ 2″)
        </p>
        <p class="u-small-text u-text u-text-palette-5-base u-text-variant u-text-4">
            <a class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-5-base u-btn-1"
            href="https://nicepage.com">Mostrar Mas </a>
        </p>
        </div>
    </section>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Goleadores',
        name1: 'Asistidores',
        data() {
            return {
                goleadores: Array,
                asistidores: Array
            }
        },
        created() {
            this.getGoleadores()
            this.getAsistidores()
        }, 
        methods: {
            async getGoleadores() {
                let url = 'http://fixture_qatar_backend.test/api/maximos-goleadores'
                await axios.get(url).then(response =>{
                    this.goleadores = response.data.goleadores
                    console.log(this.goleadores)
                }).catch(error => {
                    console.log(error)
                })
            },

            async getAsistidores() {
                let url = 'http://fixture_qatar_backend.test/api/maximos-asistidores'
                await axios.get(url).then(response =>{
                    this.asistidores = response.data.asistidores
                    console.log(this.asistidores)
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        mounted() {

        }

    }

    
</script>
