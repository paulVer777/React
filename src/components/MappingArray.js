import React from 'react'


const names =
    [
        {name: "Ola", key: 'asdasdasdsda'},
        {name: "Ula", key: 'asdasdasdsda'},
        {name: "Ala", key: 'asdasdasdsda'},
        {name: "Ela", key: 'asdasdasdsda'},
        {name: "Pola", key: 'asdasdasdsda'}


    ]


const MappingArray = (props) =>
    (

        names.map(name => <div key={name.key}>{name.name}</div>) //name to value


    )


export default MappingArray