import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size: 'small' | 'medium' | 'large',
    children: ReactNode,
}