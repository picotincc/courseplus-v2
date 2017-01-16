import React, {Component} from 'react';
import { Icon } from 'antd';

import 'dragscroll/dragscroll.js';
import DateUtil from 'base/util/DateUtil';

class PeriodLine extends Component {
    static ITEM_WIDTH = 132;
    static LOCATOR_TOPS = [10, 12, 16];

    constructor (props) {
        super(props)

    }

    _locatorIndex = 0; // 当前日期定位器的索引位置
    _scrolled = false; // 是否已经进行过自动滚动

    state = {
        currentIndex: 0 // 当前选中的period的索引，因为需要计算locator的top所以使用index而不用id
    }

    componentDidMount () {
    }

    componentWillUnmount () {

    }

    componentDidUpdate() {
        let { PeriodLineElem } = this.refs;

        if(!this._scrolled && PeriodLineElem) {
            console.log(123)
            let scrollLeft = this._locatorIndex * PeriodLine.ITEM_WIDTH - PeriodLineElem.offsetWidth/2;
            (scrollLeft < 0) && (scrollLeft = 0);
            PeriodLineElem.scrollLeft = scrollLeft;
            this._scrolled = true;
        }
    }

    handleClick(period, index) {
        let { currentIndex } = this.state;
        if(currentIndex === index) return;
        // 触发上级选择事件
        this.props.handleSelectPeriod(period);
        // 更新state
        this.setState({
            currentIndex: index
        })
    }

    render () {
        let { currentIndex } = this.state;
        let { periods } = this.props;

        let now = DateUtil.smoothDate(Date.now(), 'yyyy-MM-dd').getTime(); // 平滑后的当前时间
        periods.forEach((item, i) => {
            if(i === 0) return; // 课程导览跳过
            let date = new Date(item.date || undefined);
            date = DateUtil.smoothDate(date, 'yyyy-MM-dd').getTime();
            if(now == date) this._locatorIndex = i;
            else if(now > date) this._locatorIndex = i + 0.5;
            else return;
        });
        (this._locatorIndex > periods.length-1) && (this._locatorIndex = Math.ceil(this._locatorIndex));

        let locatorLeft = this._locatorIndex * PeriodLine.ITEM_WIDTH; // 定位器left值
        let locatorTop = PeriodLine.LOCATOR_TOPS[2];            // 定位器top值
        let axisWidth = periods.length * PeriodLine.ITEM_WIDTH; // 轴宽度
        
        // 计算定位器top
        if(currentIndex === this._locatorIndex) {
            locatorTop = PeriodLine.LOCATOR_TOPS[0];
        } else if(this._locatorIndex === parseInt(this._locatorIndex)) {
            locatorTop = PeriodLine.LOCATOR_TOPS[1];
        }

        

        return (
            <div className="period-line dragscroll" ref={"PeriodLineElem"}>
                <div className="locator" style={{left: locatorLeft, top: locatorTop}}><p>{DateUtil.formatDate(Date.now(), 'MM-dd')}</p><Icon type="environment" /></div>
                <div className="period-axis" style={{width: axisWidth}}></div>
                {
                    periods.map((period, index) => (
                        <div className={(index === currentIndex) ? "period-item active" : "period-item"} key={period.id} onClick={this.handleClick.bind(this, period, index)}>
                            <div className="period-dot"></div>
                            <div className="period-info">{(period.date) && <p>{DateUtil.formatDate(period.date, 'MM-dd')}</p>}{period.name}</div>
                        </div>
                    ))
                }
                <div className="period-item disabled">
                    <div className="period-dot"></div>
                    <div className="period-info"><p>...</p>未完待续</div>
                </div>
            </div>
        )
    }
}

export default PeriodLine