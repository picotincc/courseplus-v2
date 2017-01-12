import React, {Component} from 'react'
import { Icon } from 'antd';

class ScholarItem extends Component {
    constructor (props) {
        super(props)

    }

    render () {
        let { item } = this.props;
        return (
          <div className="item" key={item}>
            <p><img className="item-img" src={imgSrc}/></p>
            <p className="item-name">李刚生</p>
            <p className="item-title">南京大学企业管理专业一专业课18</p>
            <p className="item-detail">曾任教多家考研机构VIP一对一辅导</p>
            <p className="item-detail">熟悉研究多年专业考研真题，结合自身考研实战经验，对管理学框架进行更适应考试的搭建及运用</p>
          </div>
        )
    }
}

export default CarouselItem
