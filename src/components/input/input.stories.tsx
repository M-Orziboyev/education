import Input from "./input";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    name: 'Button',
    component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args}/>
