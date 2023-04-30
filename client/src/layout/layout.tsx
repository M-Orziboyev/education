import {LayoutProps} from "./layout.props";
import Sidebar from "@/src/layout/sidebar/sidebar";
import Header from "@/src/layout/header/header";
import Footer from "@/src/layout/footer/footer";
import {FunctionComponent} from "react";

const Layout = ({children}: LayoutProps):JSX.Element => {
    return <>
        <Header />
    <div>
        <Sidebar />
        <div>{children}</div>
    </div>
        <Footer />
    </>
}
export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element{
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}