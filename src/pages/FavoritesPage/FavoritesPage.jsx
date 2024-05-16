import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './FavoritesPage.module.css';
import { selectFavoriteCampers } from '../../redux/selectors.js';
import { Camper } from "../../components/CamperCard/CamperCard.jsx";
const FavoritesPage = () => {
    const favoritesCampers = useSelector(selectFavoriteCampers);



    return (
        <div>
            {favoritesCampers.length ? (
        <ul className={css.wrapper_list}>
          {favoritesCampers.map((camper) => (
            <Camper key={camper._id} camper={camper}  />
          ))}
        </ul>
      ) : (
        <p className={css.no_items}>
          No selected campers yet, go to
          <NavLink className={css.link} to="/catalog">
            {' '}
            Catalog
          </NavLink>
        </p>
      )}
        </div>
        );
};
export default FavoritesPage;
