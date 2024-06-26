
import css from "./HomePage.module.css";
import FirstImage from './../../assets/images/lake.jpg';
import FirstVideo from './../../assets/images/video-1.mp4';
import SecondVideo from './../../assets/images/video-2.mp4';
import SecondImage from './../../assets/images/camper-1.jpg';
import ThirdImage from './../../assets/images/camper-2.jpg';
import FourthImage from './../../assets/images/camper-3.jpg';
import FifthImage from './../../assets/images/camper-7.jpg';
import SixthImage from './../../assets/images/camper-6.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className={css.wrapper}>
            <h2 className={css.heroTitle}>We know what you need</h2>
            <ul className={css.mainContainer}>
               <li className={css.mainItem}><img className={css.hero} src={FirstImage} alt="New Image" /></li>
                <li className={css.mainItem}><img className={css.hero} src={SecondImage} alt="New Image" /></li>
                <li className={css.mainItem}><img className={css.hero} src={ThirdImage} alt="New Image" /></li>
                <li className={css.mainItemVideo}><video className={css.video} autoPlay muted loop>
    <source src={FirstVideo} type="video/mp4" />
</video></li>
<li className={css.mainItemVideo}><video className={css.video} autoPlay muted loop>
    <source src={SecondVideo} type="video/mp4" />
</video></li>
                <li className={css.mainItem}><img className={css.hero} src={FourthImage} alt="New Image" /></li>
                <li className={css.mainItem}><img className={css.hero} src={FifthImage} alt="New Image" /></li>
                <li className={css.mainItem}><img className={css.hero} src={SixthImage} alt="New Image" /></li>
</ul>
                <Link className={css.link} to="/catalog">Check it!</Link>
            
</div>

    );
};
export default HomePage;
