import Text from './text'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    name: 'Text',
    component: Text
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => <Text {...args} >Text</Text>

export const Large = Template.bind({})
Large.args = {
    children: 'Text',
    size: 'large'
}

export const Medium = Template.bind({})
Medium.args = {
    children: 'Text',
    size: 'medium'
}

export const Small = Template.bind({})
Small.args = {
    children: 'Text',
    size: 'small'
}


