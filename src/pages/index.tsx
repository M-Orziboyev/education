import {Button, Heading, Input, Tag, Text} from "@/src/components";
import {useState} from "react";

const Index = () => {
    const [isClick, setIsClick] = useState(false);
  return (
      <div>
        <Heading tag='h3'>Heading</Heading>
        <Text size='l'>Text</Text>
        <Tag size={"m"} color={'red'}>$200</Tag>
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
      </div>
  )
}
export default Index