import {Button, Card, Input, Rating, Tag, Text, TextArea} from "@/src/components";
import {useEffect, useState} from "react";
import {withLayout} from "@/src/layout/layout";
import {GetServerSideProps} from "next";
import axios from 'axios'

const Index = () => {
    const [isClick, setIsClick] = useState(false);
    const [rating, setRating] = useState<Number>(4)
        return (
            <>
                <Text size='l'>Text</Text>
                <Tag size={"m"} color={'red'}>$200</Tag>
                <Tag size="m" color="green">$900</Tag>
                <Button appearance='primary'>Primary</Button>
                <Button appearance='ghost'>Ghost</Button>
                <Button appearance='ghost' arrow={isClick ? 'down' : 'right'} onClick={() => setIsClick(prev => !prev)}>
                    Arrow
                </Button>
                <Button appearance='primary' arrow='down'>
                    Down
                </Button>
                <br/>


                <Input placeholder='Enter'/>
                <div>
                    <TextArea placeholder="Message"/>
                </div>
                <br/>

                <Rating rating={rating}
                        isEditable={true}
                        setRating={setRating}/>
                <Card color={'primary'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi
                    deleniti
                    error est facere id maiores nemo nesciunt nihil, optio porro possimus provident ratione recusandae,
                    repellendus sint sunt ullam voluptatibus.</Card>
                <Card color={'white'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi deleniti
                    error est facere id maiores nemo nesciunt nihil, optio porro possimus provident ratione recusandae,
                    repellendus sint sunt ullam voluptatibus.</Card>
            </>
        )
    }
    export default withLayout(Index)

    export const getServerSideProps: GetServerSideProps = async () => {
        const {data} = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, {firstCategory: 0})
        return {
            props: {
                data
            }
        }
    }