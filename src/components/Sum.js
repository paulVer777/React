import React from 'react'
import Header from './Header'

const Add=({numberA,numberB})=>(

    <div>

        Suma {numberA} i {numberB} jest równa {numberA + numberB}
         <Header text={numberA + numberB} isRed={true}/>

    </div>


);


export default Add