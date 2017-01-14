import React, { Component } from 'react';
import { Icon } from 'antd';
import FormatUtil from 'base/util/FormatUtil';
import ExclusiveResource from '../components/ExclusiveResource';
import ExclusiveResourceService from 'base/service/exclusiveResourceService';

export default class ExclusiveResourceContainer extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        exclusiveResourceData:[]
    }

    handlePackageDownload(){
      FormatUtil.openNewTab("http://www.baidu.com")
    }

    handleExclusiveResourceItem(){
      FormatUtil.openNewTab("http://www.baidu.com")
    }

    componentDidMount()
    {
      ExclusiveResourceService.getList().then((data) => {
        console.log(data);
        (data && data.length) && (this.setState({ exclusiveResourceData:data}));
      }).catch((err) => {
        console.log(err);
      });
    }

    render()
    {
      const {exclusiveResourceData} = this.state;
      return (
        <div className="cp-course-exclusiveResource">
          <div onClick={() => this.handlePackageDownload()} className="packageDownload">
            <span ><Icon type="download"></Icon> 资料打包下载</span>
          </div>
          <div>
            {exclusiveResourceData.map((item,index) => (
              <div key={item.id}><ExclusiveResource exclusiveResourceData={item} exclusiveResourceItemClick={this.handleExclusiveResourceItem} />
              </div>
            ))

            }
          </div>
        </div>
      )
    }
}
