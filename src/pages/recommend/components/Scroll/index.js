import React from 'react';
import styles from './index.module.less';

const Scroll = (props) => {
    return <div className={styles.scrollContainer}>{props.children}</div>;
};

export default Scroll;
