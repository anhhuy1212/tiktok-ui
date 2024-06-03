import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { useState } from 'react';
import { LikeIcon } from '~/component/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faShare, faLink } from '@fortawesome/free-solid-svg-icons';
import { EmbedIcon, SendToFriendsIcon, FacebookIcon, WhatsAppIcon } from '~/component/Icons';
import ShareMenu from './ShareMenu';

const cx = classNames.bind(styles);

function Video({ width = '346px', height = '619px' }) {
    const [isLike, setIsLike] = useState(false);
    const [isSave, setIsSave] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

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

    const handleLike = () => {
        setIsLike(!isLike);
    };

    const handleSave = () => {
        setIsSave(!isSave);
    };
    const hide = () => {
        setIsOpen(false);
    };

    return (
        <div className={cx('content-video')}>
            <div className={cx('video')}>
                <video controls loop autoPlay type="video/mp4" width={width} height={height} src=""></video>
            </div>
            <div className={cx('interact-video')}>
                <button className={cx('like-btn')} onClick={handleLike}>
                    <p className={isLike ? cx('like-icon-active') : cx('like-icon')}>
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
                <button className={cx('save-btn')} onClick={handleSave}>
                    <p className={isSave ? cx('save-icon-active') : cx('save-icon')}>
                        <FontAwesomeIcon className={cx('save-fontawsome-icon')} icon={faBookmark} />
                    </p>
                    <strong className={cx('save-count')}>2.5K</strong>
                </button>

                <button className={cx('share-btn')} onClick={hide}>
                    <ShareMenu items={SHARE_ITEMS}>
                        <p className={cx('share-icon')}>
                            <FontAwesomeIcon className={cx('share-fontawsome-icon')} icon={faShare} />
                        </p>
                        <strong className={cx('share-count')}>1K</strong>
                    </ShareMenu>
                </button>
            </div>
        </div>
    );
}

export default Video;
