
import { Filter } from "components/Filter/Filter";
import { CatalogList } from "components/CatalogList/CatalogList";
import css from "./CatalogPage.module.css"


const CatalogPage = () => {
    

    return (
        <div className={css.wrapper}>
            <Filter/>
            <CatalogList/>
        </div>
    )
}

export default CatalogPage;
