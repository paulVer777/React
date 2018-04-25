import React from 'react';
import MyFirstComponent from './components/MyFirstComponent'  //importujemy komponent z pliku MyFirstC.js
import Add from './components/Sum'

const App = () =>  //komponent glowny ktory jest funkcja i do tego komponentu wstawiamy nasze componenty

    (
        <div>

            <MyFirstComponent name="Mateusz"/>

            {/*// atrubut trafia do props*/}

            <Add numberA={5} numberB={10} />

        </div>


    );

export default App //przesyłamy do index.js





