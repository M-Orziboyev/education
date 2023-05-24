import {IconButtonProps, icons} from "@/src/components/icon-button/icon-button.props";
import button from "@/src/components/button/button";
import styles from './icon-button.module.css'
import cn from 'classnames'

const IconButton = ({icon, appearance, className, ...props}: IconButtonProps): JSX.Element => {
    const IconComponent = icons[icon]
    return <button className={cn(styles.iconButton, className, {
        [styles.primary]: appearance == 'primary',
            [styles.white]: appearance == 'white'
    })} {...props}>
        <IconComponent />
    </button>
}
export default IconButton