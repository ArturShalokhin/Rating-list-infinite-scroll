import React from 'react';

import TabsConnector from '../connectors/TabsConnector';
import Tab from './Tab';
import { TABS } from '../constants';

const Tabs = (props) => (
  <div className='rating__tabs'>
    { TABS.map((tab, index) => <Tab { ...tab } currentTab={props.currentTab} changeTab={props.changeTab} key={index} />) }
  </div>
)

export default TabsConnector(Tabs)
