import Card from "../Card/Card";
import { Cardscontainer } from "./styledComponents"

export default function Cards({ characters, onClose }) {

   return (
   <Cardscontainer>
      {characters.map(({id, name, species, gender, image }) => {
        return (
         <Card 

          id={id}
           name={name}
           species={species}
           gender={gender}
           image={image}
           onClose={onClose}
          
         />
        );
    })} 
 </Cardscontainer>
);
}
