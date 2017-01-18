import React, {Component, PropTypes} from 'react';
import BoronModel from 'boron/ScaleModal';
import { Icon } from 'antd';

class Modal extends Component {
    constructor (props) {
        super(props);
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    static defaultProps = {
        width : "50%",
        backgroundColor: "RGBA(255,255,255,1)"
    }

    showModal(){
        this.refs.modal.show();
        document.body.style.overflow = "hidden";
    }

    hideModal(){
        this.refs.modal.hide();
        document.body.style.overflow = "auto";
    }

    backdropStyle = {
        backgroundColor: 'RGBA(0,0,0,0.8)',
        zIndex: "998"
    };

    modalStyle = {
        width: this.props.width,
        backgroundColor: "RGBA(255,255,255,0)",
        zIndex: "999"
    };

    contentStyle = {
        borderRadius: "4px",
        backgroundColor: this.props.backgroundColor
    };



    render() {
        return (
            <BoronModel ref="modal" contentStyle={this.contentStyle} modalStyle={this.modalStyle} backdropStyle={this.backdropStyle}>
                {this.props.children}
                <Icon className="modal-icon" onClick={this.hideModal} type="close" ></Icon>
            </BoronModel>
        );
    }
}





export default Modal;
