import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RechartDiv from "./rechart";

export default {
    title: 'Example/Charts',
    component: RechartDiv,
} as ComponentMeta<typeof RechartDiv>;

const Template: ComponentStory<typeof RechartDiv> = (args) => <RechartDiv {...args}/>;

export const Bar = Template.bind({});
export const Area = Template.bind({});
export const Line = Template.bind({});

const test_options = {
    api_items : {
        infected: 1000,
        activeInfected: 1500,
        deceased: 2000,
        recovered: 2500,
        quarantined: 3000,
        tested: 3500,
        lastUpdatedAtSource: "2021-09-14T08:52:00.000Z",
        fullwidth: true
    }
};

Bar.args = {
    chartoptions: test_options,
    charttype: 'bar'
};

Area.args = {
    chartoptions: test_options,
    charttype: 'area'
};

Line.args = {
    chartoptions: test_options,
    charttype: 'line'
};