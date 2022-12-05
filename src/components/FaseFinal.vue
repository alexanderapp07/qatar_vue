<template>
    <div class="container-fluid">
        <table class="tabla">
                    <thead>
                    <tr>
                        <th class="titulo" colspan="3">OCTAVOS</th>
                        <th class="titulo" colspan="3">CUARTOS</th>
                        <th class="titulo" colspan="3">SEMIFINAL</th>
                        <th class="titulo" colspan="6">FINAL</th>
                        <th class="titulo" colspan="3">SEMIFINAL</th>
                        <th class="titulo" colspan="3">CUARTOS</th>
                        <th class="titulo" colspan="3">OCTAVOS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <!-- PAISES BAJOS -->
                        <td v-for = "(fase_final) in fase_final.slice(0,1)" :key="fase_final.id">{{fase_final.nombre}}</td>
                        <td>3</td>
                        <td>0</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>#</td>
                        <!-- INGLATERRA -->
                        <td v-for = "(fase_final) in fase_final.slice(4,5)" :key="fase_final.id">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <!-- PAISES BAJOS -->
                        <td v-for = "(fase_final) in fase_final.slice(0,1)" :key="fase_final.id">{{fase_final.nombre}}</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="12"></td>
                        <td>#</td>
                        <td>#</td>
                        <td>B1</td>
                    </tr>
                    <tr>
                        <!-- ESTADOS UNIDOS -->
                        <td v-for="(fase_final) in fase_final.slice(5,6)" :key="fase_final.id">{{fase_final.nombre}}</td>
                        <td>1</td>
                        <td>0</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>#</td>
                        <!-- SENEGAL -->
                        <td v-for="(fase_final) in fase_final.slice(1,2)" :key="fase_final.id">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td colspan="6"></td>
                        <td>C1</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="6"></td>
                        <td>#</td>
                        <td>#</td>
                        <td>D1</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <!-- ARGENTINA -->
                        <td v-for="(fase_final) in fase_final.slice(8,9)" :key="fase_final.id">{{fase_final.nombre}}</td>
                        <td>2</td>
                        <td>0</td>
                        <td colspan="18"></td>
                        <td>0</td>
                        <td>3</td>
                        <!-- FRANCIA -->
                        <td v-for="(fase_final) in fase_final.slice(12,13)" :key="fase_final.id">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <!-- ARGENTINA -->
                        <td v-for="(fase_final) in fase_final.slice(8,9)" :key="fase_final.id">{{fase_final.nombre}}</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="12"></td>
                        <td>#</td>
                        <td>#</td>
                        <!-- FRANCIA -->
                        <td v-for="(fase_final) in fase_final.slice(12,13)" :key="fase_final.id">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <!-- AUSTRALIA -->
                        <td v-for="(fase_final) in fase_final.slice(13,14)" :key="fase_final.id">{{fase_final.nombre}}</td>
                        <td>1</td>
                        <td>0</td>
                        <td colspan="18"></td>
                        <td>0</td>
                        <td>1</td>
                        <!-- POLONIA -->
                        <td v-for="(fase_final) in fase_final.slice(9,10)" :key="fase_final.id">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td colspan="9"></td>
                        <td>C1</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>E2</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <!-- JAPÓN -->
                        <td v-for="(fase_final) in fase_final.slice(16,17)" :key="fase_final.id">{{fase_final.nombre}}</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>#</td>
                        <!-- MARRUECOS -->
                        <td v-for="(fase_final) in fase_final.slice(20,21)" :key="fase_final.id">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td>E1</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="12"></td>
                        <td>#</td>
                        <td>#</td>
                        <td>E2</td>
                    </tr>
                    <tr>
                        <!-- CROACIA -->
                        <td v-for="(fase_final) in fase_final.slice(21,22)" :key="fase_final.id">{{fase_final.nombre}}</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>#</td>
                        <!-- ESPAÑA -->
                        <td v-for="(fase_final) in fase_final.slice(17,18)" :key="fase_final.id">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td colspan="6"></td>
                        <td>G1</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="6"></td>
                        <td>#</td>
                        <td>#</td>
                        <td>E2</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <!-- BRASIL -->
                        <td v-for="(fase_final) in fase_final.slice(24,25)" :key="fase_final.id">{{fase_final.nombre}}</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>#</td>
                        <!-- PORTUGAL -->
                        <td v-for="(fase_final) in fase_final.slice(28,29)" :key="fase_final.id">{{fase_final.nombre}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td>G1</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="12"></td>
                        <td>#</td>
                        <td>#</td>
                        <td>H1</td>
                    </tr>
                    <tr>
                        <!-- COREA DEL SUR -->
                        <td v-for="(fase_final) in fase_final.slice(29,30)" :key="fase_final.id">{{fase_final.nombre}}</td>
                        <td>#</td>
                        <td>#</td>
                        <td colspan="18"></td>
                        <td>#</td>
                        <td>#</td>
                        <!-- SUIZA -->
                        <td v-for="(fase_final) in fase_final.slice(25,26)" :key="fase_final.id">{{fase_final.nombre}}</td>
                    </tr>
                </tbody>
            </table>
        </div>    
    <div class="iconoImagen">
        <img src="https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tabla_de_posiciones-qatar_2022.jpg" style="width: 900px">
    </div>
</template>
<script>
    import axios from 'axios'

    export default{
        name:'fase_final',
        data(){
            return {
                fase_final: Array,
            }
            },
        created(){
                this.getFinal()
            },
        methods:{
                async getFinal(){
                    let url='http://fixture_qatar_backend.test/api/tabla-posiciones'
                    await axios.get(url).then(response=>{
                        this.fase_final=response.data
                        console.log(this.fase_final)
                    }).catch(error=>{
                        console.log(error)
                    })
                }
            },
        computed:{
                
            }            
        }
    
</script>
<style scoped>
    @import '../assets/css/tabla.css';
</style>