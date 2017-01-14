import React, { Component } from 'react';

export default class SchoolSearchInput extends Component {

    constructor (props) {
        super(props);

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this._toggleDropdown = this._toggleDropdown.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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
        this.schoolInput = this.refs["school-input"];
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
        this._toggleDropdown();
    }

    handleInputBlur()
    {
        const value = this.schoolInput.value;
        this.props.onSchoolSelect(value.trim());
        this._toggleDropdown();
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

    _toggleDropdown()
    {
        this.schoolSearch.classList.toggle("focus");
        this.icon.classList.toggle("dropdown");
        this.suggestion.classList.toggle("show");
    }

    render()
    {
        const schools = this.state.filterSchools;

        return (
            <div ref="school-search" className="cp-school-search">
                <input ref="school-input" type="text" placeholder="请选择学校"
                       onFocus={this.handleInputFocus}
                       onBlur={this.handleInputBlur}
                       onChange={this.handleInputChange}
                />
                <span ref="icon" className="icon iconfont icon-dropdown"></span>
                <div ref="suggestion" className="suggestion">
                    <i className="triangle"></i>
                    <ul className="school-list">
                        {schools.map(item => {
                            return (
                                <li key={item.id} onMouseDown={() => this.handleSelect(item.name)}>
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
