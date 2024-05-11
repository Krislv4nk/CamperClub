import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { getCampersThunk } from '../../redux/operations';
import { useDispatch } from "react-redux";
import { selectCampers} from '../../redux/selectors';
import { Camper } from "../CamperCard/CamperCard.jsx";
import css from './CatalogList.module.css';

export const CatalogList = () => {
        const dispatch = useDispatch();
    const allAds = useSelector(selectCampers);

    const adsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getCampersThunk());
    }, [dispatch]);

    const handleLoadMoreClick = () => {
        setCurrentPage(currentPage + 1);
    };

    const adsToShow = allAds.slice(0, currentPage * adsPerPage);


    return (
        <div className={css.wrapper}> 
                {adsToShow.map(camper => (
                    <Camper key={camper._id} camper={camper}  />
                ))}
            
            {adsToShow.length < allAds.length && (
                <button className={css.button} onClick={handleLoadMoreClick}>Load more</button>
            )}
        
        </div>
    );
};