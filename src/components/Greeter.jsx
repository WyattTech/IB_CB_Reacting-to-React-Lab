import React from 'react';

const Greetings = props => {
    
     return (
        <section className="col-md-4">

        <h1>{props.phrase},  {props.name}!</h1>

        </section>
     )

    }


export default Greetings;