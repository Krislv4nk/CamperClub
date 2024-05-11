
import css from "./HomePage.module.css";
import heroImage from './../../assets/icons/icons/lake.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
       <div className={css.wrapper}>
            <div className={css.hero} style={{ backgroundImage: `url(${heroImage})` }}>
               </div>
<h2 className={css.heroTitle}>We know what you need</h2>
                <Link className={css.link} to="/catalog">Check it!</Link>
            
</div>

    );
};
export default HomePage;
