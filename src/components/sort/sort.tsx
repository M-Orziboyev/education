import {SortEnum, SortProp} from "@/src/components/sort/sort.prop";
import styles from './sort.module.css'
import cn from 'classnames'
import SortIcon from './sort.svg'

const Sort = ({sort, setSort, className, ...props}:SortProp):JSX.Element => {
    return <div className={cn(className, styles.sort)} {...props}>
        <span className={cn({
            [styles.active]: sort == SortEnum.Rating
        })}
            onClick={() => setSort(SortEnum.Rating)}
        >
            <SortIcon className={styles.sortIcon}/> Rating
        </span>
        <span className={cn({
            [styles.active]: sort == SortEnum.Price
        })}
              onClick={() => setSort(SortEnum.Price)}

        >
            <SortIcon className={styles.sortIcon} /> Price
        </span>
    </div>
}
export default Sort