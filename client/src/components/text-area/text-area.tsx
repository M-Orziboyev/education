import styles from './text-area.module.css';
import cn from "classnames";
import { TextAreaProps } from './text-area.props';
import {ForwardedRef, forwardRef} from "react";

const TextArea = forwardRef(({ className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>):JSX.Element => {
    return <textarea className={cn(styles.textArea, className)} {...props} ref={ref}/>
})

export default TextArea