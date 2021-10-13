import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from "./heading";

export default {
    title: 'Example/Heading',
    component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args}/>;

export const SiteTitle = Template.bind({});
SiteTitle.args = {
    headingtext: 'Covid situation in Hungary'
};