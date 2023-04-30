import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: Number,
    isEditable?: boolean;
    setRating?: (rating: number) => void;
}