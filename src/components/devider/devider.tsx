import {DeviderProps} from "@/src/components/devider/devider.prop";
import cn from 'classnames'
import styles from './devider.module.css'

const Devider = ({className, ...props}:DeviderProps):JSX.Element => {
    return <hr className={cn(className, styles.devider)} {...props}/>
}
export default Devider