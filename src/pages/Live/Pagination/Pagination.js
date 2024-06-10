import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import { useState } from 'react';
import LiveVideo from './LiveVideo';

const cx = classNames.bind(styles);
const tabs = [
    {
        id: 1,
        content: 'For you',
        type: 'foryou',
        photo: 'https://vov.vn/sites/default/files/styles/large/public/2023-06/gd.jpg',
    },
    {
        id: 2,
        content: 'Folowing',
        type: 'following',
        photo: 'https://static.tuoitre.vn/tto/i/s1280/2016/01/05/soompiii-1451965874.png',
    },
    {
        id: 3,
        content: 'Gaming',
        type: 'gaming',
        photo: 'https://i.ytimg.com/vi/EA0YC9m6D4s/maxresdefault.jpg',
    },
    {
        id: 4,
        content: 'Lifestyle',
        type: 'lifestyle',
        photo: 'https://static1.squarespace.com/static/5c1e4e00506fbef56473b460/5df11fc7c3c597342a380a16/5eaa42defc9c3c3780a723a6/1713725667473/how+to+create+warm+minimalism+in+your+home.jpg?format=1500w',
    },
    {
        id: 5,
        content: 'Leage of Legends',
        type: 'lol',
        photo: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b',
    },
    {
        id: 6,
        content: 'Sport',
        type: 'sport',
        photo: 'https://giaydabongtot.com/wp-content/uploads/2022/12/messi-va-ronaldo-tai-world-cup.jpg',
    },
    {
        id: 7,
        content: 'Fashion',
        type: 'fashion',
        photo: 'https://www.mrporter.com/cms/ycm/resource/blob/522574/9db92638aa9479612a9511cb21d09bb2/6834d931-fb4d-4e04-a423-12cd5f01d86b-data.jpg',
    },
    {
        id: 8,
        content: 'Decor',
        type: 'decor',
        photo: 'https://flexfit.vn/wp-content/uploads/2020/10/L3D187S21ENDIKGFH4YUI5L7GLUF3P3WG888_3840x2160-scaled.jpg',
    },
    {
        id: 9,
        content: 'Music',
        type: 'music',
        photo: 'https://c4.wallpaperflare.com/wallpaper/7/643/588/chillhop-music-iphone-desk-drawing-coffee-hd-wallpaper-preview.jpg',
    },
    {
        id: 10,
        content: 'Movie',
        type: 'movie',
        photo: 'https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg',
    },
    {
        id: 11,
        content: 'Technical',
        type: 'technical',
        photo: 'https://cdn.tgdd.vn/Files/2020/12/16/1314277/appleproduct_800x450.jpg',
    },
];

function Pagination() {
    const [currentType, setCurrentType] = useState(tabs[0].type);
    const [currentVideo, setCurrentVideo] = useState(tabs[0].photo);

    const handleClick = (video, type) => {
        setCurrentVideo(video);
        setCurrentType(type);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('pagination')}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        // href={`/live/${tab.type}`}
                        onClick={() => handleClick(tab.photo, tab.type)}
                        className={currentType === tab.type ? cx('tab', { active: true }) : cx('tab')}
                    >
                        {tab.content}
                    </button>
                ))}
            </div>
            <div>
                <LiveVideo data={currentVideo} />
            </div>
        </div>
    );
}

export default Pagination;
