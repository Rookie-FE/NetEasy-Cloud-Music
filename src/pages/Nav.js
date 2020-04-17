import React from 'react';
import { NavLink } from 'react-router-dom';
import { UnorderedListOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './nav.module.less';

function ChooseList() {
    return (
        <div className={styles.content}>
            <NavLink to="/recommend" activeClassName={styles.selected}>
                <div className={styles.tabItem}>
                    <span>推荐</span>
                </div>
            </NavLink>
            <NavLink to="/singers" activeClassName={styles.selected}>
                <div className={styles.tabItem}>
                    <span>歌手</span>
                </div>
            </NavLink>
            <NavLink to="/rank" activeClassName={styles.selected}>
                <div className={styles.tabItem}>
                    <span>排行榜</span>
                </div>
            </NavLink>
        </div>
    );
}

export default function TopNav(props) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <UnorderedListOutlined />
                <span>云音乐</span>
                <SearchOutlined />
            </div>
            <ChooseList {...props} />
        </div>
    );
}
// export default withRouter(TopNav);
