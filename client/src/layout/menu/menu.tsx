import {useContext} from "react";
import {AppContext} from "@/src/context/app.context";
import {firstLevelMenu} from "@/src/helpers/constant";
import Link from "next/link";
import styles from "./menu.module.css"
import cn from 'classnames'
import {IFirstLevelMenu} from "@/src/interfaces/menu.interface";


const Menu = (): JSX.Element => {
    const {menu, firstCategory, setMenu} = useContext(AppContext)
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(c =>
                    <div key={c.route}>
                        <>
                            <Link href={`/${c.route}`}>
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: c.id === firstCategory,})}>{c.icon}
                                    <span>{c.name}</span>
                                </div>
                            </Link>
                            {c.id === firstCategory && buildSecondLevel(c)}
                        </>
                    </div>)}
            </>
        )
    }
    const buildSecondLevel = (menuItem: IFirstLevelMenu) => {
        return(
            <div className={styles.secondBlock}>
                {menu.map(q => (
                    <div key={q._id.secondCategory}>
                        <div className={styles.secondLevel}>
                            q._id.secondCategory
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    const buildThirdLevel = () => {
    }
    return <div className={styles.menu}>{buildFirstLevel()}</div>
}
export default Menu