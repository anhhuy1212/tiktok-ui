import classNames from 'classnames/bind';
import styles from './InforUser.module.scss';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis, faShare, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'antd';
import { useState } from 'react';
import ShareMenu from '~/component/ShareMenu';

import OptionMenu from '~/component/OptionMenu';

const cx = classNames.bind(styles);
function InfroUser() {
    const [isFollow, setIsFollow] = useState(false);
    const [shareHovered, setShareHovered] = useState(false);
    const [optionHovered, setOptionHovered] = useState(false);
    const isLive = false;

    const handleFollow = () => {
        setIsFollow(!isFollow);
    };
    const handleShare = () => {
        setShareHovered(!shareHovered);
    };
    const handleOption = () => {
        setOptionHovered(!optionHovered);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <div className={cx('avatar')}>
                    {!isLive ? (
                        <img
                            className={cx('img-avatar')}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2boNo2OYa6CLv00F8NEYjNAK9Ib6UTH74g&s"
                            alt="useravatar"
                        />
                    ) : (
                        <a href="/live">
                            <span className={cx('border-avatar')}>
                                <img
                                    className={cx('img-avatar')}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2boNo2OYa6CLv00F8NEYjNAK9Ib6UTH74g&s"
                                    alt="useravatar"
                                />
                            </span>
                            <span className={cx('note')}>LIVE</span>
                        </a>
                    )}
                </div>
                <div className={cx('information')}>
                    <span className={cx('user-title')}>Nickname</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    <h2 className={cx('user-subtitle')}>Name</h2>
                    {isFollow ? (
                        <div className={cx('followed-group-btn')}>
                            <Button className={cx('message-btn')} outline>
                                Message
                            </Button>
                            <Tooltip title="Unfollow" placement="bottom">
                                <Button onClick={handleFollow} className={cx('unfollow-btn')} squared>
                                    {<FontAwesomeIcon icon={faUserCheck} />}
                                </Button>
                            </Tooltip>
                        </div>
                    ) : (
                        <Button onClick={handleFollow} className={cx('follow-btn')} primary>
                            Follow
                        </Button>
                    )}
                </div>
                <div className={cx('group-btn')}>
                    <ShareMenu placement="bottom" hoverChange={shareHovered} hoverOpenChange={handleShare}>
                        <button onClick={handleShare} className={cx('share-btn')}>
                            <FontAwesomeIcon className={cx('share-icon')} icon={faShare} />
                        </button>
                    </ShareMenu>
                    <OptionMenu placement="bottomRight" hoverChange={optionHovered} hoverOpenChange={handleOption}>
                        <button onClick={handleOption} className={cx('option-btn')}>
                            <FontAwesomeIcon className={cx('option-icon')} icon={faEllipsis} />
                        </button>
                    </OptionMenu>
                </div>
            </div>
            <div className={cx('quantity')}>
                <div>
                    <strong>11</strong>
                    <span className={cx('unit')}>Following</span>
                </div>
                <div>
                    <strong>200</strong>
                    <span className={cx('unit')}>Followers</span>
                </div>
                <div>
                    <strong>1.5M</strong>
                    <span className={cx('unit')}>Like</span>
                </div>
            </div>
            <span className={cx('user-bio')}>
                Bio yet Bio yet Bio yet Bio yet Bio yet Bio yet Bio yet Bio yet Bio yet Bio yet
            </span>
        </div>
    );
}

export default InfroUser;
