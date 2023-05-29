import {AdvantagesProps} from "@/src/components/advantages/advantages.props";
import styles from "./advantages.module.css"
import {Devider} from "@/src/components";
import CheckIcon from "./check.svg"
const Advantages = ({advantages}:AdvantagesProps):JSX.Element => {
    return <>
        {advantages.map(c => (
            <div key={c.id} className={styles.advantages}>
                <CheckIcon />
                <div className={styles.title}>{c.title}</div>
                <Devider className={styles.vLine} />
                <div className={styles.description}>{c.description}</div>
            </div>
            ))}
    </>
}
export default Advantages
