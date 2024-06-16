import classNames from 'classnames/bind';
import styles from './ListVideo.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
import VideoItem from './VideoItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const tabs = [
    {
        id: 1,
        title: 'Video',
        private: false,
        type: 'video',
    },
    {
        id: 2,
        title: 'Favorites',
        private: true,
        type: 'favorites',
    },
    {
        id: 3,
        title: 'Liked',
        private: true,
        type: 'liked',
    },
];

function ListVideo() {
    const [isType, setIsType] = useState(tabs[0].type);
    // const [isPrivate, setIsPrivate] = useState({});

    // if (tabs[key].private === true) {
    //     setIsPrivate(<FontAwesomeIcon icon={faLock} />);
    // }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('navigation')}>
                <div className={cx('tabs')}>
                    {tabs.map((tab) => (
                        <p
                            key={tab.id}
                            onClick={() => setIsType(tab.type)}
                            className={isType === tab.type ? cx('video-tab', { active: true }) : cx('video-tab')}
                        >
                            {tab.title}
                        </p>
                    ))}
                    <div className={cx('bottom-line')}></div>
                </div>
            </div>
            <div className={cx('video-container')}>
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
            </div>
        </div>
    );
}

export default ListVideo;
