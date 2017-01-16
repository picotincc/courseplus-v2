import React, { Component } from 'react';

import FormatUtil from 'base/util/FormatUtil';
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
        this.handleSearchClick = this.handleSearchClick.bind(this);
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

    componentWillReceiveProps(nextProps)
    {
        if (nextProps.schoolId)
        {
            const schoolId = parseInt(nextProps.schoolId);
            const selectedSchool = this.state.schools.find(school => school.id === schoolId);
            SchoolService.getMajors(schoolId).then(res => {
                const majors = _formatMajors(res);
                let selectedMajor = null;
                if (nextProps.majorId)
                {
                    const majorId = parseInt(nextProps.majorId);
                    selectedMajor = res.find(item => item.id === majorId);
                    selectedMajor.name = selectedMajor.code + selectedMajor.name;
                }
                this.setState({
                    selectedSchool,
                    majors,
                    selectedMajor
                });
            }).catch(err => {
                console.log(err);
            })
        }
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

    handleSearchClick()
    {
        const school = this.state.selectedSchool;
        const major = this.state.selectedMajor;
        const isInSearchPage = location.href.includes("search");
        let path = "/search";
        if (school)
        {
            path = path + "/" + school.id;
            if (major)
            {
                path = path + "/" + major.id;
            }
        }
        if (isInSearchPage)
        {
            this.props.onSearch(school, major, path);
        }
        else
        {
            FormatUtil.openNewTab(path);
        }
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
                        selectedSchool={this.state.selectedSchool}
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
                    <div className="btn" onClick={this.handleSearchClick}>
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
