import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Avatar from './Avatar';
import Username from './Username';
import Video from './Video';
import { GPSIcon } from '~/component/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Content({ data = [] }) {
    return (
        <div>
            {data.map((account) => (
                <div key={account.id} className={cx('wrapper')}>
                    <div className={cx('box-avatar')}>
                        <Avatar data={account} />
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('box-user')}>
                            <div className={cx('upload-by-user')}>
                                <Username data={account} to={config.routes.profile} />
                                <span className={cx('status')}>{account.popular_video.description}</span>
                                <a className={cx('music')} href="/music">
                                    {account.popular_video.music !== '' ? (
                                        <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                                    ) : (
                                        <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                                    )}
                                    {account.popular_video.music}
                                </a>
                                {account.website_url !== '' && (
                                    <a className={cx('gps')} href="/map">
                                        <GPSIcon className={cx('gps-icon')} />
                                        {account.website_url}
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className={cx('box-video')}>
                            <Video data={account} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Content;
