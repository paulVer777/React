import React from 'react';

import {BrowserRouter as Router, Route,Link} from 'react-router-dom' //zmiana nazwy na router.


import MyFirstComponent from './components/MyFirstComponent'  //importujemy komponent z pliku MyFirstC.js
import Add from './components/Sum'
import Header from './components/Header'
import MappingArray from './components/MappingArray'
import MappingArray2 from './components/MappingArray2'
import CounterWithState from "./components/CounterWithState";
import Dashboard from "./components/Dashboard";
import Hello from "./components/hello";


const App = () =>  //komponent glowny ktory jest funkcja i do tego komponentu wstawiamy nasze componenty

    (
        <div>

            <Router>

                <div>

                    <Route exact path={'/counter'} component={Dashboard}/>   /*dashboard pojawi sie tylko pokliknieciu w component counter*/

                    <Link to={'/hello/Mateusz'}>Hello</Link>
                    <Link to={'/counter'}>Counter</Link>
                    <Link to={'/mapping-array'}>MappingArray</Link>
                    <Link to={'/mappingarray2'}>MappingArray</Link>
                    <Link to={'my-first-component'}>My first Component</Link>

                    <hr/>


                    <Route path={'/mapping-array'} component={MappingArray}/>
                    <Route path={'/mappingarray2'} component={MappingArray2}/>
                    <Route path={'/counter'} component={CounterWithState}/>
                    <Route path={'/my-first-component'} render={()=>(

                        <MyFirstComponent name={'Mateusz'}/>

                    )}/>

                    <Route path={'/hello/:name'} component={Hello}/> /*//za hello jest name, i przekaze to do match params i */






                </div>

            </Router>







            {/*// atrubut trafia do props*/}




        </div>


    );

export default App //przesyłamy do index.js





