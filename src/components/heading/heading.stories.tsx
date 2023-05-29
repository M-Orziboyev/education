import Heading from "./heading";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    name: 'Heading',
    component: Heading
}as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = args => <Heading {...args}/>

export const H1 = Template.bind({})
H1.args = {
    children: 'Heading',
    tag: 'h1',
}
export const H2 = Template.bind({})
H2.args = {
    children: 'Heading',
    tag: 'h2',
}
export const H3 = Template.bind({})
H3.args = {
    children: 'Heading',
    tag: 'h3',
}