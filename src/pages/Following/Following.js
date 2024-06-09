import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import { useState, useEffect } from 'react';
import Content from './Content';
import * as userService from '~/services/userService';
import { Skeleton } from 'antd';
import Stream from './Stream';

const cx = classNames.bind(styles);

function Following() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        userService
            .getSuggested({ page: 1, perPage: 15 })
            .then((data) => {
                setSuggestedUsers(data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('wrapper')}>
            {loading && (
                <div className={cx('skeleton')}>
                    <Skeleton />
                </div>
            )}
            <Stream data={suggestedUsers} />
            <Content data={suggestedUsers} />
        </div>
    );
}

export default Following;
