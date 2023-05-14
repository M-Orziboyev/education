import {CoursePageComponentProps} from "@/src/page-components/course-page-component/course-page-component.props";
import styles from "./course-page-component.module.css"
import Heading from "@/src/components/heading/heading";
import Tag from "@/src/components/tag/tag"
import {HhData} from "@/src/components";
const CoursePageComponent = ({firstCategory, page, products}:CoursePageComponentProps):JSX.Element => {
    return <div className={styles.wrapper}>
        {/*TITLE*/}
        <div className={styles.title}>
            <Heading tag='h1'>{page.title}</Heading>
            <div>Sort ....</div>
        </div>
    {/*    Products   */}
        <div>Products</div>
    {/*    Vocations*/}
        <div className={styles.hhTitle}>
            <Heading tag='h2'>Vacations - {page.category}</Heading>
            <Tag color='red' size='m'>hh.uz</Tag>
        </div>

    {/*    HH DATA*/}
        {page.hh && <HhData {...page.hh} />}
    </div>
}

export default CoursePageComponent