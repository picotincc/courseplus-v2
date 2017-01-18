import React, { Component } from 'react';

import PDF from 'react-pdf-js';

export default class ExclusiveResourcePrev extends Component {

    constructor (props) {
        super(props);
        this.onDocumentComplete = this.onDocumentComplete.bind(this);
        this.onPageComplete = this.onPageComplete.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    static defaultProps = {

    }
    static propTypes = {

    }

    state = {
      page: 1,
      pages: []
    }

    onDocumentComplete(pages) {
      this.setState({ page: 1, pages });
     }

    onPageComplete(page) {
      this.setState({ page });
    }

    handlePrevious() {
      this.setState({ page: this.state.page - 1 });
    }

    handleNext() {
      this.setState({ page: this.state.page + 1 });
    }

    renderPagination(page, pages) {
      let previousButton = <button className="previous" onClick={this.handlePrevious}><i className="fa fa-arrow-left">上一页</i></button>;
      if (page === 1) {
        previousButton = <button className="previous disabled" ><i className="fa fa-arrow-left" style={{"color":"gray"}}>上一页</i></button>;
      }
      let nextButton = <button className="next" onClick={this.handleNext}><i className="fa fa-arrow-right">下一页</i></button>;
      if (page === pages) {
        nextButton = <button className="next disabled"><i className="fa fa-arrow-right" style={{"color":"gray"}}>下一页</i></button>;
      }
      return (
          <div className="cp-course-resourcePreview-bt">
            {previousButton}
            {nextButton}
          </div>
        );
    }

    componentDidMount()
    {

    }

    render()
    {
      let { exclusiveDocumentsData } = this.props;
      let preview_url = exclusiveDocumentsData[0].preview_url;
      console.log(exclusiveDocumentsData);
      var pdfStyle = {
            "width": "480px",
            "height": "650px"
          };

      let pagination = null;
          if (this.state.pages) {
            pagination = this.renderPagination(this.state.page, this.state.pages);
          }
          return (
            <div className="resourcePrev">
               <PDF file={preview_url} scale={4} style={pdfStyle} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} />
              {pagination}
            </div>
      )
    }
}
