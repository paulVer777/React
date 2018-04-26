import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'; //zaimportowac komponent z material Ui

const styles={

    btn:{

        margin:'10px'

    }


};



class CounterWithState extends React.Component {  //propsy przechodza do glownej klasy React.Components

    state = {                        //stan jest z wewnatrz, komponent sie przerenderowywuje kiedy zzmieni sie stan

        count: 0


    };


    render() {

        const minusBtnClick = () => {


            //trzeba odświeżyć żeby pokazać wynik na ekranie
            this.setState({ //set state przyjmuje nowy obiekt,ten obiekt zostanie polaczony z obiektem state,

                count: this.state.count - 1 //a nastepnie wyrenderowany ponownie.

            })

        };

        const plusBtnClick = () => {


            //trzeba odświeżyć żeby pokazać wynik na ekranie
            this.setState({ //set state przyjmuje nowy obiekt,ten obiekt zostanie polaczony z obiektem state,

                count: this.state.count + 1 //a nastepnie wyrenderowany ponownie.

            })

        };

        return (

            <div>

                <h1>{this.state.count}</h1>
                <div>
                    <RaisedButton backgroundColor={'yellow'} style={styles.btn} primary={true} label={'-'} onClick={minusBtnClick} />
                    <RaisedButton  style={styles.btn} secondary={true} label={'+'} onClick={plusBtnClick} />


                </div>


            </div>


        )


    }
}


export default CounterWithState