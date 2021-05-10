<template>
  <div id="Categorielist"><h1>Catégories</h1>

  <div v-for="categories in categorielist" :key="categories.nomcategorie"> 

    <Categorie v-bind:categories="categories"></Categorie>

  </div>

  </div>
</template>

<script>
import axios from 'axios';
import Categorie from './categorie';
export default {
  components: { Categorie },
    name: 'Categorielist' ,
    data(){
        return{
            showInput : false,
            categories:{
                nomcategorie : "",
                nomdufilm : "",
                ID:"",
                Descriptioncategorie:"",
            },
            categorielist:[],
            url:"http://localhost:8000/api/film/"
        }        
    },
    methods: {
        get_categorie(){
              axios.get(this.url)
              .then( (response)=>{
                this.categorielist = response.data;
                 console.log(this.categorielist);
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    },
    mounted() {
       this.get_categorie() 
    }
}
</script>






<style>
 #Categorielist {
    background-color:var(--second-color);
    margin: 10px auto;
    padding: 5px;
    width: 500px;
    border-radius: 10px;
    
}
#categorie {
    background-color: var(--base-color);
    width: 300px;
    margin: 5px auto;
    padding: 5px;
}
</style>