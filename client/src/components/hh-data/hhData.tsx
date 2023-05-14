import {HhData} from "@/src/interfaces/page.interface";
import styles from "./hhData.module.css"
import {Card} from "@/src/components";
import RateIcon from './rate.svg'

const HhData = ({count, seniorSalary, juniorSalary, middleSalary}: HhData): JSX.Element => {
    return <div className={styles.hh}>
        <Card>
            <div className={styles.count}>
                <div className={styles.title}>All Vacations</div>
                <div className={styles.countValue}>{count}</div>
            </div>
        </Card>
        <Card>
            <div className={styles.salary}>
                <div>
                    <div className={styles.title}>Junior</div>
                    <div className={styles.salaryValue}>Junior Salary</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon/>
                        <RateIcon/>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Middle</div>
                    <div className={styles.salaryValue}>Middle Salary</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon/>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Senior</div>
                    <div className={styles.salaryValue}>Senior Salary</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                        <RateIcon className={styles.filled}/>
                    </div>
                </div>
            </div>
        </Card>
    </div>
}
export default HhData