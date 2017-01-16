import React, { Component } from 'react';
import { Affix, Tabs } from 'antd';
import PeriodLineContainer from '../containers/PeriodLineContainer';

export default class DetailContainer extends Component {

    constructor (props) {
        super(props);
        this.handleTabClick =this.handleTabClick.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount(){

    }

    handleTabClick(key){
        const tabContentList = document.getElementsByClassName('tab-content');
        for(let i=0;i<tabContentList.length;i++){
            if(i == key){
                tabContentList[i].style.display = "list-item";
            }else{
                tabContentList[i].style.display = "none";
            }
        }
    }

    render(){
        const TabPane = Tabs.TabPane;
        const courseId = this.props.courseId;
        return(
            <div className="cp-course-detail-container">
                <Affix>
                    <Tabs defaultActiveKey="0" onChange={this.handleTabClick}>
                        <TabPane tab="课程大纲" key="0"></TabPane>
                        <TabPane tab="独家资料" key="1"></TabPane>
                        <TabPane tab="提问" key="2"></TabPane>
                        <TabPane tab="评价" key="3"></TabPane>
                    </Tabs>
                </Affix>
                <ul>
                    <li className="tab-content"><PeriodLineContainer courseId={courseId}/></li>
                    <li className="tab-content" hidden>2</li>
                    <li className="tab-content" hidden>3</li>
                    <li className="tab-content" hidden>4</li>
                </ul>
            </div>
        )

    }
}
