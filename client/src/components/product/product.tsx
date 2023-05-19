import {ProductProps} from "@/src/components/product/product.props";
import styles from './product.module.css'
import {Card, Rating} from "@/src/components";
import Image from "next/image";
import {convertToUSD} from "@/src/helpers/helpers";
import Tag from "../tag/tag";

const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    return <div className={className} {...props}>
        <Card className={styles.product} color='primary'>
            <div className={styles.logo}>
                <Image src={product.images} alt={product.title} width={70} height={70}></Image>
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {convertToUSD(product.price)}
                {product.oldPrice && (
                    <Tag className={styles.oldPrice}
                         color={'green'}>{convertToUSD(product.price - product.oldPrice)}</Tag>
                )}
            </div>
            <div className={styles.credit}>
                {convertToUSD(product.credit)}/<span className={styles.month}>month</span>
            </div>
            <div className={styles.rating}>
                <Rating rating={product.initialRating}/>
            </div>
            <div className={styles.tags}>
                {product.tags.length && product.tags.map(t => (
                    <Tag className={styles.category} key={t} color={'primary'}>{t}</Tag>
                ))}
            </div>
        </Card>
    </div>
}
export default Product