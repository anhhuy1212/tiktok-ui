import styles from './Notification.module.scss';
import classNames from 'classnames/bind';
import { Popover, Spin } from 'antd';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const notifyTabs = [
    {
        id: 1,
        content: 'All activity',
        t: 'posts',
    },
    {
        id: 2,
        content: 'Likes',
        t: 'todos',
    },
    {
        id: 3,
        content: 'Comments',
        t: 'comments',
    },
    {
        id: 4,
        content: 'Mentions and tags',
        t: 'albums',
    },
    {
        id: 5,
        content: 'Followers',
        t: 'users',
    },
];

function Notification({ children, clickChange, clickOpenChange }) {
    const [type, setType] = useState('posts');
    const [inboxs, setInboxs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((inboxs) => {
                setInboxs(inboxs);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [type]);

    const renderInbox = () => {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('notification')}>
                    <h2>Notifications</h2>
                    <div className={cx('notification-group')}>
                        {notifyTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setType(tab.t)}
                                className={
                                    type === tab.t ? cx('notification-btn', { active: true }) : cx('notification-btn')
                                }
                            >
                                {tab.content}
                            </button>
                        ))}
                    </div>
                    <div className={cx('list-notification')}>
                        <p className={cx('time-group-title')}>Latest</p>
                        {loading && (
                            <div className={cx('spinner')}>
                                <Spin size="large"></Spin>
                            </div>
                        )}
                        <ul>
                            {!loading &&
                                inboxs.map((inbox) => (
                                    <li key={inbox.id}>{inbox.title || inbox.name || inbox.username}</li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Popover
            overlayInnerStyle={{ paddingRight: 0, paddingBottom: 0 }}
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
