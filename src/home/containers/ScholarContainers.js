import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import ScholarItem from '../components/ScholarItem';
import ScholarService from '../../base/service/ScholarService';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselService from '../../base/service/CarouselService';

export default class ScholarContainers extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        items:[]
    }

    componentDidMount()
    {
        // ScholarService.getList().then((data) => {
        //   console.log(data);
        //   (data && data.length) && (this.setState({ item: data}));
        // }).catch((err) => {
        //   console.log(err);
        // });

        CarouselService.getList().then((data) => {
            console.log(data);
            (data && data.length) && (this.setState({ items: data }));
        }).catch((err) => {
            console.log(err);
        });
    }

    render()
    {
      var settings = {
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
      };
      return (
        <div className="carousel">
          {
            (!this.state.items.length) ? (
                <Icon type="loading" />
            ) : (
                <Slider {...settings}>
                    {this.state.items.map((item) => (
                        <div key={item.id}><CarouselItem item={item}/></div>
                    ))}
                </Slider>
            )
          }
        </div>
      )

    }
}

function mapStateToProps(state) {
  return {
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(ScholarContainers);
