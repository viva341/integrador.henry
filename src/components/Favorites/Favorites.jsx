import { useSelector } from 'react-redux';
import Card from "../Card/Card";
import { useDispatch  } from 'react-redux';
import { orderCards, filterCards  } from '../../redux/actions';




const Favorites = () => {  // Renamed the component to start with an uppercase letter
    const favoriteItems = useSelector((state) => state.myFavorites);  // Renamed the variable
     const dispatch = useDispatch()
     const handleClick = (e) => {
        const {name, value}= e.target;
        switch (name){
            case "order":
            return dispatch(orderCards(value))
            case "filter":
            return dispatch(filterCards(value))
            default:
            break;

        }
     }
    return (
        <>
        <div>
        <select name="order" onChange={handleClick}
       >
            <option 
            value="Ascendente">Ascendente </ option>
           
            <option value="Descendente">Descensente
            </option>
        </select>
        <select name = "filter" onChange={handleClick}
       
       >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="GenderLess">GenderLess</option>
            <option value="unknow">unknow</option>
        </select>

        </div>
            {favoriteItems.map(({ id, name, species, gender, image }) => {  // Updated variable name here
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                    />
                );
            })}
        </>
    );
};

export default Favorites;
