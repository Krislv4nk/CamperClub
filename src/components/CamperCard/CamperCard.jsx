import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFavoriteCampers } from "../../redux/selectors";
import { addFavorite, removeFavorite } from "../../redux/camperSlice";
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import {Tooltip} from './Tooltip/Tooltip';
import { Modal } from './Modal/Modal';
import css from './CamperCard.module.css';
import icons from '../../assets/icons/sprite.svg';

export const Camper = ({ camper }) => {
    const { _id, gallery,
        name,
        price,
        rating,
        reviews,
        location,
        description,
        details,
        engine,
        transmission,
        adults, } = camper;
   
    const dispatch = useDispatch();
 const favorites = useSelector(selectFavoriteCampers);
     const isFavorite = favorites.some((fav) => fav._id === camper._id);

    const [openModal, setOpenModal] = useState(false);

    const handleOpenClick = () => {
        setOpenModal(true);
    }
    const handleCloseClick = () => {
        setOpenModal(false);
    };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper._id));
    } else {
      dispatch(addFavorite(camper));
    }
  }
    return (
        <li key={camper._id} className={css.item}>
            <img src={gallery[0]} alt="camper" className={css.foto} />
            <div className={css.detailsWrapper}>
                <div className={css.nameWrapper}>
                    <h2 className={css.name}>{name}</h2>
                    <div className={css.priceWrapper}>
            <p className={css.name}>€{price.toFixed(2)}</p>
    
                <button onClick={handleFavoriteClick} className={css.favoriteButton}>
              <svg width={16} height={16} className={isFavorite ? css.svg_heart_red : css.svg_heart}>
                <use href={`${icons}#icon-unlike`}></use>
              </svg>
            </button>
    
           </div></div>
                <div className={css.ratingWrap}><div className={css.ratingWrapper}>
                    <svg width={16} height={16}><use href={`${icons}#icon-star`}></use></svg>
                    <p>{`${rating}(${reviews.length} Reviews)`}</p></div>
                    
                <div className={css.locationWrapper}><svg width={16} height={16} className={css.svg}>
                        <use href={`${icons}#icon-map-pin`}></use></svg><p>{location}</p></div></div>
                <div id="overlay" className={css.overlay}></div>
                <Tooltip title={description}>
                <p className={css.description}> {description}</p></Tooltip>
               
            <ul className={css.list}>
                    <li className={css.listItem} ><svg width={20} height={20} >
                        <use href={`${icons}#icon-Users`}></use></svg> {adults} adults</li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svg}>
                        <use href={`${icons}#icon-Container`}></use></svg> {transmission}</li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svgItem}>
                        <use href={`${icons}#icon-orlen`}></use></svg> {engine} </li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svg}>
                        <use href={`${icons}#icon-kitchen`}></use></svg> Kitchen</li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svg}>
                        <use href={`${icons}#icon-beds`}></use></svg> {details.beds} beds</li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svgItem}>
                        <use href={`${icons}#icon-AC`}></use></svg> AC</li>
            </ul>
                <button className={css.button} onClick={handleOpenClick}>Show more</button>
                <StyledEngineProvider injectFirst>
                    <Dialog open={openModal} onClose={handleCloseClick}
                        PaperComponent={() =>
                            <Modal onClose={handleCloseClick} camper={camper} 
                            />}></Dialog>
                </StyledEngineProvider>
            </div>
            

        </li>
    )
}