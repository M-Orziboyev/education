import {useContext} from "react";
import {AppContext} from "@/src/context/app.context";
import {firstLevelMenu} from "@/src/helpers/constant";
import Link from "next/link";
import styles from "./menu.module.css"
import cn from 'classnames'



const Menu = ():JSX.Element => {
    const {menu, firstCategory, setMenu} = useContext(AppContext)
    const buildFirstLevel =() => {
        return (
            <>
                {firstLevelMenu.map(c => <div key={c.route}><Link href={`/${c.route}`}>
                    <div className={cn(styles.firstLevel, {
                        [styles.firstLevelActive]: c.id === firstCategory,

                    })}>{c.icon}
                        <span>{c.name}</span>
                    </div>
                </Link></div>)}
            </>
        )
    }
    const buildSecondLevel =() => {}
    const buildThirdLevel =() => {}
    return <div className={styles.menu}>{buildFirstLevel()}</div>
}
export default Menu