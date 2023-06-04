import Button from "./button";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {useState} from "react";

export default {
    name: 'Button',
    component: Button,
    argTypes:{
        appearance: {
            type:"string",
            description: 'Button color style',
            defaultValue: 'primary',
            options:["primary", 'ghost', 'success' ],
            control:{
                type: 'select'
            }
        },
        size: {
            type:"string",
            description: 'Button size',
            defaultValue: 'medium',
            options:["small", 'medium', 'large' ],
            control:{
                type: 'select'
            }
        },


    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    children: "Button",
    appearance: 'primary'
}
export const Ghost = Template.bind({})
Ghost.args = {
    children: "Button",
    appearance: 'ghost'
}
export const Failure = Template.bind({})
Failure.args = {
    children: "Button",
    appearance: 'failure'
}
export const Success = Template.bind({})
Success.args = {
    children: "Button",
    appearance: 'success'
}
export const Large = Template.bind({})
Large.args = {
    children: "Button",
    appearance: 'success',
    size: 'large'
}
export const Medium = Template.bind({})
Medium.args = {
    children: "Button",
    appearance: 'success',
    size: 'medium'
}
 export const Small = Template.bind({})
Small.args = {
    children: "Button",
    appearance: 'success',
    size: 'small'
}

export const Arrow: ComponentStory<typeof Button> = ({...args}) => {
    const [toggle, setToggle] = useState<boolean>(false)

    const toggleButton = () => setToggle(prev => !prev)

    return <Button arrow={toggle ? 'down' : 'right'} onClick={toggleButton} {...args} >Button</Button>
}
