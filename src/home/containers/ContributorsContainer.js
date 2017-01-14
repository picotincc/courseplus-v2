import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import ContributorsItem from '../components/ContributorsItem';
import ContributorsService from 'base/service/ContributorsService';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormatUtil from 'base/util/FormatUtil';

class ContributorsContainer extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        contributorsData:[]
    }

    contributorsItemClick(id){
      FormatUtil.openNewTab(id);
    }

    componentDidMount()
    {
        ContributorsService.getList().then((data) => {
          console.log(data);
          (data && data.length) && (this.setState({ contributorsData: data}));
        }).catch((err) => {
          console.log(err);
        });
    }

    render(){
      const {contributorsData} = this.state;
      var groupedContributors = []
      while (contributorsData.length > 0) {
        groupedContributors.push(contributorsData.splice(0,Math.min(4,contributorsData.length)))
      }
      let settings = {
          autoplay: false,
          dots: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
      };
      return (groupedContributors.length) ?
             (
              <div className="cp-home-contributors">
                <div className="title">大神入驻</div>
                <Slider {...settings}>
                    {groupedContributors.map((items, index) => (
                        <div key={items[0].id}><ContributorsItem contributorsData={items} contributorsItemClick={this.contributorsItemClick}/></div>
                    ))}
                </Slider>
              </div>
            ):
            (
              <div className="cp-home-contributors">
                  <div className="title">大神入驻</div>
                  <Icon type="loading" />
              </div>
            )
    }
}

function mapStateToProps(state) {
  return {
  };
}

//包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(ContributorsContainer);
