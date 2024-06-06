import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Image from '~/component/Image';
import AccountPreview from '~/component/SuggestedAccounts/AccountPreview';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Avatar({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <div className={cx('preview')}>
                    <AccountPreview data={data} />
                </div>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, -2]} placement="bottom" render={renderPreview}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            </Tippy>
        </div>
    );
}

export default Avatar;
