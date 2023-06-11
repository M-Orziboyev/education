import {HomePageComponent} from "@/src/page-components";
import {GetServerSideProps} from "next";
import axios from "axios";
import {MenuItem} from "@/src/interfaces/menu.interface";
import {withLayout} from "@/src/layout/layout";

const Index = (): JSX.Element => {
    return <HomePageComponent/>
}
export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
    const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, {firstCategory: 0})

    return {
        props: {
            menu
        }
    }
}

interface HomePageProps {
    menu: MenuItem[];
}