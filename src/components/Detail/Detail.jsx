import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState} from "react"
import axios from "axios";


const Detail = () => {
    const {detailId} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => setCharacter(response.data)
      );
    }, []);

    return(
        <div>
            {
                character.name ?
               (<>
                <h2>{character.name}</h2>
                 <p>{character.status}</p>
                 <p>{character.species}</p>
                 <p>{character.gender}</p>
                 <p>{character.origin?.name}</p>
                 <img src={character.image} alt="img" />

             
                </>)
                :<h3>Loading......</h3>
            }
          
        </div>
    )
}


export default Detail;