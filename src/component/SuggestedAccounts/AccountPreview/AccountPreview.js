import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/component/Button';
import PropTypes from 'prop-types';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    const [isFollow, setIsFollow] = useState(false);
    const [followCount, setFollowCount] = useState(data.followers_count);

    const handleFollow = () => {
        if (isFollow === false) {
            setIsFollow(!isFollow);
            setFollowCount(followCount + 1);
        } else {
            setIsFollow(!isFollow);
            setFollowCount(followCount - 1);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div onClick={handleFollow} className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                {isFollow ? <Button squared>Following</Button> : <Button primary>Follow</Button>}
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{followCount} </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}> {data.likes_count} </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}
AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountPreview;
