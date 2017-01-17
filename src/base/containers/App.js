import React, { Component } from 'react';
import { connect } from 'react-redux';
import "base/resource/index.less";
import Modal from 'base/components/Modal';
import Header from 'base/components/Header';
import Footer from 'base/components/footer';
import LoginDialog from 'base/components/LoginDialog';
import RegisterDialog from 'base/components/RegisterDialog';
import { login } from 'base/actions/HomeAction';

class App extends Component {

    constructor (props) {
        super(props);
        this.showLoginModal = this.showLoginModal.bind(this);
        this.showRegisterModal = this.showRegisterModal.bind(this)
        this.showForgetPasswordModal = this.showForgetPasswordModal.bind(this)
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    showLoginModal(){
        this.refs.registerModal.hideModal();
        this.refs.loginModal.showModal();
    }

    showRegisterModal(){
        this.refs.loginModal.hideModal();
        this.refs.registerModal.showModal();
    }

    showForgetPasswordModal(){
        this.refs.loginModal.hideModal();
        this.refs.forgetPasswordModal.showModal();
    }



    componentDidMount()
    {

    }

    render()
    {
        return (
            <div className="cp-app">
                <header className="flex-center"><Header onLoginClick={this.showLoginModal} onRegisterClick={this.showRegisterModal} userId={this.props.userId} /></header>

                <div className="cp-container">
                    {this.props.children}
                </div>

                <footer className="flex-center"><Footer /></footer>

                <Modal width="400px" ref="loginModal" >
                    <LoginDialog onForgetPasswordClick={this.showForgetPasswordModal} onRegisterClick={this.showRegisterModal}/>
                </Modal>

                <Modal width="400px" ref="forgetPasswordModal"  >
                    <RegisterDialog isRegister={false} />
                </Modal>

                <Modal width="400px" ref="registerModal"  >
                    <RegisterDialog isRegister={true} onLoginClick={this.showLoginModal}/>
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
