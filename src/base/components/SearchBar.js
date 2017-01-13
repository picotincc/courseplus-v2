import React, { Component } from 'react';

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
        const schools = [
            {
                id: 0,
                name: "南京大学",
                img_url: "http://p1.bqimg.com/573251/53b39b48c75d9ad3.png"
            },
            {
                id: 1,
                name: "北京大学",
                img_url: "http://p1.bqimg.com/573251/47417bcea92bf6b4.png"
            },
            {
                id: 2,
                name: "东南大学",
                img_url: "http://i1.piimg.com/573251/e488cc08cc340fa7.png"
            }
        ];
        this.setState({
            schools
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
                    const TestMajors = [
                        {
                            id: 0,
                            name: "02经济学",
                            list: [
                                {
                                    id: 0,
                                    name:　"020204金融学"
                                },
                                {
                                    id: 1,
                                    name:　"020205应用心理学"
                                },
                                {
                                    id: 2,
                                    name:　"020206高等教育学"
                                }
                            ]
                        },
                        {
                            id: 1,
                            name: "03心理学",
                            list: [
                                {
                                    id: 0,
                                    name:　"020204金融学"
                                },
                                {
                                    id: 1,
                                    name:　"020205应用心理学"
                                },
                                {
                                    id: 2,
                                    name:　"020206高等教育学"
                                }
                            ]
                        },
                        {
                            id: 3,
                            name: "08工学",
                            list: [
                                {
                                    id: 0,
                                    name:　"081501水文水资料"
                                },
                                {
                                    id: 1,
                                    name:　"020232环境科学"
                                },
                                {
                                    id: 2,
                                    name:　"020255环境工程（普通学）"
                                },
                                {
                                    id: 3,
                                    name:　"085100建筑学"
                                },
                                {
                                    id: 4,
                                    name:　"085229环境工程（专业工程硕士）"
                                },
                                {
                                    id: 5,
                                    name:　"085212软件工程"
                                }
                            ]
                        }
                    ];

                    this.setState({
                        selectedSchool: school,
                        majors: TestMajors
                    });
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
        const majors = this.state.majors.every(category => {
            let res = category.list.find(item => item.name === mname);
            if (res)
            {
                selectedMajor = res;
                return false;
            }
            return true;
        });
        console.log(selectedMajor);
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
