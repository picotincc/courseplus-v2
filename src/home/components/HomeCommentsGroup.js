import React, {Component} from 'react'

export default class HomeCommentsGroup extends Component {
    render () {
        let {comments, listItemClick, tagClick} = this.props;
        return (
            <div className="comment-list">
                {comments.map((item,index) => {
                return (
                    <HomeComment key={item.id} comment={item} listItemClick={listItemClick} tagClick={tagClick}/>
                );
                })}
            </div>
        )
    }
}



class HomeComment extends Component {
    render () {
        let { comment ,listItemClick } = this.props;
        let course = comment.course;
        let teacher = course.teacher;
        let major = course.major
        let tag = major.school.name + "  " + course.code + course.name;
        let majorName = major.code + major.name;
        return (
                <div className="home-comment" onClick = {() => listItemClick()}>
                    <div className="top-part">
                        <div className="userInfo">
                            <img src={teacher.img_url} />
                            <div className="teacherName">
                            {teacher.name}
                            </div>
                        </div>
                        <div className="courseInfo">
                            <div className="title"> {majorName} </div>
                                <span className="tag">  {tag}</span>
                        </div>
                    </div>
                    <div className="divider"> </div>
                    <div className="bottom-part">

                        <div className="content"> {comment.content} </div>
                        <div className="owner">——{comment.user_name}</div>
                    </div>
                </div>
        )     
    }
}

