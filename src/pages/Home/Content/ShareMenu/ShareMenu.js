import classNames from 'classnames/bind';
import styles from './ShareMenu.module.scss';
import Tippy from '@tippyjs/react/headless';
import ShareItem from './ShareItem';
// import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    // const [history, setHistory] = useState([{ data: items }]);
    // console.log(history.data);

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
        <Tippy interactive delay={[0, 700]} placement="top-start" offset={(12, 6)} render={renderResult}>
            {children}
        </Tippy>
    );
}

export default Menu;
