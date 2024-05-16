import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
 
    const isFavorite = useSelector(state => state.campers.favorites.includes(camper._id));

    const [openModal, setOpenModal] = useState(false);

    const handleOpenClick = () => {
        setOpenModal(true);
    }
    const handleCloseClick = () => {
        setOpenModal(false);
    };

 const handleSetFavoriteClick = () => {
        if (!isFavorite) {
            dispatch(addFavorite(_id));
        } else {
            dispatch(removeFavorite(_id));
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
    
                <button onClick={handleSetFavoriteClick}>
                    {isFavorite
                        ? <svg style={{ fill: 'red' }} width={24} height={24}><use href={`${icons}#icon-like`}></use></svg>
                        : <svg style={{ fill: 'transparent', stroke: 'black' }} width={24} height={24}><use href={`${icons}#icon-unlike`}></use></svg>}
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