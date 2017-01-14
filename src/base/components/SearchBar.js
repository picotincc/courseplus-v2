import React, { Component } from 'react';

import SchoolService from 'base/service/SchoolService';

import SchoolSearchInput from './SchoolSearchInput';
import MajorSearchInput from './MajorSearchInput';

export default class SearchBar extends Component {

    constructor (props) {
        super(props);

        this.handleSchoolSelect = this.handleSchoolSelect.bind(this);
        this.removeWarning = this.removeWarning.bind(this);
        this.addWarning = this.addWarning.bind(this);
        this.handleMajorSelect = this.handleMajorSelect.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        schools: [],
        selectedSchool: null,
        warning: false,
        majors: [],
        selectedMajor: null
    }

    componentDidMount()
    {
        SchoolService.getSchools().then(res => {
            this.setState({
                schools: res
            });
        }).catch(err => {
            console.log(err);
        });
    }

    handleSchoolSelect(sname)
    {
        const selectedSchool = this.state.selectedSchool;
        if (sname === "")
        {
            this.setState({
                selectedSchool: null,
                majors: []
            });
        }
        else
        {
            const school = this.state.schools.find(item =>　item.name === sname);
            if (school)
            {
                if (selectedSchool === null || selectedSchool.id !== school.id)
                {
                    //请求相应学校的所有专业，转换数据结构
                    SchoolService.getMajors(school.id).then(res => {
                        const majors = _formatMajors(res);
                        this.setState({
                            selectedSchool: school,
                            majors: majors
                        });
                    }).catch(err => {
                        console.log(err);
                    })


                }
            }
            else
            {
                this.setState({
                    warning: true,
                    selectedSchool: null,
                    majors: []
                });
            }
        }
    }

    handleMajorSelect(mname)
    {
        let selectedMajor = null;
        this.state.majors.every(category => {
            let res = category.list.find(item => item.name === mname);
            if (res)
            {
                selectedMajor = res;
                return false;
            }
            return true;
        });
        this.setState({
            selectedMajor
        });
    }

    addWarning()
    {
        this.setState({
            warning: true
        });
    }

    removeWarning()
    {
        this.setState({
            warning: false
        });
    }

    render()
    {
        const warning = this.state.warning ? "warning" : "";

        return (
            <div className="cp-search-bar">
                <div className="title">
                    <span>考研目标</span>
                </div>
                <div className={"school " + warning}>
                    <SchoolSearchInput
                        schools={this.state.schools}
                        onSchoolSelect={this.handleSchoolSelect}
                        removeWarning={this.removeWarning}
                    />
                </div>
                <div className="major">
                    <MajorSearchInput
                        majors={this.state.majors}
                        selectedSchool={this.state.selectedSchool}
                        addWarning={this.addWarning}
                        onMajorSelect={this.handleMajorSelect}
                        selectedMajor={this.state.selectedMajor}
                    />
                </div>
                <div className="search-btn">
                    <div className="btn">
                        <span>搜索</span>
                    </div>
                </div>
            </div>
        );
    }
}

function _formatMajors(majors)
{
    let categories = [];
    majors.forEach(major => {
        let curCategory = categories.find(category => category.id === major.category.id);
        if (!curCategory)
        {
            let newCategory = major.category;
            newCategory.name = major.category.code + major.category.name;
            newCategory.list = [];
            categories.push(newCategory);
        }
    });
    categories.map(category => {
        const cid = category.id;
        majors.forEach(major => {
            if (major.category.id === cid)
            {
                let newMajor = {
                    id: major.id,
                    code: major.code,
                    name: major.code + major.name
                };
                category.list.push(newMajor);
            }
        });
    });
    return categories;
}
