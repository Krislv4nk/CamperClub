
import css from '../CamperCard.module.css';
import icons from '../../../assets/icons/icons/sprite.svg';
import first from '../../../assets/icons/icons/Switch.jpg';
import second from '../../../assets/icons/icons/Switch1.jpg';
import third from '../../../assets/icons/icons/Tooltip.jpg';

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
                <p className={css.modalTitle}>€{camper.price}.00</p></div>
                <div className={css.modalGallery}>
                    <img src={`url(${first})`} alt="camper" style={{ backgroundImage: `url(${first})` }} className={css.modalFoto} />
                    <img src={`url(${second})`} alt="camper" style={{ backgroundImage: `url(${second})` }} className={css.modalFoto}/>
                    <img src={`url(${third})`} alt="camper" style={{ backgroundImage: `url(${third})` }} className={css.modalFoto} />
                </div>
                
            <p className={css.modalDescription}>Embrace simplicity and freedom with the Mavericks panel truck,
                an ideal choice for solo travelers or couples seeking
                a compact and efficient way to explore the open roads. This
                no-frills yet reliable panel truck offers the essentials
                for a comfortable journey, making it the perfect companion for
                those who value simplicity and functionality.</p>
    <div className={css.detailsBox}><h4 className={css.detailsTitle}>Features</h4>
    <h4 className={css.detailsTitle}>Reviews</h4></div>
        </div>
    )
}