import Tag from "./tag";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    name: 'Tags',
    component: Tag
}as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} >Tag</Tag>

export const Primary = Template.bind({})
Primary.args = {
    color: 'primary'
}
export const Ghost = Template.bind({})
Ghost.args = {
    color: 'ghost'
}
export const Red = Template.bind({})
Red.args = {
    color: 'red'
}
export const Green = Template.bind({})
Green.args = {
    color: 'green'
}
