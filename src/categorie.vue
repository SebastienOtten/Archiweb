<template>
    <div id="categorie">
 <h3>{{categories.nomcategorie}}</h3>
 <div v-if="showInput">
     
<li>
       {{categories.nomdufilm}}
</li> 

    
   

<br>
<button v-on:click="showInput = ! showInput">Retour aux catégories</button>

 </div>
 <div v-if="! showInput">
<button v-on:click="showInput =! swhowInput" title="Voir les informations">Consulter</button>
 </div>

    </div>
</template>



<script>
export default {
    name: 'Categorie' ,
    props:['categories'],
    data(){
        return{
            showInput : false,
            methods: {}
                }
            }
        }   

</script>

<style>
    #categorie{
        width: 70%;
    }

</style>