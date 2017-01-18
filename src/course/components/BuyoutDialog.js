import React, {Component} from 'react'
import { Timeline, Icon , Checkbox , Button} from 'antd';
import CourseService from 'base/service/CourseService';
import n2c from 'n2c'

class BuyoutDialog extends Component {
    componentDidMount() {
        CourseService.getShoppingList(1).then((data) => {
            (data) && (this.setState({ shopping_list: data }));
            console.log(data)
        }).catch((err) => {
            console.log(err);
        });
    }

    state = {
        shopping_list: {}
    }

    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    render () {
        const {course, cancelClickHandler, okClickHandler} = this.props;
        console.log(course)
        if (this.state.shopping_list.period_list ){
            const shopping_list = this.state.shopping_list;
            const period_list = shopping_list.period_list;
            const document_list =  shopping_list.document_list;
            const tag = course.major.school.name+" "+course.subject.code+course.subject.name;
            return (
                <div className="buyout-dialog">
                    <div className="title">
                    买断Ta的课程
                    </div>
                    <div className="course-name">
                    {course.name}({tag})
                    </div>
                    <div className="summary">
                        {period_list.length}个课时难点讲解＋{document_list.length}份独家资料＋{shopping_list.question_count}次免费提问
                    </div>
                    <Timeline className="timeline">
                        <Timeline.Item dot={<BuyoutDot sequence="1"/>}> 
                            <ShoppingList title={"课时"} data={period_list}/>
                        </Timeline.Item>
                        <Timeline.Item dot={<BuyoutDot sequence="2"/>}>
                            <ShoppingList title={"资料"} data={document_list}/>
                        </Timeline.Item>
                        <Timeline.Item dot={<BuyoutDot sequence="3"/>}>
                            <ShoppingList title={"提问机会"} count={shopping_list.question_count}/>
                        </Timeline.Item>
                    </Timeline>

                    <div className="total-price">
                    <span className="total-price-label">总计</span>
                    <span className="total-price-current">￥270</span>
                    <span className="total-price-origin">￥397</span>
                    </div>

                    <Checkbox className="check-box" onChange={this.onChange}>同意买断细则</Checkbox>

                    <div className="button-area">
                        <Button className="button" onClick = {cancelClickHandler}>取消支付</Button>
                        <Button type="primary" className="button" onClick = {okClickHandler}>确认支付</Button>
                    </div>
                </div>
            )
        } 
        return null;
    }
}


class ShoppingList extends Component {
    render() {
        const {title, data, count} = this.props;
      
       
         
        return (
            <div className="buyout-shopping-list">
                <div className="title">{title}</div>

                {
                    (title === "提问机会") ? 
                    (
                        <div className="question-count">
                            <Icon type="message" />
                            <span> x {count} </span>
                        </div>
                    ) : (
                        <div className="shopping-list">
                            {data.map((item,index) => {
                                var show_price = true;
                                var extra_value = ""
                                var prefix = ""
                                if (title === "课时") {
                                    prefix = "第"+n2c(item.number)+"课时 ";
                                    if (item.is_buy == 1) {
                                        show_price = false;
                                        extra_value = "已购买";
                                    }
                                }    
                                else if (title == "资料") {
                                    prefix = "资料"+n2c(index+1)+" ";
                                    show_price = false;
                                    extra_value = "(送)";
                                }
                                return (
                                    <div className="shopping-item" key={item.id}>
                                        {prefix}{item.name}
                                        {
                                            (show_price) ? (
                                                <span className="price">￥{item.price}</span>
                                            ) : (
                                                <span className="free">{extra_value}</span>
                                            )
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    )
        

                }

                
            </div>
        );
    }
}


class BuyoutDot extends Component {
    render() {
        const {sequence} = this.props;
        return (
            <div className="buyout-timeline-dot">
                <span>{sequence}</span>
            </div>
        );
    }
}




export default BuyoutDialog