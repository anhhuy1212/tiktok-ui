import classNames from 'classnames/bind';
import styles from './ShareMenu.module.scss';
import ShareItem from './ShareItem';
import { Popover } from 'antd';
// import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hoverChange, hoverOpenChange }) {
    // const [history, setHistory] = useState([{ data: items }]);

    const renderItems = () => {
        return items.map((item, index) => {
            return <ShareItem key={index} data={item} />;
        });
    };
    const renderResult = (attrs) => (
        <div className={cx('share-body')} tabIndex="-1" {...attrs}>
            <div>{renderItems()}</div>
        </div>
    );

    return (
        <Popover
            className={cx('share-popover-hover')}
            open={hoverChange}
            onOpenChange={hoverOpenChange}
            placement="topLeft"
            content={renderResult}
        >
            {children}
        </Popover>
    );
}

export default Menu;
