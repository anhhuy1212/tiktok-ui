import classNames from 'classnames/bind';
import styles from './Content.module.scss';
// import Tippy from '@tippyjs/react/headless';
// import AccountPreview from './AccountPreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Username({ to }) {
    return (
        <div className={cx('user')}>
            <NavLink className={cx('username')} to={to}>
                <strong className={cx('nickname')}>
                    zachking
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </strong>
                <p className={cx('name')}>ZachKing</p>
            </NavLink>
        </div>
    );
}

export default Username;
