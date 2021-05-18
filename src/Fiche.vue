<template>
  <div id="Fiche">
      
<h1>Fiche du film : {{film.nomdufilm}}</h1> 

<div>
     
  <p>
<em>Nom du film :</em> {{film.nomdufilm}} </p>
<p>
<br>
<em>Réalisateur :</em>   {{film.realisateur}}</p>
<p>
<br>
<em>Acteurs :</em>  {{film.acteur}}   </p>
<p>
<br>
<em>Synopsis :</em>  {{film.synopsis}}</p>
<p>
<br>
<em>Note (sur 5) :</em>  {{film.note}}</p>
<p>
<br>
<em>Catégorie :</em>  {{film.nomcategorie}}</p>
<p>
<br>
<em>Commentaire :</em>  {{film.commentaire}}</p>   
     
        
</div>



<div>
<button v-on:click="goListe" title="Retour à la liste" to="/filmlist">Retour à la liste</button> 
</div>

  </div>
</template>

<script>
import axios from 'axios'
import Film from './film'
export default {
    name: 'Fiche' ,
    components:{Film},
    data(){
        return{
             film:{},
            url:"http://localhost:8000/api/film/"
        }        
    },
    methods: {
        get_film(){ 
            let nomdufilm = decodeURIComponent(this.$route.params.nomdufilm)
            console.log(nomdufilm)
              axios.get(this.url +nomdufilm)
              .then( (response)=>{
                  this.film = response.data[0];
                 console.log(this.film);
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        goListe(){
            this.$router.push({path: '/filmlist'})
             }
    },
    mounted(){ console.log('test')
        this.get_film();
    }
}

</script>









<style>
#Fiche{
    padding: 5px;
}

#Fiche p{
    text-align: left;
    width: 40%;
    margin: auto;
    padding: 5px;
    background-color: var(--base-color);
}

button{
    padding: 5px;
    margin: 10px auto;
}
em{
    text-decoration: underline;
    font-style: normal;
    font-weight: bold;
}
@media (max-width : 800px) {
      #Fiche p{
        width: auto;
    }}
</style>