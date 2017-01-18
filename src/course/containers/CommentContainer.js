import React, { Component } from 'react';
import { Pagination } from 'antd';
import Comment from '../components/Comment';

export default class CommentContainer extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount(){

    }

    render(){
        const commentList = [1,2];

        return(
            <div className="cp-course-comment-container">
                {commentList.map((index, item) => {
                    return(
                        <Comment key={index}/>
                    )
                })}
                <div className="comment-pagination">
                    <Pagination defaultCurrent={1} total={200} />
                </div>
                <div className="comment-part">
                    <textarea className="comment-input" placeholder="资料好用么~课时有用么~快来发表你的看法！"></textarea>
                    <div className="comment-btn">发布评论</div>
                </div>
            </div>
        )

    }
}
