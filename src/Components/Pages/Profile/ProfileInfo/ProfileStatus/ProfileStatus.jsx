/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './ProfileStatus.module.css'

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusArea: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                statusArea: this.props.status
            })
        }
    }


    onStatusAreaChange = (event) => {
        this.setState({
            statusArea: event.target.value
        })
    }

    enableEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    disableEditMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateStatus(this.state.statusArea);
    }

    onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            this.disableEditMode();
        }
    }

    render() {
        return (
            <>
                <div className={s.wrapper}>
                    {!this.state.editMode
                        ?
                        <div>
                            <span
                                onClick={this.enableEditMode}
                            >{this.props.status}</span>
                        </div>
                        :
                        <div>
                            <input
                                autoFocus
                                onChange={this.onStatusAreaChange}
                                onKeyDown={this.onEnterPress}
                                onBlur={this.disableEditMode}
                                defaultValue={this.state.statusArea}
                            ></input>
                        </div>
                    }
                </div>
            </>
        )
    }
}
