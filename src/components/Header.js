import React from 'react'


const styles={

    header:{
    color:'red',
    margin:20,
    display:'inline'
}

}



const Hed=(props)=>(

    <div>

       <h1

           style={styles.header //obiekt jsx a w nim obiekt css


           }


       >{props.text}</h1>


    </div>


);

export  default Hed