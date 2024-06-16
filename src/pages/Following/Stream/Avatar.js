import classNames from 'classnames/bind';
import styles from './Stream.module.scss';
import Image from '~/component/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Avatar({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper-avatar')}>
            <div className={cx('avatar-live')}>
                <span className={cx('border-avatar')}></span>
                <span className={cx('live-arrow-avatar')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                </span>
                <span className={cx('note')}>Live</span>
            </div>
            <strong className={cx('nickname')}>{data.nickname}</strong>
            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
        </Link>
    );
}

export default Avatar;
