import {withLayout} from "@/src/layout/layout";
import {GetServerSideProps} from "next";
import axios from "axios";
import {MenuItem} from "@/src/interfaces/menu.interface";
import {ProductModel} from "@/src/interfaces/product.interface";
import {PageModel} from "@/src/interfaces/page.interface";
import {firstLevelMenu} from "@/src/helpers/constants";
import {CoursePageComponent} from "@/src/page-components";

const Index = ({ products, firstCategory, page}:PageProps):JSX.Element =>{
    return <CoursePageComponent firstCategory={firstCategory} page={page} products={products} />
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<PageProps> = async ({query}) => {
    const {slug, type} = query
    if(!slug){
        return{
            notFound:true
        }
    }

    const firstCategoryItem = firstLevelMenu.find(c => c.route === type)

    // @ts-ignore
    const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, {firstCategory: firstCategoryItem.id,})
    const {data: page} = await axios.get<PageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`)
    const {data: products} = await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`, {category: slug})
    return{

    // @ts-ignore
        props: {menu, page, products, firstCategory: firstCategoryItem.id}
    }
}

interface PageProps extends Record<string, unknown> {
    menu: MenuItem[],
    page: PageModel,
    products: ProductModel[],
    firstCategory: number,
}