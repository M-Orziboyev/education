import styles from './navbar.module.css'
import Link from "next/link";
import Logo from '../logo.svg'
import {navLinks} from "@/src/helpers/constants";
import {Search, Text, IconButton} from "@/src/components";
import {motion} from 'framer-motion'
import {useState} from "react";
const Navbar = () => {

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

    const toggleOpen = () => setIsOpen(prev => !prev)
    return <div className={styles.navbar}>
        <nav className={styles.nav}>
            <Link href={'/'}>
                <Logo className={styles.logo} />
            </Link>
            <div className={styles.navigation}>
                {navLinks.map((nav, idx) => (
                    <Link href={nav.route} key={idx}>
                        <Text size={'medium'}>{nav.name}</Text>
                    </Link>
                ))}
                <Search/>
            </div>
                <IconButton onClick={toggleOpen} appearance={"white"} icon={isOpen ? 'close' : 'menu'} className={styles.mobileIcon} />
            <motion.div variants={variants} initial={'closed'} animate={isOpen ? 'opened' : 'closed'} className={styles.mobileMenu}>
                {navLinks.map((nav, idx) => (
                    <Link href={nav.route} key={idx}>
                        <Text size={'medium'}>{nav.name}</Text>
                    </Link>
                ))}
                <Search className={styles.search}/>
            </motion.div>
        </nav>
    </div>
}

export default Navbar