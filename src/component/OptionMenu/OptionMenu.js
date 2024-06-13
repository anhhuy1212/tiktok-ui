import classNames from 'classnames/bind';
import styles from './OptionMenu.module.scss';
import { Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faFlag } from '@fortawesome/free-solid-svg-icons';
import OptionItem from './OptionItem';

const cx = classNames.bind(styles);

function OptionMenu({ children, hoverChange, hoverOpenChange, placement = 'topLeft' }) {
    const options = [
        {
            title: 'Report',
            icon: <FontAwesomeIcon icon={faFlag} />,
        },
        {
            title: 'Block',
            icon: <FontAwesomeIcon icon={faBan} />,
        },
    ];
    const renderItems = () => {
        return options.map((item, index) => {
            return <OptionItem key={index} data={item} />;
        });
    };
    const renderResult = (attrs) => (
        <div className={cx('option-body')} tabIndex="-1" {...attrs}>
            <div>{renderItems()}</div>
        </div>
    );

    return (
        <Popover
            overlayInnerStyle={{ paddingLeft: 0, paddingRight: 0 }}
            className={cx('option-popover-hover')}
            open={hoverChange}
            onOpenChange={hoverOpenChange}
            placement={placement}
            content={renderResult}
        >
            {children}
        </Popover>
    );
}

export default OptionMenu;
