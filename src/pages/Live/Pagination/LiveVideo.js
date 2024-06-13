import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function LiveVideo({ data }) {
    return (
        <div className={cx('live-video')}>
            <img src={data} alt="data" loading="lazy" />
        </div>
    );
}

export default LiveVideo;
