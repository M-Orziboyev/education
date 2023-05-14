import {CardProps} from "@/src/components/card/card.props";
import styles from './card.module.css';
import cn from 'classnames'

const Card = ({children, color = 'primary', className, ...props}:CardProps):JSX.Element => {
    return <div className={cn(styles.card, {
        [styles.primary]: color === 'primary',
    })} {...props}>
        {children}
    </div>
}

export default Card