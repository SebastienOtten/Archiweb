<template>
    <div id="Header">
        <p> Bienvenue sur le site qui répertorie tous les films et qui vous permet d'avoir toutes les informations les concernant! </p>
        
        
        <div id="nav">
            <p>
        <router-link to="/filmlist" class="lien">Liste des films</router-link>
        <router-link to="/Creation" class="lien">Création d'une fiche</router-link>
        <router-link to="/Categorielist" class="lien">Catégories</router-link>
        <router-link to="/About" class="lien">A propos de nous</router-link>
        
            </p>
        
        
        <router-view></router-view>
        </div>
        
    </div> 
</template>



<script>
    export default {
        name: 'Header',
        data() {
            return {}
        },
        methods: {}
    }
</script>







<style >
#Header{
    padding: 5px;
    text-align: center;
    margin: 5px auto;
    color: var(--third-color);
    background-color: var(--second-color);
    border-radius: 10px;
}
#nav p{
    background-color: var(--base-color);
    padding: 5px;
}
.lien{
    color: var(--third-color);
    padding: 10px;
    margin: auto;
    text-decoration: none;
}
a:hover{
    color: var(--second-color);
}
</style>