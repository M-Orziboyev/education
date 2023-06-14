import {FooterProps} from "@/src/layout/footer/footer.props";
import styles from './footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns';

const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return <footer className={cn(className, styles.footer)} {...props}>
        <div>Education &#169; {format(new Date(), 'yyyy')}. All right reserved</div>
        <a href="https://rechargemojo.com/terms-conditions">Term of use</a>
        <a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a>
    </footer>
}
export default Footer