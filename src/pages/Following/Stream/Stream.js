import classNames from 'classnames/bind';
import styles from './Stream.module.scss';
import Avatar from './Avatar';

const cx = classNames.bind(styles);

function Stream({ data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <div></div>
            {data.map((account) => (
                <div key={account.id} className={cx('stream')}>
                    <Avatar data={account} />
                </div>
            ))}
            <div></div>
        </div>
    );
}

export default Stream;
