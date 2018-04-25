import React from 'react'


const styles = {

    header: {
        color: 'black',
        margin: 20,
        display: 'inline'
    }

};


const Hed = (props) => (

    <div>

        <h1

            style={
                props.isRed ?
                {...styles.header, color: 'red'}
                :
                styles.header
            }


        >{props.text}</h1>


    </div>


);

export default Hed