import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useState, useEffect } from 'react';
import Content from './Content';
import Button from '~/component/Button';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function Home() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: 15 })
            .then((data) => {
                setSuggestedUsers(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Content data={suggestedUsers} />
            <div className={cx('float-btn')}>
                <Button className={cx('getapp-btn')} rounded>
                    Get app
                </Button>
            </div>
        </div>
    );
}

export default Home;
