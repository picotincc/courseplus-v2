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
      let id = exclusiveResourceData.id;
      let cover_path = exclusiveResourceData.cover_path;
      let name = exclusiveResourceData.name;
      let buy_count = exclusiveResourceData.buy_count;
      let price = exclusiveResourceData.price;
      let origin_price = exclusiveResourceData.origin_price;

      return (
        <div className="cp-course-exclusiveResourceItem">
          <img className="cover_path" onClick={() => {this.props.exclusiveResourceItemClick(id)}} src={cover_path}/>
          <div className="exclusiveResourceItem-footer">
            <p className="name">{name}</p>
            {
              (price) ? (
                <p className="price">￥{price}<span className="buy_count">{buy_count}人最近购买</span></p>
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
