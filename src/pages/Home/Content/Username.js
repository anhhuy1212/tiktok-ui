import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Button from '~/component/Button';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Username({ data, to }) {
    const [isFollow, setIsFollow] = useState(data.is_followed);

    const handleFollow = () => {
        setIsFollow(!isFollow);
    };
    return (
        <div className={cx('user')}>
            <NavLink className={cx('username')} to={to}>
                <strong className={cx('nickname')}>
                    {data.nickname}
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </strong>
                <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
            </NavLink>
            <div className={cx('following-btn')} onClick={handleFollow}>
                {isFollow ? <Button squared>Following</Button> : <Button primary>Follow</Button>}
            </div>
        </div>
    );
}

export default Username;
