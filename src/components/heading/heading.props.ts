import {ReactNode} from "react";

export interface headingProps {
    tag: 'h1' | 'h2' | 'h3',
    children: ReactNode,
}