import React, {Component} from 'react'
import { Icon } from 'antd';

class CarouselItem extends Component {
    constructor (props) {
        super(props)

    }

    render () {
        let { item } = this.props;
        return (
            <a href={item.link_url} ><img src={item.img_url} className="slider-image" /></a>
        )
    }
}

export default CarouselItem
