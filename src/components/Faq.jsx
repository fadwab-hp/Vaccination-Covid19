import React, { Component } from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

class Faq extends Component {
  render() {
    return (
      
        <div>
          <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <h1>F.A.Q</h1>
          <h2>Les réponses aux questions fréquentes posées 
            <br></br>
            autour de la vaccination contre la COVID-19</h2>
          
        </div>
      </section>
      
      
       <div class="faq">
       
        <Collapse defaultActiveKey={['1']} >
          <Panel Content header="Comment fonctionnent les vaccins ?" key="1">
            <p>Les vaccins stimulent les réponses immunitaires protectrices du corps humain de sorte que, si une personne est infectée par un agent pathogène, le système immunitaire peut rapidement empêcher l'infection de se propager dans le corps et de provoquer des maladies. De cette manière, les vaccins imitent une infection naturelle mais sans pour autant provoquer la maladie.
            <br></br>
              <br></br>
Toutes les personnes infectées par le SRAS-CoV-2 ne développent pas de maladie (Covid-19 est la maladie causée par le virus SARS-CoV-2). Ces personnes ont une infection asymptomatique mais peuvent toujours transmettre le virus à d'autres. La plupart des vaccins n'empêchent pas complètement l'infection, mais empêchent l'infection de se propager dans le corps et de provoquer des maladies. De nombreux vaccins peuvent également empêcher la transmission, conduisant potentiellement à la protection collective grâce à laquelle les personnes non vaccinées sont protégées de l'infection par les personnes vaccinées qui les entourent, car elles ont moins de risque d'être exposées au virus.</p>
          </Panel>
          <Panel header="Pourquoi une stratégie de vaccination contre le virus de la COVID-19 au Maroc ?" key="2">
            <p>A l’instar des autres pays du monde, en dépit des mesures sanitaires établies au Maroc, il a été enregistré des conséquences relatives à la pandémie à COVID-19 touchant les volets sanitaire, économique et social, nécessitant la mise en place de stratégies de lutte additionnelles.
              <br></br>
              <br></br>
              Ainsi, le Maroc, grâce aux Orientations Royales de Sa Majesté le Roi Mohammed VI que Dieu l’assiste, a été parmi les pays qui ont anticipé la planification pour la mise en place d’une stratégie de vaccination contre le virus de la COVID-19 comme intervention puissante de santé publique et a procédé à la signature d’accord pour l’acquisition des vaccins, le transfert de technologie et la participation à la phase III des essais cliniques pour le développement du vaccin.
            </p>
          </Panel>
          <Panel header="Est ce que les vaccins utilisés par le Maroc sont sûrs?" key="3">
            <p>Les données sur les vaccins sont réconfortantes. Les essais réalisés n'ont pas suscité de préoccupations en matière de sécurité, bien que de rares effets indésirables, bénins à modérés (douleurs au site d’injection, réaction cutanée, maux de tête, une légère fébricule) ont été notifiés chez quelques participants aux essais cliniques au Maroc. Les résultats de ces derniers ont confirmé que ces effets indésirables étaient transitoires, comparables à d’autres vaccins de même type et qu’aucun événement indésirable grave n'a été signalé.</p>
          </Panel>
          <Panel header="Quelles sont les contre-indications du vaccin anti-covids-19?" key="4">
            <p>Toutes les personnes âgées de 17 ans et plus peuvent être vaccinées par le vaccin anti-Covid-19, quel que soit la maladie ou le traitement en cours, à l’exception des situations suivantes :
              <br></br>
              <br></br>
                    Les femmes enceintes.
              <br></br>
              <br></br>
                    Les femmes allaitantes.
              <br></br>
              <br></br>
              Les personnes ayant présenté une réaction allergique suite à la première dose de ce vaccin.
            </p>
          </Panel>
        </Collapse>
        
       </div>
       
        
        </div>
        
    );
  }
}

export default Faq;