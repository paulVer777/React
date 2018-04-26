import React from 'react'


const names =
    [
        {name: "Ola", key: 'asdasdasdsda1'},
        {name: "Ula", key: 'asdasdasdsdad'},
        {name: "Ala", key: 'asdasdasdsdae112'},
        {name: "Ela", key: 'asdasdasdsdasad'},
        {name: "Pola", key: 'asdasdasdsda12312312'}


    ]


const MappingArray = (props) =>
    (

        names.map(name => <div key={name.key}>{name.name}</div>) //name to value


    )


export default MappingArray