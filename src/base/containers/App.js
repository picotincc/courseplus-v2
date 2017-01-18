import React, { Component } from 'react';
import { connect } from 'react-redux';
import "base/resource/index.less";
import Modal from 'base/components/Modal';
import Header from 'base/components/Header';
import Footer from 'base/components/footer';
import LoginDialog from 'base/components/LoginDialog';
import RegisterDialog from 'base/components/RegisterDialog';
import { updateUserInfo } from 'base/actions/HomeAction';
import WebStorageUtil from 'base/util/WebStorageUtil';
import UserService from 'base/service/UserService';



class App extends Component {

    constructor (props) {
        super(props);
        this.showLoginModal = this.showLoginModal.bind(this);
        this.hideLoginModal = this.hideLoginModal.bind(this);
        this.showRegisterModal = this.showRegisterModal.bind(this);
        this.showForgetPasswordModal = this.showForgetPasswordModal.bind(this);
        this.updateUserInfo = this.updateUserInfo.bind(this);
        this.autoLogin();
    }

    state = {

    }

    componentDidMount()
    {

    }

    componentWillReceiveProps(nextProprs)
    {
        if (!nextProprs.userInfo && nextProprs.isToggleLogin)
        {
            this.refs.loginModal.showModal();
        }
    }

    autoLogin()
    {
        const user = WebStorageUtil.getUserStorage();
        if (user)
        {
            UserService.login(user).then(res => {
                this.updateUserInfo(res);
            });
        }
    }

    updateUserInfo(info)
    {
        const { dispatch } = this.props;
        dispatch(updateUserInfo(info));
    }

    hideLoginModal(){
        this.refs.loginModal.hideModal();
    }

    showLoginModal(){
        this.refs.forgetPasswordModal.hideModal();
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

    render()
    {
        return (
            <div className="cp-app">
                <header className="flex-center">
                    <Header
                        onLoginClick={this.showLoginModal}
                        onRegisterClick={this.showRegisterModal}
                        userInfo={this.props.userInfo}
                        updateUserInfo={this.updateUserInfo}
                    />
                </header>

                <div className="cp-container">
                    {this.props.children}
                </div>

                <footer className="flex-center"><Footer /></footer>

                <Modal width="400px" ref="loginModal" >
                    <LoginDialog
                        onForgetPasswordClick={this.showForgetPasswordModal}
                        onRegisterClick={this.showRegisterModal}
                        updateUserInfo={this.updateUserInfo}
                        hideLoginModal={this.hideLoginModal}
                    />
                </Modal>

                <Modal width="400px" ref="forgetPasswordModal"  >
                    <RegisterDialog isRegister={false} onLoginClick={this.showLoginModal} />
                </Modal>

                <Modal width="400px" ref="registerModal"  >
                    <RegisterDialog isRegister={true} onLoginClick={this.showLoginModal} />
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      userInfo: state.userInfo,
      isToggleLogin: state.isToggleLogin
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(App);
