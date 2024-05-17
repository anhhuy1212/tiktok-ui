import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { LikeIcon } from '~/component/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faShare, faLink } from '@fortawesome/free-solid-svg-icons';
import { EmbedIcon, SendToFriendsIcon, FacebookIcon, WhatsAppIcon } from '~/component/Icons';
import ShareMenu from './ShareMenu';

const cx = classNames.bind(styles);

function Video({ width = '346px', height = '619px' }) {
    const SHARE_ITEMS = [
        {
            icon: <EmbedIcon />,
            title: 'Embed',
        },
        {
            icon: <SendToFriendsIcon />,
            title: 'Send to friends',
        },
        {
            icon: <FacebookIcon />,
            title: 'Share to Facebook',
            href: 'https://www.facebook.com',
        },
        {
            icon: <WhatsAppIcon />,
            title: 'Share to WhatsApp',
            href: 'https://www.whatsapp.com',
        },
        {
            icon: <FontAwesomeIcon icon={faLink} />,
            title: 'Copy link',
        },
    ];

    return (
        <div className={cx('content-video')}>
            <div className={cx('video')}>
                <video
                    controls
                    loop
                    autoPlay
                    width={width}
                    height={height}
                    src="https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068-euttp/oUFo2ZemHA1SD5PgEmaDIRdBP44fIAYqEyiQQD/?a=1988&bti=NDU3ZjAwOg%3D%3D&ch=0&cr=3&dr=0&lr=unwatermarked&cd=0%7C0%7C0%7C&cv=1&br=3124&bt=1562&cs=0&ds=6&ft=-Csk_m7nPD12NZ4YDT-Uxh42aY6e3wv257cAp&mime_type=video_mp4&qs=0&rc=OTQ6Ojo5OzY7aTozZGQ2OEBpanZqbW05cjY2cjMzZjczM0BjXl9hMy5hNS0xMWE2YTQyYSNsZjZgMmRzaGJgLS1kMWNzcw%3D%3D&btag=e00090000&expire=1715945943&l=202405151137540DFEF66E31E3090B70F5&ply_type=2&policy=2&signature=793bb11f3f856416fedbba002eb388be&tk=tt_chain_token"
                ></video>
            </div>
            <div className={cx('interact-video')}>
                <button className={cx('like-btn')}>
                    <p className={cx('like-icon')}>
                        <LikeIcon />
                    </p>
                    <strong className={cx('like-count')}>23K</strong>
                </button>
                <button className={cx('comment-btn')}>
                    <p className={cx('comment-icon')}>
                        <FontAwesomeIcon className={cx('comment-fontawsome-icon')} icon={faCommentDots} />
                    </p>
                    <strong className={cx('comment-count')}>3K</strong>
                </button>
                <button className={cx('save-btn')}>
                    <p className={cx('save-icon')}>
                        <FontAwesomeIcon className={cx('save-fontawsome-icon')} icon={faBookmark} />
                    </p>
                    <strong className={cx('save-count')}>2.5K</strong>
                </button>

                <ShareMenu items={SHARE_ITEMS}>
                    <button className={cx('share-btn')}>
                        <p className={cx('share-icon')}>
                            <FontAwesomeIcon className={cx('share-fontawsome-icon')} icon={faShare} />
                        </p>
                        <strong className={cx('share-count')}>1K</strong>
                    </button>
                </ShareMenu>
            </div>
        </div>
    );
}

export default Video;
