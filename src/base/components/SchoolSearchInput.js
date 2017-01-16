import React, { Component } from 'react';
import ReactDOM  from 'react-dom';


export default class SchoolSearchInput extends Component {

    constructor (props) {
        super(props);

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    static defaultProps = {
        schools: []
    }

    static propTypes = {

    }

    state = {
        filterSchools: [],
        selectedSchool: null
    }

    componentDidMount()
    {
        this.schoolSearch = this.refs["school-search"];
        this.icon = this.refs["icon"];
        this.suggestion = this.refs["suggestion"];
    }

    componentWillReceiveProps(nextProps)
    {
        if (nextProps.schools.length > 0)
        {
            this.setState({
                filterSchools: nextProps.schools
            });
        }
    }

    handleInputFocus()
    {
        this.props.removeWarning();
        this._addDropdown();
    }

    handleInputBlur()
    {
        const value = this.schoolInput.value;
        this.props.onSchoolSelect(value.trim());
        this._removeDropdown();
    }

    handleSelect(sname)
    {
        this.schoolInput.value = sname;
    }

    handleInputChange()
    {
        const value = this.schoolInput.value;
        const filterSchools = _filterSchools(value.trim(), this.props.schools);
        this.setState({
            filterSchools
        });
    }

    handleIconClick(e)
    {
        const isDropdown = this.icon.classList.contains("dropdown");
        if (isDropdown)
        {
            this.schoolInput.blur();
        }
        else
        {
            this.schoolInput.focus();
        }
        e.preventDefault();
    }

    _addDropdown()
    {
        this.schoolSearch.classList.add("focus");
        this.icon.classList.add("dropdown");
        this.suggestion.classList.add("show");
    }

    _removeDropdown()
    {
        this.schoolSearch.classList.remove("focus");
        this.icon.classList.remove("dropdown");
        this.suggestion.classList.remove("show");
    }

    render()
    {
        const schools = this.state.filterSchools;

        return (
            <div ref="school-search" className="cp-school-search">
                <input ref={(input) => { this.schoolInput = input; }} type="text" placeholder="请选择学校"
                       onFocus={this.handleInputFocus}
                       onBlur={this.handleInputBlur}
                       onChange={this.handleInputChange}
                />
                <span ref="icon" className="icon iconfont icon-dropdown" onMouseDown={this.handleIconClick}></span>
                <div ref="suggestion" className="suggestion">
                    <i className="triangle"></i>
                    <ul className="school-list">
                        {schools.map(item => {
                            return (
                                <li key={item.id} onMouseDown={(e) => this.handleSelect(item.name, e)}>
                                    <img src={item.img_url}/>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

function _filterSchools(keyword, schools)
{
    let result = [];
    if (keyword === "")
    {
        result = schools;
    }
    else
    {
        result = schools.filter(item => item.name.includes(keyword));
    }
    return result;
}
