<template>
  <div id="film">

    <h3>{{film.nomdufilm}}</h3>
<div v-if="showInput">
 <p>
<em>Nom du film :</em> {{film.nomdufilm}} </p>
<p>
<br>
<em>Réalisateur :</em>   {{film.realisateur}}
<input type="text" v-model="film.realisateur"></p>
<p>
<br>
<em>Acteurs :</em>  {{film.acteur}}  
<input type="text" v-model="film.acteur"> </p>
<p>
<br>
<em>Synopsis :</em>  {{film.synopsis}} 
<input type="text" v-model="film.synopsis"></p>
<p>
<br>
<em>Note (sur 5) :</em>  {{film.note}}
<input type="number" min="0" max="5" v-model="film.note"></p>
<p>
<br>
<em>Catégorie :</em>  {{film.nomcategorie}}
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
<em>Commentaire :</em>  {{film.commentaire}}
<input type="text" v-model="film.commentaire"></p>   

<button v-on:click="updateFilm(film)">Sauver</button> 
<button v-on:click="showInput = ! showInput">Retour à la liste</button>
</div>   

<div v-if="!showInput">
   <button v-on:click="goFiche(film.nomdufilm)" title="Voir les informations">Consulter</button>
    <button v-on:click="showInput = ! showInput" title="Modifier la fiche">Modifier</button>
    <button v-on:click="deleteFilm(film.nomdufilm)" title="Supprimer cette fiche">Supprimer</button>
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
    width: 300px;
    margin: 5px auto;
    padding: 5px;
    color: var(--third-color);
}

</style>