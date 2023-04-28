import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagPros extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 's' | 'm',
    color: 'red' | 'green' | 'primary',
    children: ReactNode
}