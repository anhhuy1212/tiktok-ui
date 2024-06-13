import classNames from 'classnames/bind';
import styles from './ShareMenu.module.scss';
import ShareItem from './ShareItem';
import { Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { EmbedIcon, SendToFriendsIcon, FacebookIcon, WhatsAppIcon } from '~/component/Icons';

const cx = classNames.bind(styles);

function Menu({ children, hoverChange, hoverOpenChange, placement = 'topLeft' }) {
    const items = [
        {
            icon: <EmbedIcon />,
            title: 'Embed',
        },
        {
            icon: <SendToFriendsIcon />,
            title: 'Send to friends',
        },
        {
            icon: <FacebookIcon />,
            title: 'Share to Facebook',
            href: 'https://www.facebook.com',
        },
        {
            icon: <WhatsAppIcon />,
            title: 'Share to WhatsApp',
            href: 'https://www.whatsapp.com',
        },
        {
            icon: <FontAwesomeIcon icon={faLink} />,
            title: 'Copy link',
        },
    ];
    const renderItems = () => {
        return items.map((item, index) => {
            return <ShareItem key={index} data={item} />;
        });
    };
    const renderResult = (attrs) => (
        <div className={cx('share-body')} tabIndex="-1" {...attrs}>
            <div>{renderItems()}</div>
        </div>
    );

    return (
        <Popover
            className={cx('share-popover-hover')}
            open={hoverChange}
            onOpenChange={hoverOpenChange}
            placement={placement}
            content={renderResult}
        >
            {children}
        </Popover>
    );
}

export default Menu;
