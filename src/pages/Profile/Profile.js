import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import InfoUser from './InfoUser';
import ListVideo from './ListVideo';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <InfoUser />
            <ListVideo />
        </div>
    );
}

export default Profile;
