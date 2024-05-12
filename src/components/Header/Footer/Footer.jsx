
import camper from '../../../assets/images/camper.png'
import css from '../Header.module.css'


export const Footer = () => {

    return (
        <footer className={css.footer}><div className={css.footerWrapper}>
                <div><p className={css.footerText}>© 2024</p>
            <p className={css.footerText}>All rights reserved</p></div>
            <div className={css.logoWrapperFooter}>
          <img className={css.camper} src={camper} alt="camper" />
          <p className={css.footerName}>CamperClub</p>
        </div>
</div>
            </footer>
    )
}