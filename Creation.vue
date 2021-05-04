<template>

    <div id="Creation">
        <h1>Création d'une fiche de film</h1>
<div class="formulaire">
Nom du film :     
<input type="text" v-model="film.nomdufilm" placeholder="Titanic" required><br>
Réalisateur :
<input type="text" v-model="film.realisateur" placeholder="James Cameron"><br>
Acteurs :
<input type="text" v-model="film.acteur" placeholder="Leonardo DiCaprio"><br>
Synopsis :
<input type="text" v-model="film.synopsis" placeholder="C'est l'histoire d'un paquebot qui ne devait pas couler ..."><br>
Note attribuée :
<input type="number" min="0" max="5" v-model="film.note" placeholder="4" required><br>
Commentaire :
<input type="text" v-model="film.commentaire" placeholder="C'était très émouvant"><br>

<button type="submit" v-on:click="postFilm">Enregistrer</button>
</div>

    </div> 

</template>


<script>
import axios from 'axios'
import Film from './film'
    export default {
  name: 'Creation',
  components: {Film},
   data(){
        return{
             film:{
                nomdufilm : "",
                realisateur:"",
                acteur:"",
                synopsis:"",
                note:0,
                commentaire:""
            },
            filmlist:[],
            url:"http://localhost:8000/api/film"
             }
        },
        methods: {
            postFilm(){
                axios.post(this.url, this.film)
                .then((response)=>{
                    console.log(response.data);
                    this.$router.push({path:"/Filmlist"});
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        },
        mounted(){
            
        }
    }
</script>







<style>
#Creation {
    padding: 5px;
}
.formulaire {
    padding: 5px;
    margin: auto;
    width: 40%;
    
}
.formulaire button{
    margin: 10px;
}
input {
    margin: 5px auto;
}

</style>