import React from 'react';
import { NavLink } from 'react-router-dom';
import { UnorderedListOutlined, SearchOutlined } from '@ant-design/icons';
import './Nav.less';

function ChooseList() {
    return (
        <div className="content">
            <NavLink to="/recommend" activeClassName="selected">
                <div>
                    <span>推荐</span>
                </div>
            </NavLink>
            <NavLink to="/singers" activeClassName="selected">
                <div>
                    <span>歌手</span>
                </div>
            </NavLink>
            <NavLink to="/rank" activeClassName="selected">
                <div>
                    <span>排行榜</span>
                </div>
            </NavLink>
        </div>
    );
}

export default function TopNav(props) {
    return (
        <div className="container">
            <div className="header">
                <UnorderedListOutlined />
                <span>云音乐</span>
                <SearchOutlined />
            </div>
            <ChooseList {...props} />
        </div>
    );
}
// export default withRouter(TopNav);
