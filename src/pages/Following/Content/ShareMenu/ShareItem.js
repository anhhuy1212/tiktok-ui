import classNames from 'classnames/bind';
import styles from './ShareMenu.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function ShareItem({ data }) {
    return (
        <Button className={cx('share-item')} leftIcon={data.icon} href={data.href}>
            {data.title}
        </Button>
    );
}

export default ShareItem;
