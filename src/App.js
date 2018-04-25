import React from 'react';
import MyFirstComponent from './components/MyFirstComponent'  //importujemy komponent z pliku MyFirstC.js
import Add from './components/Sum'
import Header from './components/Header'
import MappingArray from './components/MappingArray'
import MappingArray2 from './components/MappingArray2'


const App = () =>  //komponent glowny ktory jest funkcja i do tego komponentu wstawiamy nasze componenty

    (
        <div>

            <MyFirstComponent name="Mateusz"/>

            {/*// atrubut trafia do props*/}

            <Add numberA={5} numberB={10} /> /*5 i 10 trafia do obiektu props*/
            <Header text={'Ala ma kota'} isRed={false}/>

            <MappingArray/>
            <MappingArray2/>
        </div>


    );

export default App //przesyłamy do index.js





