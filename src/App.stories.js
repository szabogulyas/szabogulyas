import React from 'react';
import {Provider} from 'react-redux';
import store from './components/storeapi/storeapi'
import './index.css';

import App from "./App";

export default {
    title: 'Example/Overview',
    component: App,
};

const Template = () => <Provider store={store}><App/></Provider>;

export const Site = Template.bind({});

Site.args = {};