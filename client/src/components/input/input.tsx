import {InputProps} from "@/src/components/input/input.props";
import styles from './input.module.css'
import cn from "classnames";
import {ForwardedRef, forwardRef} from "react";

const Input = forwardRef( ({className, ...props}:InputProps, ref: ForwardedRef<HTMLInputElement>):JSX.Element => {
    return <input className={cn(styles.input, className)} {...props} ref={ref}/>
})

export default Input