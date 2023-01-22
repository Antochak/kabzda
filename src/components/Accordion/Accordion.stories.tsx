import React from "react";
import {useState} from "react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
};

export const unCollapsedList = () => <Accordion titleValue={"List"}
                                                toggle={action('clicked')}
                                                collapsed={false}
                                                items={['asdasd','asfsdf0','sdgha']}/>
export const collapsedList = () => <Accordion titleValue={"List"}
                                              toggle={action('clicked')}
                                              collapsed={true}
                                              items={['asdasd','asfsdf0','sdgha']}/>
export const ModeChanging = () => {
    let [collapsed, setCollapsed] = useState(false)

    return <Accordion titleValue={"List"}
                      toggle={()=>setCollapsed(!collapsed)}
                      collapsed={collapsed}
                      items={['asdasd','asfsdf0','sdgha']}/>
}
