import React, { Component } from 'react';
import { Affix, Tabs } from "antd";

import CoursesContainer from '../containers/CoursesContainer';
import ResourcesContainer from '../containers/ResourcesContainer';

export default class TopTabs extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount(){

    }

    render(){
        const TabPane = Tabs.TabPane;

        return(
            <Tabs defaultActiveKey="1">
                <TabPane tab="我的课时" key="1">
                    <CoursesContainer />
                </TabPane>
                <TabPane tab="我的资料" key="2">
                    <ResourcesContainer />
                </TabPane>
            </Tabs>
        )
    }
}
