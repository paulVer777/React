import React from 'react';
import MyFirstComponent from './components/MyFirstComponent'  //importujemy komponent z pliku MyFirstC.js


const App = () =>  //komponent glowny ktory jest funkcja i do tego komponentu wstawiamy nasze componenty

    (
        <MyFirstComponent name="Mateusz"/> // atrubut trafia do props
    );


console.log(App());


export default App;
