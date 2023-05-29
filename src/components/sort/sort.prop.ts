import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SortProp extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum;
    setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
    // @ts-ignore
    Rating,
    // @ts-ignore
    Price
}