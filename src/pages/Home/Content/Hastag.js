import classNames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Hastag({ content = [] }) {
    const regex = /#(\w+)/g;
    // Thay thế các hashtag bằng thẻ link
    const updatedContent = content.replace(regex, '<a href="/hashtag/$1">#$1</a>');

    return <div dangerouslySetInnerHTML={{ __html: updatedContent }} />;
}

export default Hastag;
