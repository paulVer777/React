import React from 'react';

import {BrowserRouter as Router, Route,Link} from 'react-router-dom' //zmiana nazwy na router.


import MyFirstComponent from './components/MyFirstComponent'  //importujemy komponent z pliku MyFirstC.js
import Add from './components/Sum'
import Header from './components/Header'
import MappingArray from './components/MappingArray'
import MappingArray2 from './components/MappingArray2'
import CounterWithState from "./components/CounterWithState";
import Dashboard from "./components/Dashboard";


const App = () =>  //komponent glowny ktory jest funkcja i do tego komponentu wstawiamy nasze componenty

    (
        <div>

            <Router>

                <div>

                    <Route exact path={'/counter'} component={Dashboard}/>  /*dashboard pojawi sie tylko po kliknieciu w component counter*/
                    <Link to={'/counter'}>Counter</Link>
                    <Link to={'/mapping-array'}>MappingArray</Link>
                    <Link to={'/mappingarray2'}>MappingArray</Link>
                    <Link to={'/mappingarray2'}>MappingArray</Link>
                    <Link to={'my-first-component'}>My first Component</Link>



                    <Route path={'/mapping-array'} component={MappingArray}/>
                    <Route path={'/mappingarray2'} component={MappingArray2}/>
                    <Route path={'/counter'} component={CounterWithState}/>
                    <Route path={'/my-first-component'} render={()=>(

                        <MyFirstComponent name={'Mateusz'}/>

                    )}/>


                </div>

            </Router>


            <hr/>




            {/*// atrubut trafia do props*/}

            <Add numberA={5} numberB={10}/> /*5 i 10 trafia do obiektu props*/
            <Header text={'Ala ma kota'} isRed={false}/>


        </div>


    );

export default App //przesyłamy do index.js





