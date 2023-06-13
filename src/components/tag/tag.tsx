import {TagProps} from "@/src/components/tag/tag.props";
import cn from "classnames"
import styles from "./tag.module.css"

const Tag = ({size = 'm', color= 'red', children, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.red]: color === 'red',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
            [styles.ghost]: color === 'ghost',
        })} {...props}>{children}</div>
    )
}
export default Tag