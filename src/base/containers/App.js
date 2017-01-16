import React, { Component } from 'react';
import { connect } from 'react-redux';
import "base/resource/index.less";
import Modal from 'base/components/Modal';
import Header from 'base/components/Header';
import Footer from 'base/components/footer';
import LoginDialog from 'base/components/LoginDialog';
import { login } from 'base/actions/HomeAction';

class App extends Component {

    constructor (props) {
        super(props);
        this.showModal = this.showModal.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    showModal(){
        this.refs.modal.showModal();
    }


    componentDidMount()
    {

    }

    render()
    {
        return (
            <div className="cp-app">
                <header className="flex-center"><Header handleLoginClick={this.showModal} userId={this.props.userId} /></header>

                <div className="cp-container">
                    {this.props.children}
                </div>

                <footer className="flex-center"><Footer /></footer>

                <Modal width="400px" ref="modal" >
                    <LoginDialog />
                </Modal>
              
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      userId: state.userId
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(App);
