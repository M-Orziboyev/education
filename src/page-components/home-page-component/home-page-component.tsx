import styles from './home-page-component.module.css'
import Navbar from "@/src/layout/navbar/navbar";
import Heading from "../../components/heading/heading";
import {Text, Button} from "@/src/components";
const HomePageComponent = () => {
    return <div className={styles.home}>
            <Navbar />
        <div className={styles.hero}>
            <div className={styles.heroTitle}>
                <Heading tag={'h1'}>
                    Learn New Skills with Sammi <span>Academy</span>
                </Heading>
                <Text size={'medium'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores et expedita inventore iusto mollitia placeat, quam repellendus! Maxime, numquam.
                </Text>
                <Button size={'medium'} appearance={'primary'} arrow={'right'}>Join for free</Button>
            </div>
        </div>
    </div>
}

export default HomePageComponent