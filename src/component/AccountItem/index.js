import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f84a67d1e821241cf3bfa7aa8f21433d~c5_300x300.webp?lk3s=a5d48078&x-expires=1714536000&x-signature=iM24AkqYphkNrekq%2Bq2k%2BfD4VUA%3D"
                alt="hoaa"
            />
            <div className={cx('infor')}>
                <p className={cx('name')}>Nguyen Van A</p>
                <span className={cx('username')}>nguyenvana</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </div>
        </div>
    );
}

export default AccountItem;
