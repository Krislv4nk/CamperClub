
import css from '../CamperCard.module.css';
import icons from '../../../assets/icons/sprite.svg';
import first from '../../../assets/images/Switch.jpg';
import second from '../../../assets/images/Switch1.jpg';
import third from '../../../assets/images/Tooltip.jpg';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Modal = ({ camper, onClose }) => {

    return (
        <div className={css.modal}>
            <div className={css.modalBtnBox}>
                <h3 className={css.modalTitle}>{camper.name}</h3>
                <button onClick={onClose} className={css.modalBtn}><svg className={css.cross}>
                    <use href={`${icons}#icon-cross`} /></svg></button></div>
                <div className={css.modalInfo}><div className={css.rateBox}>
                    <div className={css.modalBox}><svg width={16} height={16}><use href={`${icons}#icon-star`}></use></svg>
                    <p className={css.modalText}> {`${camper.rating}(${camper.reviews.length} Reviews)`}</p></div>
                    <div className={css.modalBox}><svg width={16} height={16} className={css.svg}>
                        <use href={`${icons}#icon-map-pin`}></use></svg><p className={css.modalText}> {camper.location}</p></div>
                </div>
                <p className={css.modalTitle}>€{camper.price.toFixed(2)}</p></div>
            <ul className={css.modalGallery}>
            {camper.gallery.map((item) => (
              <li key={item}>
                <img src={item} alt="camper" className={css.modalFoto} />
              </li>
            ))}
          </ul>  
            <p className={css.modalDescription}>{camper.description}</p>
            <ul className={css.detailsBox}>
                <li><button type="button" className={css.detailsTitle}>Features</button></li>
                <li><button type="button" className={css.detailsTitle}>Reviews</button></li></ul>



        </div>
    )
}