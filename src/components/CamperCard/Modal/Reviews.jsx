import css from '../CamperCard.module.css'
import  icons  from '../../../assets/icons/sprite.svg';

export const Reviews = ({ camper }) => {
    const reviews = camper.reviews;
    return (
        <>
            {reviews.map((review) => (
                <div className={css.review} key={review.reviewer_name + review.comment}>
                    <div className={css.container}><img className={css.avatar} src="https://via.placeholder.com/50" alt="avatar" />
                    <div className={css.nameRatingBox}><p className={css.reviewAuthor}>{review.reviewer_name}</p><span className={css.ratingBox}>
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
                            return (
                                <svg key={i} className={ratingValue <= review.reviewer_rating ? css.filledStar : css.emptyStar}>
                                    <use href={`${icons}#icon-star`}></use>
                                </svg>
                            );
                        })}
                    </span>
                    </div></div>
                    <p className={css.reviewText}>{review.comment}</p>
                </div>
            ))}
        </>
    );
};
