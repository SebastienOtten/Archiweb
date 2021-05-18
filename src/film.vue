<template>
  <div id="film">
      

    <h3>{{film.nomdufilm}}</h3>
<div v-if="showInput">
 <p>
<em>Nom du film :</em> {{film.nomdufilm}} </p>
<p>
<br>
<label for="realisateur"><em>Réalisateur :</em> </label>  {{film.realisateur}}
<input type="text" v-model="film.realisateur"></p>
<p>
<br>
<label for="acteur"><em>Acteurs :</em></label>  {{film.acteur}}  
<input type="text" v-model="film.acteur"> </p>
<p>
<br>
<label for="Synopsis"><em>Synopsis :</em></label>  {{film.synopsis}} 
<input type="text" v-model="film.synopsis"></p>
<p>
<br>
<label for="note"><em>Note (sur 5) :</em></label> {{film.note}}
<input type="number" min="0" max="5" v-model="film.note"></p>
<p>
<br>
<label for="categorie"><em>Catégorie :</em></label> {{film.nomcategorie}}
<select type="text" v-model="film.nomcategorie">
    <option value="Action">Action</option>
    <option value="Drame">Drame</option>
    <option value="Comedie">Comédie</option>
    <option value="Horreur">Horreur</option>
    <option value="Romance">Romance</option>
    <option value="Thriller">Thriller</option>
</select></p>  
<p>
<br>
<label for="commentaire"><em>Commentaire :</em></label>  {{film.commentaire}}
<input type="text" v-model="film.commentaire"></p>   

<button v-on:click="updateFilm(film)">Sauver</button> 
<button v-on:click="showInput = ! showInput">Retour à la liste</button>
</div>   

<div v-if="!showInput">
   <button v-on:click="goFiche(film.nomdufilm)" title="Voir les informations" tabindex="5">Consulter</button>
    <button v-on:click="showInput = ! showInput" title="Modifier la fiche" tabindex="6">Modifier</button>
    <button v-on:click="deleteFilm(film.nomdufilm)" title="Supprimer cette fiche" tabindex="7">Supprimer</button>
</div>
    
    
    


  </div>


</template>

<script>
export default {
  components:{},
    name:'Film',
    props:['film'],
    data(){
        return{
            showInput : false
        }
    },
    methods:{
        deleteFilm(nomdufilm) {
            this.$emit('event_delete', nomdufilm);
        },
        goFiche(nomdufilm){
            this.$router.push({name:'fiche', params:{'nomdufilm':nomdufilm}})
        },
        updateFilm(film){
            this.$emit('event_update', film)

        },
        
    }
}
</script>







<style>
#film{
    background-color: var(--base-color);
    width: 70%;
    margin: 5px auto;
    padding: 5px;
    color: var(--third-color);
}
@media (max-width : 800px) {
    em, p {
        font-size: small;
    }}
</style>