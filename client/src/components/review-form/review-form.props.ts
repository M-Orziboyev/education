import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productid: string;
}
export interface IReviewResponse {
    name: string;
    rating: number;
    description: string;
    title:  string;
    id: number;
    productId: string;
}