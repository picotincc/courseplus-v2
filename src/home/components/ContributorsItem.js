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

    handleMouseUp(id,e){
      if(Math.abs(e.clientX - this.mouseDownX) < 5) {
          this.props.contributorsItemClick && this.props.contributorsItemClick(id, e);
      }
      this.mouseDownX = null;
    }

    render () {
        let { contributors } = this.props;
        return (
          <div className="cp-home-contributorsItem">
              {contributors.map((item) => {
                return (
                     <div className="item" key={item.id}
                       onMouseDown={this.handleMouseDown.bind(this)}
                       onMouseUp={this.handleMouseUp.bind(this, item.id)}>
                       <img className="item-img" src={item.img_url}/>
                       <p className="item-name">{item.name}</p>
                       <p className="item-account">{item.account}</p>
                       <p className="item-introduction">{item.introduction}</p>
                       <p className="item-description">{item.description}</p>
                     </div>
                      )
                  })
                }
        </div>
        )
    }
}

export default ContributorsItem
