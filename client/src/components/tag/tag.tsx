import {TagPros} from "@/src/components/tag/tag.pros";
import cn from "classnames"
import styles from "./tag.module.css"

const Tag = ({size = 'm', color = 'red', children, ...props}: TagPros): JSX.Element => {
    return (
        <div className={cn(styles.tag, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.red]: color === 'red',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary'
        })} {...props}>{children}</div>
    )
}
export default Tag