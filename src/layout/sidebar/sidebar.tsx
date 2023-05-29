import {SidebarProps} from "../sidebar/sidebar.props";
import Menu from "../menu/menu";
import cn from 'classnames'
import styles from "./sidebar.module.css"
import Link from "next/link";
import Logo from '../logo.svg'
import {Devider, Search} from "@/src/components";

const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return <div className={cn(className, styles.sidebar)} {...props}>
        <Link href={'/'}>
            <Logo />
            <Devider />
        </Link>
        <Search />
        <Menu/>
    </div>
}
export default Sidebar