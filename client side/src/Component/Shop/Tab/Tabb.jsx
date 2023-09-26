import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import usemenu from '../../../Hooks/usemenu';
import Shopca from '../Shopca/Shopca';
import { useParams } from 'react-router-dom';

const Tabb = () => {
    const catagoris=["salad","pizza","soup","dessert","drinks"]
    const {catagory}=useParams()
    const intitalindex=catagoris.indexOf(catagory)
    const [tabIndex, setTabIndex] = useState(intitalindex);
    const [menu,loading]=usemenu()
    const drinks=menu.filter(menu=>menu.category === "drinks")
    const dessert=menu.filter(menu=>menu.category === "dessert")
    const pizza=menu.filter(menu=>menu.category === "pizza")
    const salad=menu.filter(menu=>menu.category === "salad")
    const soup=menu.filter(menu=>menu.category === "soup")
    return (
        <div className='my-[30px] max-w-7xl mx-auto'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center uppercase font-bold">
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soaups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <Shopca order={salad}></Shopca>
                </TabPanel>
                <TabPanel>
                <Shopca order={pizza}></Shopca>
                </TabPanel>
                <TabPanel>
                <Shopca order={soup}></Shopca>
                </TabPanel>
                <TabPanel>
                <Shopca order={dessert}></Shopca>
                </TabPanel>
                <TabPanel>
                <Shopca order={drinks}></Shopca>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Tabb;