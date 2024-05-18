import { useState } from "react";
import { Camper } from "../CamperCard/CamperCard";
import css from "./Filter.module.css";
import icons from "../../assets/icons/sprite.svg";

export const Filter = ({ campers }) => {
    const details = {
        adults: "Adults",
        transmission: "Transmission",
        engine: "Engine",
        airConditioner: "Air Conditioner", 
        bathroom: "Bathroom", 
        kitchen: "Kitchen",
        beds: "Beds", 
        TV: "TV", 
        CD: "CD Player", 
        radio: "Radio", 
        shower: "Shower", 
        toilet: "Toilet", 
        freezer: "Freezer", 
        hob: "Hob", 
        microwave: "Microwave"
    };
    
    const types = ['van', 'fully-integrated', 'alcove'];
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEquipment, setSelectedEquipment] = useState([]);
    const [selectedType, setSelectedType] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleEquipmentChange = (event) => {
    const key = event.target.value;
    setSelectedEquipment((prevSelectedEquipment) => {
        if (prevSelectedEquipment.includes(key)) {
            return prevSelectedEquipment.filter(item => item !== key);
        } else {
            return [...prevSelectedEquipment, key];
        }
    });
};

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const filteredCampers = Array.isArray(campers) ? campers.filter((camper) => {
        const matchesSearch = camper.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesEquipment = selectedEquipment.every((equip) =>
            camper.details[equip]
        );
        const matchesType = selectedType ? camper.type === selectedType : true;
        return matchesSearch && matchesEquipment && matchesType;
    }) : [];

    return (
        <div>
            <div className={css.filters}>
                <label className={css.search} htmlFor="search">Location</label>
                <svg width={20} height={20} className={css.svgLocation}>
                    <use href={`${icons}#icon-map-pin`}></use>
                </svg>
                <input
                    className={css.inputLocation}
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />

                <h5 className={css.filtersTitle}>Filters</h5>
                <h5 className={css.equipmentTitle}>Vehicle equipment</h5>
                <ul className={css.equipmentList}>
                    {Object.entries(details).map(([key, label]) => (
                        <li className={`${css.equipmentItem} ${selectedEquipment.includes(key) ? css.selected : ''}`}
                            key={key}>
                            <label className={css.equipmentLabel} key={key} htmlFor={key}>
                                <input className={css.hiddenCheckbox}
                                    type="checkbox"
                                    value={key}
                                    onChange={handleEquipmentChange}
                                    id={key}
                                />
                                <svg className={css.svgEquipment} width={32} height={32}>
                                    <use href={`${icons}#icon-${key}`}></use>
                                </svg>
                                <span className={css.equipmentName}>{label}</span>
                            </label>
                        </li>
                    ))}
                </ul>
                <h5 className={css.typeTitle}>Vehicle type</h5>
                <ul className={css.typeList}>
                    {types.map((type) => (
                        <li key={type} className={`${css.typeItem} ${selectedType.includes(type) ? css.selectedType : ''}`}>
                            <label key={type} htmlFor={type}>
                                <input className={css.hiddenRadio}
                                    type="radio"
                                    name="type"
                                    value={type}
                                    onChange={handleTypeChange}
                                    id={type}
                                />
                                <svg className={css.typeSvg} width={40} height={28}>
                                    <use href={`${icons}#icon-${type}`}></use>
                                </svg>
                                <span className={css.typeSpan}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <ul>
                <button 
                    onClick={handleSearchClick} 
                    className={css.searchButton}
                    disabled={isButtonDisabled}
                >
                    Search
                </button>
                {filteredCampers.map((camper) => (
                    <Camper key={camper._id} camper={camper} />
                ))}
            </ul>
        </div>
    );
};
