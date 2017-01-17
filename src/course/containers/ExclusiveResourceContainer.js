import React, { Component } from 'react';
import { Icon } from 'antd';
import FormatUtil from 'base/util/FormatUtil';
import ExclusiveResource from '../components/ExclusiveResource';
import ExclusiveResourcePrev from '../components/ExclusiveResourcePrev';
import ExclusiveResourceService from 'base/service/exclusiveResourceService';
import Modal from 'base/components/Modal';
import LoginDialog from 'base/components/LoginDialog';

export default class ExclusiveResourceContainer extends Component {

    constructor (props) {
        super(props);
        // this.handleExclusiveResourceItem = this.handleExclusiveResourceItem.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        exclusiveResourceData:[]
    }

    showModal(){
        this.refs.modal.showModal();
    }

// 资料打包下载
    handlePackageDownload(){
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
          <div  className="downloadTitle">
            <span onClick={() => this.handlePackageDownload()} className="packageDownload"><Icon type="download"></Icon> 资料打包下载</span>
          </div>
          <div>
            {exclusiveResourceData.map((item,index) => (
              <div key={item.id}><ExclusiveResource exclusiveResourceData={item} exclusiveResourceItemClick={this.showModal} />
              </div>
            ))

            }
          </div>

          <Modal width="973px" ref="modal" >
              <ExclusiveResourcePrev />
          </Modal>
        </div>
      )
    }
}
