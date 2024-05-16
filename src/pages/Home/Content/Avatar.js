import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Tippy from '@tippyjs/react/headless';
import images from '~/assets/images';
import Image from '~/component/Image';
// import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function Avatar() {
    // const renderPreview = (props) => {
    //     return (
    //         <div tabIndex="-1" {...props}>
    //             <div className={cx('preview')}>
    //                 <AccountPreview data={data} />
    //             </div>
    //         </div>
    //     );
    // };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, -2]} placement="bottom">
                <Image className={cx('avatar')} src={images.noImage} alt="zach" />
            </Tippy>
        </div>
    );
}

export default Avatar;
