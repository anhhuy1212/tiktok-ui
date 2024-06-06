// import {  useState } from 'react';
import styles from './Notification.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Popover } from 'antd';
import 'tippy.js/dist/tippy.css';
import Button from '../../../../component/Button';

const cx = classNames.bind(styles);
function Notification({ children, clickChange, clickOpenChange }) {
    const renderInbox = () => {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('notification')}>
                    <h2>Notifications</h2>
                    <div className={cx('notification-group')}>
                        <Button mini grey>
                            All activity
                        </Button>
                        <Button mini grey>
                            Likes
                        </Button>
                        <Button mini grey>
                            Comments
                        </Button>
                        <Button mini grey>
                            Mentions and tags
                        </Button>
                        <Button mini grey>
                            Followers
                        </Button>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    };

    return (
        <Popover
            className={cx('share-popover-hover')}
            open={clickChange}
            onOpenChange={clickOpenChange}
            placement="bottom"
            trigger={'click'}
            content={renderInbox}
        >
            {children}
        </Popover>
    );
}

export default Notification;
