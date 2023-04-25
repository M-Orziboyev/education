import {TextProps} from "@/src/components/text/text.props";
import cn from "classnames"
import styles from "./text.module.css"
const Text = ({size = 'm', children}: TextProps): JSX.Element => {
    return <p className={cn(styles.p, {
        [styles.s] : size = 's',
        [styles.m]: size = 'm',
        [styles.l]: size = 'l',
    })}>{children}</p>
}
export default Text