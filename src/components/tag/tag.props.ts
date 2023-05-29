import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 's' | 'm',
    color: 'red' | 'green' | 'primary' | 'ghost',
    children: ReactNode
}