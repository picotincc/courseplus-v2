import React, {Component} from 'react'
import { Icon } from 'antd';

class ContributorsItem extends Component {
    constructor (props) {
        super(props)

    }

    mouseDownX = null;

    handleMouseDown(e){
      this.mouseDownX = e.clientX;
    }

    handleMouseUp(linkUrl,e){
      if(Math.abs(e.clientX - this.mouseDownX) < 5) {
          this.props.handleClick && this.props.handleClick(linkUrl, e);
      }
      this.mouseDownX = null;
    }

    render () {
        let { item } = this.props;
        return (
          <div className="cp-home-dashen">
            <p className="title">大神入驻</p>
            <div>
                  {item.map(item => {
                   return (
                     <div className="item" key={item}
                       onMouseDown={this.handleMouseDown.bind(this)}
                       onMouseUp={this.handleMouseUp.bind(this, item.link_Url)}>
                       <p><img className="item-img" src={item.img_url}/></p>
                       {/* <p className="item-name">李刚生</p>
                       <p className="item-title">南京大学企业管理专业一专业课18</p>
                       <p className="item-detail">曾任教多家考研机构VIP一对一辅导</p>
                       <p className="item-detail">熟悉研究多年专业考研真题，结合自身考研实战经验，对管理学框架进行更适应考试的搭建及运用</p> */}
                     </div>
                      )})}
             </div>
       </div>

        )
    }
}

export default ContributorsItem
