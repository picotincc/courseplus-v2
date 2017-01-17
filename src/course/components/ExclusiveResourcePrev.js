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
  let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
  if (page === 1) {
    previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
  }
  let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
  if (page === pages) {
    nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
  }
  return (
    <nav>
      <ul className="pager">
        {previousButton}
        {nextButton}
      </ul>
    </nav>
    );
}

    componentDidMount()
    {

    }

    render()
    {
      let { exclusiveResourceData } = this.props;
      // let preview_url = exclusiveResourceData.preview_url;
      let preview_url = "http://sources.ikeepstudying.com/jquery.media/pdf.php";


      let pagination = null;
          if (this.state.pages) {
            pagination = this.renderPagination(this.state.page, this.state.pages);
          }
          //http://www.51purse.com/pdf/web/viewer.html?name=b.pdf
          //http://ofcmexmic.bkt.clouddn.com/icse15_work_practices_and_challenges_in_pull-based_development-_the_integrator_s_perspective.pdf
          return (
            <div className="resourcePrev">
               <PDF file="http://ofcmexmic.bkt.clouddn.com/icse15_work_practices_and_challenges_in_pull-based_development-_the_integrator_s_perspective.pdf" onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} />
              {pagination}

            </div>

      )

    }
}
