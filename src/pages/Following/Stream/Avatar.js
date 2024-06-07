import classNames from 'classnames/bind';
import styles from './Stream.module.scss';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function Avatar({ data }) {
    return (
        <div className={cx('avatar-live')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <span className={cx('note')}>Live</span>
            <strong className={cx('nickname')}>{data.nickname}</strong>
            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
        </div>
    );
}

export default Avatar;
