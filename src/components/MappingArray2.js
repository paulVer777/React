import React from 'react'



const imiona=["Adam","Marek","Olek","Zenek"];


const MappingArray2 = (props) =>
    (

       imiona.map((name,i)=> <div key={i}>{i}.{name}</div>) //name to value


    );


export default MappingArray2