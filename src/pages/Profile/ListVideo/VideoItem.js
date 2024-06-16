import classNames from 'classnames/bind';
import styles from './ListVideo.module.scss';

const cx = classNames.bind(styles);
function VideoItem() {
    return (
        <div className={cx('video-content')}>
            <a href="/video">
                <img
                    src="https://cdn.tuoitre.vn/471584752817336320/2023/2/12/screenshot-2023-02-12-183759-16762018964521677047550.png"
                    alt="video"
                ></img>
            </a>
            <div className={cx('caption')}>
                He is King Kpop and fasa of Asian, take BigBang become legend boygroup in Korea
            </div>
        </div>
    );
}

export default VideoItem;
