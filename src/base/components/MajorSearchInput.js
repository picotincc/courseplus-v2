import React, { Component } from 'react';

export default class MajorSearchInput extends Component {

    constructor (props) {
        super(props);

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    static defaultProps = {
        majors: []
    }

    static propTypes = {

    }

    state = {
        filterMajors: [],
        inputValue: ""
    }

    componentDidMount()
    {
        this.majorSearch = this.refs["major-search"];
        this.icon = this.refs["icon"];
        this.suggestion = this.refs["suggestion"];
    }

    componentWillReceiveProps(nextProps)
    {
        if (nextProps.selectedSchool === null)
        {
            this.setState({
                inputValue: "",
                filterMajors: []
            });
        }
        else
        {
            if (nextProps.majors.length > 0)
            {
                const inputValue = nextProps.selectedMajor ? nextProps.selectedMajor.name : "";
                this.setState({
                    inputValue,
                    filterMajors: nextProps.majors
                });
            }
        }
    }

    handleInputFocus()
    {
        if (!this.props.selectedSchool)
        {
            this.props.addWarning();
        }
        else
        {
            this._addDropdown();            
        }
    }

    handleInputBlur()
    {
        const input = this.state.inputValue;
        this.props.onMajorSelect(input);
        this._removeDropdown();
    }

    handleInputChange()
    {
        const value = this.majorInput.value;
        const majors = this.props.majors;
        const filterMajors = _filterMajors(value.trim(), majors.slice(0));
        this.setState({
            inputValue: value,
            filterMajors
        });
    }

    handleSelect(mname)
    {
        this.setState({
            inputValue: mname
        });
    }

    handleIconClick(e)
    {
        const isDropdown = this.icon.classList.contains("dropdown");
        if (isDropdown)
        {
            this.majorInput.blur();
        }
        else
        {
            this.majorInput.focus();
        }
        e.preventDefault();
    }

    _addDropdown()
    {
        this.majorSearch.classList.add("focus");
        this.icon.classList.add("dropdown");
        this.suggestion.classList.add("show");
    }

    _removeDropdown()
    {
        this.majorSearch.classList.remove("focus");
        this.icon.classList.remove("dropdown");
        this.suggestion.classList.remove("show");
    }

    render()
    {
        const majors = this.state.filterMajors;
        const selectedMajor = this.state.inputValue;

        return (
            <div ref="major-search" className="cp-major-search">
                <input ref={(input) => { this.majorInput = input; }} type="text" placeholder="请选择专业"
                    value={selectedMajor}
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur}
                    onChange={this.handleInputChange}
                />
                <span ref="icon" className="icon iconfont icon-dropdown" onMouseDown={this.handleIconClick}></span>
                <div ref="suggestion" className="suggestion">
                    <i className="triangle"></i>
                    <ul className="major-list">
                        {majors.map(item => {
                            return (
                                <li key={item.id}>
                                    <div className="category">
                                        {item.name}
                                    </div>
                                    <div className="major-box">
                                        {item.list.map(major => {
                                            return (
                                                <div key={major.id} onMouseDown={() => this.handleSelect(major.name)} className="major">
                                                    <span className="name">{major.name}</span>
                                                    <span className="icon iconfont icon-split"></span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

function _filterMajors(keyword, majors)
{
    let result = [];
    if (keyword === "")
    {
        result = majors;
    }
    else
    {
        majors.forEach(category => {
            let matchList = category.list.filter(m => m.name.includes(keyword));
            if (matchList && matchList.length > 0)
            {
                let newItem = {
                    id: category.id,
                    name: category.name,
                    list: matchList
                }
                result.push(newItem);
            }
        });
    }
    return result;
}
