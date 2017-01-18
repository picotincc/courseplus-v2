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
      let { id , cover_path , name , buyer_num , price , origin_price } = exclusiveResourceData;

      return (
        <div className="cp-course-exclusiveResourceItem">
          <img className="cover-path" onClick={() => {this.props.exclusiveResourceItemClick(id)}} src={cover_path}/>
          <div className="exclusiveResourceItem-footer">
            <p className="name">{name}</p>
            {
              (price) ? (
                <p className="price">￥{price}<span className="buyer-num">{buyer_num}人最近购买</span></p>
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
