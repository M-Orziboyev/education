import {CoursePageComponentProps} from "@/src/page-components/course-page-component/course-page-component.props";
import styles from "./course-page-component.module.css"
import Heading from "@/src/components/heading/heading";
import Tag from "@/src/components/tag/tag"
import {Advantages, HhData, Product, Sort} from "@/src/components";
import {Text} from "domelementtype";
import {useReducer} from "react";
import {sortReducer} from "@/src/page-components/course-page-component/sort.reducer";
import {SortEnum} from "@/src/components/sort/sort.prop";

const CoursePageComponent = ({page, products}: CoursePageComponentProps): JSX.Element => {

    const [state, dispatch] = useReducer(sortReducer, {sort: SortEnum.Rating, products: products})
    const setSort = (sort: SortEnum) => {
        dispatch({type: sort});
    }

    return <div className={styles.wrapper}>
        {/*TITLE*/}
        <div className={styles.title}>
            <Heading tag='h1'>{page.title}</Heading>
            <Sort sort={state.sort} setSort={setSort}/>
        </div>
        <div>{products && products.map(c => <Product key={c._id} product={c}/>)}</div>
        {/*    Vocations*/}
        <div className={styles.hhTitle}>
            <Heading tag='h2'>Vacations - {page.category}</Heading>
            <Tag color='red' size='m'>hh.uz</Tag>
        </div>

        {/*    HH DATA*/}
        {page.hh && <HhData {...page.hh} />}

        {/*    Advantages */}
        {page.advantages && page.advantages.length && (
            <>
                <Heading tag='h2'>Advantages</Heading>
                <Advantages advantages={page.advantages}/>
            </>
        )}
        {/*    DESCRIPTION*/}
        <Text>{page.description}</Text>

        {/*    Skills*/}
        <Heading tag={'h2'}>Skills</Heading>
        {page.tags.length && page.tags.map(t => (<Tag color={'primary'} key={t}>{t}</Tag>))}
    </div>
}

export default CoursePageComponent