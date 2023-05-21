import {ReviewFormProps} from './review-form.props';
import styles from './review-form.module.css';
import cn from 'classnames';
import Input from '../input/input';
import Rating from '../rating/rating';
import {useState} from 'react';
import {Button, TextArea} from '..';
import {Controller, useForm} from 'react-hook-form'
import {IReviewForm} from "@/src/components/review-form/review-form.interface";

const ReivewForm = ({productid, className, ...props}: ReviewFormProps): JSX.Element => {
    const {register, handleSubmit, control} = useForm<IReviewForm>()

    const onSubmit = (data: IReviewForm) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input placeholder='Name' className={styles.name} {...register("name")}/>
                <Input placeholder='Title' className={styles.title} {...register('title')}/>
                <div className={styles.rating}>
                    <span>Rating: </span>
                    <Controller render={({field}) => <Rating isEditable rating={field.value} setRating={field.onChange}/>
                    } name={"rating"} control={control} />
                </div>
                <TextArea placeholder='Description' className={styles.description} {...register('description')}/>
                <div className={styles.submit}>
                    <Button appearance='primary'>Submit</Button>
                    <span
                        className={styles.info}>* Your review will be moderated and reviewed before being published.</span>
                </div>
            </div>

        </form>
    );
};

export default ReivewForm;