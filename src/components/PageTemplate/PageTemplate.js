import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ( props ) => {
    return (
        <div className={cx('page-template')}>
            <h1>일정 관리</h1>            
            <div className={cx('content')}>
                {props.children}
            </div>
        </div>
    );
}

export default PageTemplate;