import React, {Component} from 'react'
import { Icon } from 'antd';

class CarouselItem extends Component {
    constructor (props) {
        super(props)

    }

    mouseDownX = null;

    handleMouseDown(e) {
        this.mouseDownX = e.clientX;
    }

    handleMouseUp(linkUrl, e) {
        if(Math.abs(e.clientX - this.mouseDownX) < 5) {
            this.props.handleClick && this.props.handleClick(linkUrl, e);
        }
        this.mouseDownX = null;
    }

    render () {
        let { item } = this.props;
        return (
            <img src={item.img_url} className="slider-image"
              onMouseDown={this.handleMouseDown.bind(this)}
              onMouseUp={this.handleMouseUp.bind(this, item.link_url)}
            />
        )
    }
}

export default CarouselItem