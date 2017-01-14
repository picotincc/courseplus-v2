import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import CarouselItem from '../components/CarouselItem';
import CarouselService from 'base/service/CarouselService';
import FormatUtil from 'base/util/FormatUtil';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class CarouselContainer extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        items: []
    }

    componentDidMount() {
        // CarouselService.getList().then((data) => {
        //     console.log(data);
        //     (data && data.length) && (this.setState({ items: data }));
        // }).catch((err) => {
        //     console.log(err);
        // });
    }

    handleItemClick(linkUrl, e) {
        FormatUtil.openNewTab(linkUrl);
    }


    render() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true
        };
        return (
            <div className="carousel">
            {
                (!this.state.items.length) ? (
                    <Icon type="loading" />
                ) : (
                    <Slider {...settings}>
                        {this.state.items.map((item) => (
                            <div key={item.id}><CarouselItem item={item} handleClick={this.handleItemClick}/></div>
                        ))}
                    </Slider>
                )
            }
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(CarouselContainer);
