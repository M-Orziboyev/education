import {LayoutProps} from "./layout.props";

const Layout = ({children}: LayoutProps):JSX.Element => {
    return <>
        {/*Header*/}
    <div>
        {/*SideBar*/}
        <div>{children}</div>
    </div>
    </>
}
export default Layout