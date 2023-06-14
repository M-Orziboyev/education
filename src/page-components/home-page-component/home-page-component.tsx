import styles from './home-page-component.module.css'
import Navbar from "@/src/layout/navbar/navbar";
import Heading from "../../components/heading/heading";
import {Text, Button, Card, ScrollUp} from "@/src/components";
import Image from "next/image";
import {company, timeLineList} from "@/src/helpers/constants";
import {Fragment} from "react";
import Footer from "@/src/layout/footer/footer";
import {Timeline, TimelineEvent} from 'react-event-timeline'
import Link from "next/link";

const HomePageComponent = (): JSX.Element => {
    return <div className={styles.home}>
        <Navbar/>
        <div className={styles.hero}>
            <div className={styles.heroTitle}>
                <Heading tag={'h1'}>
                    Learn New Skills with Salvation <span>Academy</span>
                </Heading>
                <Text size={'small'}>
                    The Salvation Academy focuses on student success and strive to be recognized as a national and
                    international leader within the higher education community in providing quality and affordable
                    education.
                </Text>
                <Link href={'https://www.youtube.com/@salvation_team'}><Button size={'large'} appearance={'success'} arrow={'right'}>Join for free</Button></Link>
            </div>
            <div className={styles.heroImage}>
                <Image src={'/hero.png'} alt={'hero-image'} height={500} width={600}/>
            </div>
        </div>
        <div className={styles.company}>
            <Heading tag={'h3'}>Trusted by the world's best</Heading>
            <hr/>
            <div className={styles.companyIcon}>
                {company.map((icon, idx) => <Fragment key={idx}>{icon}</Fragment>)}
            </div>
        </div>
        <div className={styles.timeline}>
            <Heading tag={'h3'}>What we can teach you?</Heading>
            <hr/>
            <div className={styles.timelineCard}>
                {/*@ts-ignore*/}
                <Timeline lineColor={'#ddddd'}>{timeLineList.map(({Icon, title, text}, idx) => (
                    <TimelineEvent key={idx} title={title} icon={<Icon/>}
                                   bubbleStyle={{borderColor: '#140342', backgroundColor: '#fff'}}
                                   contentStyle={{border: 'none', boxShadow: 'none', backgroundColor: 'transparent'}}
                                   titleStyle={{fontSize: '36px'}}>
                        <Card color={'white'} style={{padding: 20}}>
                            <Text size={'small'}>{text}</Text>
                        </Card>
                    </TimelineEvent>
                ))}</Timeline>
            </div>
            <div className={styles.mobileTimeLine}>
                {timeLineList.map((data, idx) => (
                    <Card color={'white'} className={styles.card} style={{padding: 20}} key={idx}>
                        <Heading tag={'h3'}>{data.title}</Heading>
                        {/*@ts-ignore*/}
                        <Text>{data.text}</Text>
                    </Card>
                ))}
            </div>
        </div>
        {/*// @ts-ignore*/}
        <ScrollUp/>
        <Footer/>
    </div>
}

export default HomePageComponent
