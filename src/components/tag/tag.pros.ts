import {ReactNode} from "react";

export interface TagPros {
    size?: 's' | 'm',
    color: 'red' | 'green' | 'primary',
    children: ReactNode
}