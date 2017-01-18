import React, { Component } from 'react';
import { Affix, Icon } from 'antd';
import Modal from 'base/components/Modal';
import BuyoutDialog from './BuyoutDialog';
export default class Sidebar extends Component {

    constructor (props) {
        super(props);
        this.onBuyoutClick = this.onBuyoutClick.bind(this)
        this.cancelBuyoutModal = this.cancelBuyoutModal.bind(this)
        this.buyout = this.buyout.bind(this)
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount(){

    }

    onBuyoutClick(){
        this.refs.buyoutModal.showModal();
    }

    cancelBuyoutModal(){
        this.refs.buyoutModal.hideModal();

    }

    buyout(){
        console.log("点击买断了")
    }

    render(){
        const { curClass, course } = this.props;
        return(
            (course.length == 0) ? (
                <Icon type="loading" />
            ) : (
                <div className={"cp-course-sidebar " + curClass}>
                    <img src={course.teacher.img_url} />
                    <div className="name">{course.teacher.name}</div>
                    <div className="desc">{course.teacher.education}</div>
                    <div className="honour">{course.teacher.introduction}</div>
                    <div className="label">{course.teacher.description}</div>
                    <div className="question-btn">向他提问</div>
                    <div className="buy-btn" onClick={this.onBuyoutClick}>
                        <div className="text">买断课程</div>
                        <div className="price">
                            <span className="origin">¥{course.origin_price}</span>&nbsp;<span className="current">¥{course.currentPrice}</span>
                        </div>
                    </div>

                    <Modal width="720px" ref="buyoutModal"  >
                        <BuyoutDialog course={course} cancelClickHandler={this.cancelBuyoutModal} okClickHandler={this.buyout}/>
                    </Modal>
                </div>
            )
        )
    }
}
