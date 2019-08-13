import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInput = ( props ) => {
    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            props.onInsert();
        }
    }

    return (
        <div className={cx('todo-input')}>
            <input onChange={props.onChange} value={props.value} onKeyPress={handleKeyPress} />
            <div className={cx('add-button')} onClick={props.onInsert}>ADD</div>
        </div>
    );
};

export default TodoInput;