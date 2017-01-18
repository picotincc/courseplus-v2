import React, { Component } from 'react';
import { Icon } from 'antd';
import FormatUtil from 'base/util/FormatUtil';
import ExclusiveResource from '../components/ExclusiveResource';
import ExclusiveResourcePrev from '../components/ExclusiveResourcePrev';
import ExclusiveResourceService from 'base/service/ExclusiveResourceService';
import ExclusiveDocumentsService from 'base/service/ExclusiveDocumentsService';
import Modal from 'base/components/Modal';
import LoginDialog from 'base/components/LoginDialog';

export default class ExclusiveResourceContainer extends Component {

    constructor (props) {
        super(props);
        this.handlePackageDownload = this.handlePackageDownload.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        exclusiveResourceData:[],
        exclusiveDocumentsData:[],
        resourceId: 0
    }

    showModal(id){
      this.setState({
        resourceId:id
      });
        this.refs.modal.showModal();
    }

    // 资料打包下载
    handlePackageDownload(){
      FormatUtil.openNewTab()
    }
    // 资料预览购买
    handlePrevBuy(id){
      FormatUtil.openNewTab(id)
    }

    //资料预览下载
    handlePrevDownload(id){
      FormatUtil.openNewTab(id)
    }

    componentDidMount()
    {
      ExclusiveResourceService.getList(this.state.resourceId).then((data) => {
        (data && data.length) && (this.setState({ exclusiveResourceData:data}));
      }).catch((err) => {
        console.log(err);
      });

      ExclusiveDocumentsService.getDocuments().then((data) => {
        (data && data.length) && (this.setState({ exclusiveDocumentsData:data}));
      }).catch((err) => {
        console.log(err);
      });

    }

    render()
    {
      const { exclusiveResourceData , resourceId , exclusiveDocumentsData } = this.state;
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

          <Modal width="800px" ref="modal" backgroundColor="RGBA(0,0,0,0)">
              { <div className="cp-course-resourcePreview-box">
                <ExclusiveResourcePrev className="preview-left" exclusiveDocumentsData={exclusiveDocumentsData.length && exclusiveDocumentsData}/>
                <div className="preview-right">
                <p className="preview-name">{exclusiveResourceData.length && exclusiveResourceData[resourceId].name}</p>
                {
                  (exclusiveResourceData.length && exclusiveResourceData[resourceId].price) ? (
                    <div>
                        <p className="preview-price">￥{exclusiveResourceData.length && exclusiveResourceData[resourceId].price}</p>
                        <button className="preview-buy" onClick={() => this.handlePrevBuy(resourceId)}>购 买</button>
                    </div>
                    ) :
                    (
                        <button className="preview-buy" onClick={() => this.handlePrevDownload(resourceId)}>下 载</button>
                    )
                  }
                </div>
              </div>
            }
          </Modal>
        </div>
      )
    }
}
