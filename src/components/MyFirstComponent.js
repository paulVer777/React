import React from 'react' //najpierw importujemy biblioteke react do pliku

const MyFirstComponent=(props)=>{ // props to wlasciwosc

     console.log(props);



   return <div>Hello {props.name} !</div> // wstawienie wartosci obiektu props przez {};
};


export  default MyFirstComponent  //exportujemy ten komponent dzieki czemu bedzie mozna go zaimportowac do innego pliku.