import styles from './home-page-component.module.css'
import Navbar from "@/src/layout/navbar/navbar";
import Heading from "../../components/heading/heading";
import {Text, Button, Card} from "@/src/components";
import Image from "next/image";
import {company, timeLineList} from "@/src/helpers/constants";
import {Fragment} from "react";
import Footer from "@/src/layout/footer/footer";
import {Timeline, TimelineEvent} from 'react-event-timeline'

const HomePageComponent = () => {
    return <div className={styles.home}>
        <Navbar/>
        <div className={styles.hero}>
            <div className={styles.heroTitle}>
                <Heading tag={'h1'}>
                    Learn New Skills with Sammi <span>Academy</span>
                </Heading>
                <Text size={'medium'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores et expedita
                    inventore iusto mollitia placeat, quam repellendus! Maxime, numquam.
                </Text>
                <Button size={'medium'} appearance={'primary'} arrow={'right'}>Join for free</Button>
            </div>
            <div className={styles.heroImage}>
                <Image src={'/hero.png'} alt={'hero-image'} height={500} width={600}/>
            </div>
        </div>
        <div className={styles.company}>
            <Heading tag={'h3'}>Trusted by the world's best</Heading>
            <div className={styles.companyIcon}>
                {company.map((icon, idx) => <Fragment key={idx}>{icon}</Fragment>)}
            </div>
        </div>
        <div className={styles.timeline}>
            <Heading tag={'h3'}>What we can teach you?</Heading>
            {/*@ts-ignore*/}
            <Timeline lineColor={'#ddddd'}>{timeLineList.map(({Icon, title, text}, idx) => (
                <TimelineEvent key={idx}  title={title} icon={<Icon />} bubbleStyle={{borderColor: '#140342', backgroundColor: '#fff'}} contentStyle={{border: 'none', boxShadow: 'none', backgroundColor: 'transparent'}}>
                    <Card color={'white'} style={{padding:20}}>
                        <Text size={'medium'}>{text}</Text>
                    </Card>
                </TimelineEvent>
            ))}</Timeline>
        </div>
        <Footer />
    </div>
}

export default HomePageComponent