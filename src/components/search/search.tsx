import {SearchProps} from "@/src/components/search/search.props";
import styles from "./search.module.css"
import cn from 'classnames'
import {Button, Input, Text} from "@/src/components";
import SearchSvg from "./search.svg"
import {ChangeEvent, ChangeEventHandler, useContext, useState} from "react";
import {useRouter} from "next/router";
import {ChangeHandler} from "react-hook-form";
import {AppContext} from "@/src/context/app.context";
import {PageItem} from "@/src/interfaces/menu.interface";
import Link from "next/link";

const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [response, setResponse] =useState<PageItem[]>([])
    const {menu} = useContext(AppContext)
    const [search, setSearch] = useState('')
    const router = useRouter()
    console.log(menu)
    const searchHandler = (id: string) => {
        router.push(`/${router.query?.type || 'courses'}/${id}`)
        setResponse([])
        // if (!search.length) return
        // router.push({pathname: '/search', query: {q: search}})
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const allPages = menu.map(c => c.pages).flat()
        const {value} = e.target
        setSearch(value)
        const response = allPages.filter(c => c.title.toLowerCase().indexOf(value.toLowerCase()) !== -1)
        setResponse(response);
        if (response.length == 0) {
            setResponse([])
        }
    }

    return <div className={cn(className, styles.search)}{...props}>
        <Input placeholder={'Search...'} className={styles.input} value={search}
               onChange={changeHandler}/>
        {/*@ts-ignore*/}
        <Button size={"medium"} appearance={"primary"} className={styles.button} onClick={searchHandler}>
            <SearchSvg/>
        </Button>
        {response.length ?(
            <div className={styles.searchResponse}>
                {response.map(c => <div onClick={() => searchHandler(c._id)} key={c._id}>{c.title}</div>)}
            </div>
        ) : null}
    </div>
}

export default Search