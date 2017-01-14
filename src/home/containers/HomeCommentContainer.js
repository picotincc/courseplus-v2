import React, { Component } from 'react';
import HomeCommentGroup from '../components/HomeCommentsGroup'
import FormatUtil from 'base/util/FormatUtil';
import HomeCommentService from 'base/service/HomeCommentService';
import Slider from 'react-slick';
import { Icon } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class HomeCommentContainer extends Component {

    constructor (props) {
        super(props);
    }

    componentDidMount() {
        HomeCommentService.getList().then((data) => {
            (data && data.length) && (this.setState({ comments: data }));
        }).catch((err) => {
            console.log(err);
        });
    }
    
    handleListItemClick(id){
        FormatUtil.openNewTab("/course");
    }

    handleTagClick(school, discipline){
        FormatUtil.openNewTab("/search");
    }

    state = {
        comments: []
    }

    render() {
        const {comments} = this.state;
        var groupedComments = []
        while (comments.length > 0) {
            groupedComments.push(comments.splice(0, Math.min(3,comments.length)));
        }
        let settings = {
            autoplay: false,
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true
        };
        return (groupedComments.length) ?
        (
            <div className="slider cp-home-comments">
            <HomeCommentTitle />
            <Slider {...settings}>
                {groupedComments.map((item) => (
                    <div key={item[0].id}>
                        <HomeCommentGroup comments={item} listItemClick={this.handleListItemClick} tagClick={this.handleTagClick} />
                    </div>                        
                ))}
            </Slider>
            </div>
        ):
        (
            <div className="cp-home-comments">
                <HomeCommentTitle />
                <Icon type="loading" />
            </div>
        )
    }
}

const HomeCommentTitle = () => {
    return (
        <div className="title">
                使用评价
        </div>
    );
};

