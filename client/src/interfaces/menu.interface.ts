import {PageCategory} from "@/src/interfaces/page.interface";

export interface MenuItem {
    _id: {
        secondCategory:string;
    };
    pages: PageItem[];
}

export interface PageItem{
    alies:string;
    title: string;
    _id:string;
    category:string;
}
export interface IFirstLevelMenu{
    route:string;
    name:string;
    icon: JSX.Element;
    id: PageCategory;
}