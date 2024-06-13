import classNames from 'classnames/bind';
import styles from './OptionMenu.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function OptionItem({ data }) {
    return (
        <Button className={cx('option-item')} leftIcon={data.icon} href={data.href}>
            {data.title}
        </Button>
    );
}

export default OptionItem;
