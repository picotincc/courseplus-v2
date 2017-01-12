import React, {Component} from 'react'
import { Icon } from 'antd';
import imgSrc from "./style.jpg";

class ContributorsItem extends Component {
    constructor (props) {
        super(props)

    }

    render () {
        let { item } = this.props;

        const daLists = [1,2,3,4];
        return (
          // <a href={item.link_url} ><img src={item.img_url} className="slider-image" /></a>

          <div className="cp-home-dashen">
            <p className="title">大神入驻</p>
            <div>
                  {daLists.map(item => {
                   return (
                     <div className="item" key={item}>
                       <p><img className="item-img" src={imgSrc}/></p>
                       <p className="item-name">李刚生</p>
                       <p className="item-title">南京大学企业管理专业一专业课18</p>
                       <p className="item-detail">曾任教多家考研机构VIP一对一辅导</p>
                       <p className="item-detail">熟悉研究多年专业考研真题，结合自身考研实战经验，对管理学框架进行更适应考试的搭建及运用</p>
                     </div>
                         )})}
             </div>
       </div>

        )
    }
}

export default ContributorsItem
