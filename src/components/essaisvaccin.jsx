import React, { Component } from 'react';

class essaisvaccin extends Component {
  _onReady(event) {
    //access to player in all event handlers via event.target
     //event.target.mute();
  }
  
  _onEnd(event) {
    event.target.playVideo();
  }
    render() {

      const videoOptions = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0
        }
      };
        return (

           <div>
           <div className="  p-3 mb-2 bg-secondary text-white essaisvac">
            <h1>VACCINS CONTRE LA COVID-19 : UN POINT SUR LES ESSAIS </h1>
           </div>
           <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
             <div className="container ">
              <div className="video-background vid" 
  >     
       
        
        
      </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
            <div class="card-group ">
  <div class="card marg">
    <div class="card-body text-center">
      <h2 class="card-text essais" >Essais cliniques de Sinopharm au Maroc: 
      la sérologie des 6 mois, faite en avril, bientôt acheminée vers Wuhan</h2>
    
      <br></br>
      <p class="pht" ></p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <a href="#sinopharme"> Voir plus</a>
    </div>
  </div>
  <div class="card marg">
    <div class="card-body text-center">
        
      <h2 class="card-text essais">AstraZeneca a pu utiliser des données « obsolètes » lors de ses essais cliniques aux États-Unis</h2>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <a href="#astra"> Voir plus</a>
    </div>
  </div>
  
  
</div>
<br></br>
<br></br>


<div class="container " id="astra">
  <div class="jumbotron">
    <h1>Efficace à 79% et 100% pour les formes sévères</h1>      
    <p>
"Nous exhortons la compagnie à travailler avec le Data and safety monitoring board (DSMB, comité de suivi de l'essai, NDLR), pour évaluer l'efficacité des données et s'assurer que les données les plus précises, les plus récentes et les plus efficaces possibles soient rendues publiques au plus vite"", a-t-il ajouté dans un communiqué.

Le laboratoire AstraZeneca avait défendu lundi son vaccin, rejeté par une bonne partie des Européens, affirmant qu'il était efficace à 80% contre le Covid chez les personnes âgées et n'augmentait pas le risque de caillots, après des essais cliniques de phase III menés aux Etats-Unis, avec 32.449 participants.

Le vaccin du suédo-britannique AstraZeneca est efficace à 79% pour prévenir le Covid-19 symptomatique dans la population générale et à 100% pour empêcher les formes sévères de la maladie et l'hospitalisation, avait ajouté le laboratoire après ces essais cliniques.

Ce mois-ci plusieurs pays ont suspendu son utilisation par crainte qu'il ne provoque des caillots sanguins, parfois mortels. Jeudi, l'Agence européenne des médicaments (EMA) l'a pourtant jugé "sûr et efficace" et l'utilisation du vaccin a repris dans certains pays..</p>

  </div>
  <p>This is some text.</p>      
  <p>This is another text.</p>      
</div>

<div class="container" id="sinopharme">
  <div class="jumbotron">
    <h1>Essais cliniques de Sinopharm au Maroc: la sérologie des 6 mois, faite en avril, bientôt acheminée vers Wuhan</h1>      
    <p>
    “La sérologie des six mois a été effectuée le mois dernier. Tout s’est très bien déroulé dans les 3 centres marocains. Elle sera acheminée vers Wuhan, en Chine, dans les jours à venir, probablement après la fête de l’Aid”, nous annonce Pr Redouane Abouqal, investigateur principal et coordinateur national des essais cliniques du vaccin Sinopharm au Maroc.

La sérologie permet de “doser les anticorps neutralisants” car, comme l’explique Pr Abouqal “l’une des inconnues concernant les vaccins est de savoir combien de temps persistent les anticorps dans le corps humain”.

Selon l’investigateur principal, il s’agit “d’une méthode très particulière pour doser les anticorps qui neutralisent les virus”. Une quatrième sérologie est prévue dans 6 mois, elle marquera la fin de la phase 3 des essais cliniques, à la suite de quoi, les résultats finaux seront publiés.

Pour l’instant, les résultats préliminaires ne sont pas encore disponibles, puisqu’il s’agit d’un essai randomisé en double aveugle qui ne peut être levé, au risque de détruire l’étude.

“Les seuls résultats dont on dispose, parce que nous les recueillons nous-mêmes, ce sont les événements indésirables qui restent tout à fait banals”.

Qu’ils soient signalés par le groupe placebo ou par le groupe des vaccinés, ils sont, “dans tous les cas très bien tolérés”. Selon notre interlocuteur, le vaccin de Sinopharm est “l’un des vaccins les plus tolérés”.

En effet, Pr Abouqal affirme que le suivi des volontaires ayant participé à la 3e phase des essais cliniques se poursuit.

“Nous faisons le suivi des événements indésirables et de la survenance de la maladie Covid. C’est très important pour évaluer l’efficacité clinique du vaccin”, explique-t-il.
</p>
  </div>
  <p>This is some text.</p>      
  <p>This is another text.</p>      
</div>

        </div>
          
            );
        }
    }
    
export default essaisvaccin;