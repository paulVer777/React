import React from 'react'



const Hello=(props)=>
    (

        <div>Hello world{props.match.params.name}!</div> //do propsa match przekazuje obiekt ktory ma wlasciwosc params


    );



export default Hello
