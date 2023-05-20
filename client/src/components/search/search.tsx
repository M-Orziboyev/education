import {SearchProps} from "@/src/components/search/search.props";
import styles from "./search.module.css"
import cn from 'classnames'
import {Button, Input} from "@/src/components";
import SearchSvg from "./search.svg"
import {useState} from "react";
import {useRouter} from "next/router";

const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const searchHandler = () => {
        if (!search.length) return
        router.push({pathname: '/search', query: {q: search}})
    }

    return <div className={cn(className, styles.search)}{...props}>
        <Input placeholder={'Search...'} className={styles.input} value={search}
               onChange={e => setSearch(e.target.value)}/>
        <Button appearance={"primary"} className={styles.button} onClick={searchHandler}>
            <SearchSvg/>
        </Button>
    </div>
}

export default Search