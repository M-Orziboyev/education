import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size: 's' | 'm' | 'l',
    children: ReactNode,
}