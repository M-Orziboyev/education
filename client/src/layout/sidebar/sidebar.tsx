import {SidebarProps} from "../sidebar/sidebar.props";
import Menu from "../menu/menu";

const Sidebar = ({...props}: SidebarProps): JSX.Element=> {
    return <div {...props}><Menu/></div>
}
export default Sidebar