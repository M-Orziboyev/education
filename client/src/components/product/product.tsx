import { ProductProps } from './product.props';
import styles from './product.module.css';
import Card from '../card/card';
import Image from 'next/image';
import { convertToUSD } from '../../helpers/helpers';
import Rating from '../rating/rating';
import Tag from '../tag/tag';
import Devider from '../devider/devider';
import Button from '../button/button';
import cn from 'classnames';
import { useState } from 'react';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';

const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
    const [reviewOpen, setReviewOpen] = useState<boolean>(false);

    return (
        <div className={className} {...props}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image src={product.images} alt={product.title} width={70} height={70} />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {convertToUSD(product.price)}
                    {product.oldPrice && (
                        <Tag color='green' className={styles.oldPrice}>
                            {convertToUSD(product.price - product.oldPrice)}
                        </Tag>
                    )}
                </div>
                <div className={styles.credit}>
                    {convertToUSD(product.credit)}/<span className={styles.month}>month</span>
                </div>
                <div className={styles.rating}>
                    <Rating rating={product.initialRating} />
                </div>
                <div className={styles.tags}>
                    {product.tags.length &&
                        product.tags.map(t => (
                            <Tag key={t} className={styles.category} color={'primary'}>
                                {t}
                            </Tag>
                        ))}
                </div>
                <div className={styles.priceTitle}>Price</div>
                <div className={styles.creditTitle}>Credit</div>
                <div className={styles.rateTitle}>{product.reviewCount} reviews</div>

                <Devider className={styles.hr} />

                <div className={styles.description}>{product.description}</div>

                <div className={styles.features}>
                    {product.characteristics.length &&
                        product.characteristics.map(ch => (
                            <div className={styles.characteristic} key={ch.name}>
                                <span className={styles.characteristicName}>{ch.name}</span>
                                <span className={styles.characteristicDots}></span>
                                <span className={styles.characteristicValue}>{ch.value}</span>
                            </div>
                        ))}
                </div>

                <div className={styles.advBlock}>
                    {product.advantages && (
                        <div className={styles.advantages}>
                            <div className={styles.advantageTitle}>Advantages</div>
                            <div>{product.advantages}</div>
                        </div>
                    )}
                    {product.disadvantages && (
                        <div className={styles.disadvantages}>
                            <div className={styles.disadvantageTitle}>Disadvantages</div>
                            <div>{product.disadvantages}</div>
                        </div>
                    )}
                </div>

                <Devider className={styles.hr2} />

                <div className={styles.actions}>
                    <Button appearance='primary'>More Details</Button>
                    <Button
                        appearance='ghost'
                        arrow={reviewOpen ? 'down' : 'right'}
                        className={styles.reviewBtn}
                        onClick={() => setReviewOpen(prev => !prev)}
                    >
                        Review
                    </Button>
                </div>
            </Card>
            <Card
                color='white'
                className={cn(styles.review, {
                    [styles.opened]: reviewOpen,
                    [styles.closed]: !reviewOpen,
                })}
            >
                {product.reviews.map(r => (
                    <div key={r._id}>
                        <Review review={r} />
                        <Devider />
                    </div>
                ))}
                <ReviewForm productid={product._id} />
            </Card>
        </div>
    );
};

export default Product;