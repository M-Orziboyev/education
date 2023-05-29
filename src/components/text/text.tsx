import {TextProps} from "@/src/components/text/text.props";
import cn from "classnames"
import styles from "./text.module.css"
const Text = ({size = 'medium', children, ...prop}: TextProps): JSX.Element => {
    return <p className={cn(styles.p, {
        [styles.small] : size = 'small',
        [styles.medium]: size = 'medium',
        [styles.large]: size = 'large',
    })}{...prop}>{children}</p>
}
export default Text