import Card from "./Card.jsx";



export default function CardGrid(){

    const cards = [];

    for(let i = 0; i < 9; i++){
        cards.push(<Card key={i}
                    image={'19'}
                    link="capstone.com/angelo"
                    title="Angelo's portfolio"/>)
    }

    return(
        <div className={'gridClass'}>
            {cards}
        </div>
    );


}