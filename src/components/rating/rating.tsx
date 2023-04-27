import styles from './rating.module.css';
import cn from 'classnames';
import { RatingProps } from './rating.props';
import { useState, useEffect } from 'react';
import StarIcon from './star.svg'

const Rating = ({ rating, isEditable = true, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>((new Array(5).fill(<></>)))

    useEffect(() => {
        renderRating(rating)
    }, [rating])

    const changeRatingDisplay = (index: number) => {
        if (!isEditable) {
            return;
        } else {
            renderRating(index)
        }

    }


    const renderRating = (currentRating: number) => {
        const updateArray = ratingArray.map((_rating: JSX.Element, idx: number) => (
            <span className={cn(styles.star, {
                [styles.filled]: idx < currentRating,
                [styles.editable]: isEditable
            })}
                onMouseEnter={() => changeRatingDisplay(idx + 1)}
            >
                <StarIcon />
            </span>
        ))
        setRatingArray(updateArray)
    }



    return (
        <div className={styles.rating} {...props}>
            {ratingArray.map((rating, idx) => (
                <span key={idx}>{rating}</span>
            ))}
        </div>
    );
}

export default Rating
