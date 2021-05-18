<template>

    <div id="Creation">
        
        <h1>Nouvelle fiche de film</h1>
<div class="formulaire">
<label for="nomdufilm">Nom du film :</label>    
<input type="text" v-model="film.nomdufilm" placeholder="Titanic" required><br>
<label for="realisateur">Réalisateur :</label>
<input type="text" v-model="film.realisateur" placeholder="James Cameron"><br>
<label for="acteur">Acteurs :</label>
<input type="text" v-model="film.acteur" placeholder="Leonardo DiCaprio"><br>
<label for="synopsis">Synopsis :</label>
<input type="text" v-model="film.synopsis" placeholder="C'est l'histoire d'un paquebot qui ne devait pas couler ..."><br>
<label for="note">Note attribuée :</label>
<input type="number" min="0" max="5" v-model="film.note" placeholder="4" required><br>
<label for="categorie">Catégorie :</label>
<select name="nomcategorie" v-model="film.nomcategorie">
    <option value="Action">Action</option>
    <option value="Drame">Drame</option>
    <option value="Comedie">Comédie</option>
    <option value="Horreur">Horreur</option>
    <option value="Romance">Romance</option>
    <option value="Thriller">Thriller</option>
    </select> <br />
<label for="commentaire">Commentaire :</label> 
<input type="text" v-model="film.commentaire" placeholder="C'était très émouvant"><br>

<button type="submit" v-on:click="postFilm" >Enregistrer</button>
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
                nomcategorie:"",
                commentaire:""
            },
            filmlist:[],
            url:"http://localhost:8000/api/film"
             }
        },
        methods: {
             createFilm(){
                 if(this.nomdufilm === ''){
        this.onError('Please fill in all fields of the form')
        return}},
           
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