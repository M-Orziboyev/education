import { ButtonProps } from './button.props';
import styles from './button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

// @ts-ignore
const Button = ({ appearance, arrow = 'none', size, className, children, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
    // @ts-ignore
                [styles.success]: appearance === 'success',
    // @ts-ignore
                [styles.failure]: appearance === 'failure',
                [styles.s]: size === 'small',
                [styles.m]: size === 'medium',
                [styles.l]: size === 'large',
            })}
            {...props}
        >
            {children}

            {arrow !== 'none' && (
                <span
                    className={cn(styles.arrow, {
                        [styles.down]: arrow === 'down',
                    })}
                >
					<ArrowIcon />
				</span>
            )}
        </button>
    );
};

export default Button;