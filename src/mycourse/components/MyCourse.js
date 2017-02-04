import React, { Component } from 'react';
import FormatUtil from '../../base/util/FormatUtil';
import Tag from "../../base/components/Tag";

export default class MyCourse extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount()
    {

    }

    render()
    {
        const { data, listItemClick, tagClick } = this.props;
        const tagData = {
            schoolId: data.major.school.id,
            schoolName: data.major.school.name,
            majorId: data.major.id,
            majorName: data.major.code + data.major.name
        }
        const chineseNum = FormatUtil.NumberToChinese(5);
        const nodeContent = "考试答题技巧、出题规律总结、计算题复习策略";
        const date = "11.5";
        const time = "20:00";

        return(
            <li key={data.id}>
                <div className="course-item" onClick = {() => listItemClick(data.id)}>
                    <div className="course-info" style={{
                        "background":"url("+ data.subject.img_url +") no-repeat",
                        "backgroundSize": "255px"
                    }}>
                        <div className="title">{data.subject.code+data.subject.name}</div>
                        <div className="tag-wrapper">
                            <Tag tagData={tagData} tagClick={tagClick}/>
                        </div>
                    </div>
                    <div className="node-info">
                        <div className="introduction">
                            <p>课时{chineseNum}：</p>
                            <p>{nodeContent}</p>
                            <p className="start-time" style={{display:data.id%2 ? "none" : "block"}}>
                                {date}&nbsp;{time}直播
                            </p>
                        </div>
                    </div>
                </div>
                <div className="score-button" style={{visibility:data.id%2 ? "visible" : "hidden"}}>去评分</div>
            </li>
        )
    }
}
