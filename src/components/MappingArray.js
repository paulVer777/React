import React from 'react'


const names=["Ola","Ala","Ewa","Ula"];


const MappingArray=(props)=>
    (

        names.map(name=><div key={name}>{name}</div>)


    )


export default MappingArray