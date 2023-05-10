import {IFirstLevelMenu} from "@/src/interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import {PageCategory} from "@/src/interfaces/page.interface";
import BooksIcon from "./icons/books.svg";

export const firstLevelMenu: IFirstLevelMenu[] = [
    {route: 'course', name: 'Course', icon: <CoursesIcon/>, id:PageCategory.Courses},
    {route: 'books', name: 'Books', icon: <BooksIcon />, id:PageCategory.Books},
]