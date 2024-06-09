import classNames from 'classnames/bind';
import styles from './Stream.module.scss';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function Avatar({ data }) {
    return (
        <div className={cx('wrapper-avatar')}>
            <div className={cx('avatar-live')}>
                <span className={cx('border-avatar')}></span>
                <span className={cx('live-arrow-avatar')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                </span>
                <span className={cx('note')}>Live</span>
            </div>
            <strong className={cx('nickname')}>{data.nickname}</strong>
            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
        </div>
    );
}

export default Avatar;
