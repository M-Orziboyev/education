import {HeaderProps} from "@/src/layout/header/header.props";
import styles from './header.module.css'
import cn from 'classnames'
import LogoIcon from '../logo.svg'
import {IconButton} from "@/src/components";
import {useState} from "react";
import Sidebar from "@/src/layout/sidebar/sidebar";
import {motion} from 'framer-motion'

const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const variants = {
        opened:{
            opacity: 1,
            x: 0,
            transition: {
                stiffness:20,
            }
        },
        closed: {
            opacity: 0,
            x: '100%',
        },
    };

    return (
        <div className={cn(className, styles.header)} {...props}>
            <LogoIcon/>
            <IconButton icon={"menu"} appearance={'white'}/>
            <motion.div variants={variants} initial={'closed'} animate={isOpen ? 'opened' : 'closed'} className={styles.mobileMenu}>
                <Sidebar/>
                <IconButton icon={"close"} appearance={"white"} className={styles.closeIcon}/>
            </motion.div>
    </div>
    )
}
export default Header