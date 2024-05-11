import { NavLink } from 'react-router-dom';
import camper from './../../assets/icons/icons/camper.png'
import css from './Header.module.css';


export const Header = () => {
    return (
      <header className={css.header}>
        <div className={css.logoWrapper}>
          <img className={css.camper} src={camper} alt="camper" />
          <p className={css.name}>CamperClub</p>
        </div>
                <nav className={css.wrapper}>
                    <ul className={css.headerList}>
                        <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/" end>Home</NavLink></li><div className={css.catalogWrapper}>
                        <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/catalog">Catalog</NavLink></li>

                       <li ><NavLink className={({ isActive }) =>
            `${css.headerItem} ${isActive ? css.active : ''}`
          } to="/favorites">Favorites</NavLink></li></div>
          
          
                        </ul>
                </nav>
            </header>
    )
}
