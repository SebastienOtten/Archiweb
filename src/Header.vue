<template>
    <div id="Header">
       
        <p> Bienvenue sur le site qui répertorie tous les films et qui vous permet d'avoir toutes les informations les concernant! </p>
        
        
        <div id="nav">
        <ul>
        
        <li><router-link to="/filmlist" class="lien" tabindex="1">Liste des films</router-link></li>
        <li><router-link to="/Creation" class="lien" tabindex="2">Création d'une fiche</router-link></li>
        <li><router-link to="/Categorielist" class="lien" tabindex="3">Catégories</router-link></li>
        <li><router-link to="/About" class="lien" tabindex="4">A propos de nous</router-link></li>
        
        </ul>
        
        
        
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
    margin:  auto;
    color: var(--third-color);
    background-color: var(--second-color);
    border-radius: 10px;
}
#nav ul{
    display: flex;
    text-align: center;
    background-color: var(--base-color);
}
#nav li{
    
    display: flex;
    margin: auto;
    
    
}
.lien{
    color: var(--third-color);
    margin: auto;
    text-decoration: none;
    padding: 5px;
    
}
a:hover{
    color: var(--second-color);
}
@media (max-width : 800px) {
p,h1,h3, li {
        font-size: small;
    }
#nav ul{
   flex-direction: column;
}

}
</style>