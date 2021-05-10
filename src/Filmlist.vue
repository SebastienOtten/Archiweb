<template>
  <div id="filmlist"><h1>Liste des films</h1>

  <div v-for="film in filmlist" :key="film.nomdufilm"> 
      <Film v-bind:film="film"  @event_delete="deleteFilm" @event_update="updateFilm"></Film>
      
  </div>

  </div>
</template>

<script>
import axios from 'axios';
import Film from './film.vue'
export default {
    name: 'Filmlist' ,
    components:{Film},
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
            url:"http://localhost:8000/api/film/"
        }        
    },
    methods: {
        get_filmlist(){
              axios.get(this.url)
              .then( (response)=>{
                this.filmlist = response.data;
                 console.log(this.filmlist);
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        deleteFilm(nomdufilm){
              axios.delete(this.url + nomdufilm)
              .then( (response)=>{
                 console.log(response.data);
                 this.get_filmlist();
            })
            .catch((error)=>{
                console.log(error);
            })

        },
        updateFilm(film) {
            axios.put(this.url + film.nomdufilm, film)
            .then((response)=>{
                console.log(response.data);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    },
    mounted() {
       this.get_filmlist() 
    }
}
</script>






<style>
 #filmlist {
    background-color:var(--second-color);
    margin: 10px auto;
    padding: 5px;
    width: 500px;
    border-radius: 10px;
    
}
</style>