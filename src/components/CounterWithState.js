import React from 'react'


class CounterWithState extends React.Component {  //propsy przechodza do glownej klasy React.Components

    state = {                        //stan jest z wewnatrz, komponent sie przerenderowywuje kiedy zzmieni sie stan

        count: 0


    };


    render() {

        const minusBtnClick = () => this.state.count--; //trzeba odświeżyć żeby pokazać wynik na ekranie


        return (

            <div>

                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={minusBtnClick}>-</button>
                    <button>+</button>


                </div>


            </div>


        )


    }
}


export default CounterWithState