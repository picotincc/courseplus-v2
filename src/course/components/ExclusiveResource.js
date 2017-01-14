import React, { Component } from 'react';

export default class ExclusiveResource extends Component {

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
      let { exclusiveResourceItemClick , exclusiveResourceData } = this.props;
      let img_url = exclusiveResourceData.img_url;
      let name = exclusiveResourceData.name;
      let buy = exclusiveResourceData.buy;
      let pay = exclusiveResourceData.pay;

      return (
        <div className="cp-course-exclusiveResourceItem">
          <img className="img" onClick={() => {this.props.exclusiveResourceItemClick()}} src={img_url}/>
          <div className="exclusiveResourceItem-footer">
            <p className="name">{name}</p>
            {
              (pay) ? (
                <p className="pay">￥{pay}<span className="buy">{buy}人最近购买</span></p>
              ) :
              (
                <p className="free">米盒限时赠送</p>
              )
            }



          </div>
      </div>

      )
    }
}
