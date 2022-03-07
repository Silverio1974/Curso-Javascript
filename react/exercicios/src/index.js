import React from 'react'
import ReactDOM from 'react-dom'

//import BomDia from './componentes/BomDia'

//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//import { BoaTarde, BoaNoite } from './componentes/Multiplos'

ReactDOM.render(

    <div>
    <Pai nome= "Paulo"  sobrenome="Silva ">
        <Filho nome="Pedro" sobrenome= "Silva"/>
        <Filho nome="Paulo" sobrenome= "Silva"/>
        <Filho nome="Carla" sobrenome= "Silva"/> 
        
    
    </Pai>
</div>
   
   // <div>
    //    <Saudacao tipo= "Bom dia" nome="Joao" />
 //   </div>

    , document.getElementById('root'))


    //ReactDOM.render(
       // <div>
         //<BoaTarde nome='Ana' />
     //<BoaNoite nome="Bia" />
       // </div>
    
       // , document.getElementById('root'))