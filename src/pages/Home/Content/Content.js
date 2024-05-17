import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Avatar from './Avatar';
import Username from './Username';
import Video from './Video';
import Button from '~/component/Button';
import { GPSIcon } from '~/component/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-avatar')}>
                <Avatar />
            </div>
            <div className={cx('content')}>
                <div className={cx('box-user')}>
                    <div className={cx('upload-by-user')}>
                        <Username to={config.routes.profile} />
                        <span className={cx('status')}>How do you feel ?</span>
                        <a className={cx('music')} href="/music">
                            <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                            Music Award
                        </a>
                        <a className={cx('gps')} href="/map">
                            <GPSIcon className={cx('gps-icon')} />
                            Washington D.C
                        </a>
                    </div>

                    <div className={cx('following-btn')}>
                        <Button squared>Following</Button>
                    </div>
                </div>
                <div className={cx('box-video')}>
                    <Video />
                </div>
            </div>
        </div>
    );
}

export default Content;
