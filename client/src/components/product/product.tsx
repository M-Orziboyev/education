import {ProductProps} from "@/src/components/product/product.props";
import styles from './product.module.css'
import {Card} from "@/src/components";
import Image from "next/image";

const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    return <div className={className} {...props}>
        <Card className={styles.product} color='primary'>
            <div className={styles.logo}>
                <Image src={product.images} alt={product.title} width={70} height={70}></Image>
            </div>
        </Card>
    </div>
}
export default Product