import {withLayout} from "@/src/layout/layout";
import {GetServerSideProps} from "next";
import axios from "axios";
import {MenuItem} from "@/src/interfaces/menu.interface";
import {ProductModel} from "@/src/interfaces/product.interface";
import {PageModel} from "@/src/interfaces/page.interface";

const Index = ({menu, page, products}:PageProps):JSX.Element =>{
    console.log(page)
    return <div>{products.length}</div>
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<PageProps> = async ({query}) => {
    const {slug} = query
    const firstCategory:number = 0
    if(!slug){
        return{
            notFound:true
        }
    }

    const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, {firstCategory})
    const {data: page} = await axios.get<PageModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`)
    const {data: products} = await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`, {category: slug})
    return{
        props: {menu, page, products}
    }
}

interface PageProps extends Record<string, unknown> {
    menu: MenuItem[],
    page: PageModel[],
    products: ProductModel[],
}