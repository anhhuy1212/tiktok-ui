import classNames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Video({ width = '346px', height = '619px' }) {
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
                <button>Likes</button>
                <button>Comments</button>
                <button>Save</button>
                <button>Share</button>
            </div>
        </div>
    );
}

export default Video;
