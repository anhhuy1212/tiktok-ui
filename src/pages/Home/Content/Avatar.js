import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Image from '~/component/Image';
// import AccountPreview from './AccountPreview'

const cx = classNames.bind(styles);

function Avatar({ data }) {
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
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
        </div>
    );
}

export default Avatar;
