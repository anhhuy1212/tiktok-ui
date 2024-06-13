import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { useState } from 'react';
import { LikeIcon } from '~/component/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import ShareMenu from '~/component/ShareMenu';
// import { EmbedIcon, SendToFriendsIcon, FacebookIcon, WhatsAppIcon } from '~/component/Icons';

const cx = classNames.bind(styles);

function Video({ width = '346px', height = '619px', data }) {
    const [isLike, setIsLike] = useState(data.popular_video.is_liked);
    const [likeCount, setLikeCount] = useState(data.popular_video.likes_count);
    const [isSave, setIsSave] = useState(false);
    const [saveCount, setSaveCount] = useState(0);
    const [hovered, setHovered] = useState(false);

    // const SHARE_ITEMS = [
    //     {
    //         icon: <EmbedIcon />,
    //         title: 'Embed',
    //     },
    //     {
    //         icon: <SendToFriendsIcon />,
    //         title: 'Send to friends',
    //     },
    //     {
    //         icon: <FacebookIcon />,
    //         title: 'Share to Facebook',
    //         href: 'https://www.facebook.com',
    //     },
    //     {
    //         icon: <WhatsAppIcon />,
    //         title: 'Share to WhatsApp',
    //         href: 'https://www.whatsapp.com',
    //     },
    //     {
    //         icon: <FontAwesomeIcon icon={faLink} />,
    //         title: 'Copy link',
    //     },
    // ];

    const handleLike = () => {
        if (isLike === false) {
            setIsLike(!isLike);
            setLikeCount(likeCount + 1);
        } else {
            setIsLike(!isLike);
            setLikeCount(likeCount - 1);
        }
    };

    const handleSave = () => {
        if (isSave === false) {
            setIsSave(!isSave);
            setSaveCount(saveCount + 1);
        } else {
            setIsSave(!isSave);
            setSaveCount(saveCount - 1);
        }
    };

    const handleShare = () => {
        setHovered(!hovered);
    };

    return (
        <div className={cx('content-video')}>
            <div className={cx('video')}>
                <video
                    controls
                    loop
                    type="video/mp4"
                    width={width}
                    height={height}
                    src={data.popular_video.file_url}
                ></video>
            </div>
            <div className={cx('interact-video')}>
                <button className={cx('like-btn')} onClick={handleLike}>
                    <p className={isLike ? cx('like-icon-active') : cx('like-icon')}>
                        <LikeIcon />
                    </p>
                    <strong className={cx('like-count')}>{likeCount}</strong>
                </button>
                <button className={cx('comment-btn')}>
                    <p className={cx('comment-icon')}>
                        <FontAwesomeIcon className={cx('comment-fontawsome-icon')} icon={faCommentDots} />
                    </p>
                    <strong className={cx('comment-count')}>{data.popular_video.comments_count}</strong>
                </button>
                <button className={cx('save-btn')} onClick={handleSave}>
                    <p className={isSave ? cx('save-icon-active') : cx('save-icon')}>
                        <FontAwesomeIcon className={cx('save-fontawsome-icon')} icon={faBookmark} />
                    </p>
                    <strong className={cx('save-count')}>{saveCount}</strong>
                </button>

                <ShareMenu hoverChange={hovered} hoverOpenChange={handleShare}>
                    <button onClick={handleShare} className={cx('share-btn')}>
                        <p className={cx('share-icon')}>
                            <FontAwesomeIcon className={cx('share-fontawsome-icon')} icon={faShare} />
                        </p>
                        <strong className={cx('share-count')}>{data.popular_video.shares_count}</strong>
                    </button>
                </ShareMenu>
            </div>
        </div>
    );
}

export default Video;
