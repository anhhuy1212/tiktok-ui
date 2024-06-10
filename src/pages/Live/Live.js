import { Helmet } from 'react-helmet';
import classNames from 'classnames/bind';
import styles from './Live.module.scss';
import Pagination from './Pagination';

const cx = classNames.bind(styles);

function Live() {
    return (
        <div className={cx('wrapper')}>
            <Helmet>
                <title>TikTok LIVE | TikTok</title>
            </Helmet>

            <Pagination />

            <div></div>
        </div>
    );
}

export default Live;
