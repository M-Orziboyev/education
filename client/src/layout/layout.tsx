import {LayoutProps} from "./layout.props";
import Sidebar from "@/src/layout/sidebar/sidebar";
import Header from "@/src/layout/header/header";
import Footer from "@/src/layout/footer/footer";
import {FunctionComponent} from "react";
import styles from "./layout.module.css"

const Layout = ({children}: LayoutProps): JSX.Element => {
    return <>
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>{children}</div>
            <Footer className={styles.footer}/>
        </div>
    </>
}
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}