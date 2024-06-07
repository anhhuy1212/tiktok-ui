import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import AccountPreview from '~/component/SuggestedAccounts/AccountPreview';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Username({ data, to }) {
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
        <div className={cx('user')}>
            <Tippy interactive delay={[800, 0]} offset={[-20, -2]} placement="bottom" render={renderPreview}>
                <NavLink className={cx('username')} to={to}>
                    <strong className={cx('nickname')}>
                        {data.nickname}
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </strong>
                    <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                </NavLink>
            </Tippy>
        </div>
    );
}

export default Username;
