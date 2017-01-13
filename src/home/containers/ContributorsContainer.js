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
        contributors:[]
    }

    contributorsItemClick(id){
      FormatUtil.openNewTab(id);
    }

    componentDidMount()
    {
        ContributorsService.getList().then((data) => {
          console.log(data);
          (data && data.length) && (this.setState({ contributors: data}));
        }).catch((err) => {
          console.log(err);
        });
    }

    render(){
      const {contributors} = this.state;
      var groupedContributors = []
      while (contributors.length > 0) {
        groupedContributors.push(contributors.splice(0,Math.min(4,contributors.length)))
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
                        <div key={items[0].id}><ContributorsItem contributors={items} contributorsItemClick={this.contributorsItemClick}/></div>
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
