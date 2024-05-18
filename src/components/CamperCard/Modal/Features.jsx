

import css from '../CamperCard.module.css';
import icons from '../../../assets/icons/sprite.svg';

export const Features = ({ camper }) => {
    const details = {
        airConditioner: camper.airConditioner, 
        bathroom: camper.bathroom, 
        kitchen: camper.kitchen,
        beds: camper.beds, 
        TV: camper.TV, 
        CD: camper.CD, 
        radio: camper.radio, 
        shower: camper.shower, 
        toilet: camper.toilet, 
        freezer: camper.freezer, 
        hob: camper.hob, 
        microwave: camper.microwave
    }
    
    const categories = ['form', 'length', 'width', 'height', 'tank', 'consumption']
    
    return (
        <div className={css.featuresWrapper}>
            <ul className={css.featureList}>
                <li className={css.listItem} ><svg width={20} height={20} className={css.svg}>
                        <use href={`${icons}#icon-adults`}></use></svg> {camper.adults} adults</li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svg}>
                        <use href={`${icons}#icon-transmission`}></use></svg> {camper.transmission}</li>
                    <li className={css.listItem}><svg width={20} height={20} className={css.svgItem}>
                        <use href={`${icons}#icon-engine`}></use></svg> {camper.engine} </li>
                {Object.entries(details).map(([key]) => (
                    <li  className={css.listItem} key={key}><svg key={key} className={css.svg} width={20} height={20}><use href={`${icons}#icon-${key}`}></use></svg>
                        <span>{key}</span>
                        
                    </li>
                ))}
            </ul><h5 className={css.vehicleTitle}>Vehicle details</h5>
           
            <ul className={css.vehicleList}>
                {categories.map((category) => (
                    <li className={css.vehicleItem} key={category}>
                        <span>{category}</span> <span>{camper[category]}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

