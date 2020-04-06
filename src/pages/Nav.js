import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { UnorderedListOutlined, SearchOutlined } from '@ant-design/icons';
import './Nav.less';

function ChooseList({ history }) {
    const [isSelect, setSelect] = useState(1);
    return (
        <div className="content">
            <div
                style={{ borderBottom: isSelect === 1 ? '2px solid white' : null }}
                onClick={() => {
                    history.push('/recommend');
                    setSelect(1);
                }}
            >
                推荐
            </div>
            <div
                style={{ borderBottom: isSelect === 2 ? '2px solid white' : null }}
                onClick={() => {
                    history.push('/singer');
                    setSelect(2);
                }}
            >
                歌手
            </div>
            <div
                style={{ borderBottom: isSelect === 3 ? '2px solid white' : null }}
                onClick={() => {
                    history.push('/ranking');
                    setSelect(3);
                }}
            >
                排行榜
            </div>
        </div>
    );
}

function TopNav(props) {
    return (
        <div className="container">
            <div className="header">
                <UnorderedListOutlined />
                <span>云音乐</span>
                <SearchOutlined />
            </div>
            <ChooseList history={props.history} />
        </div>
    );
}
export default withRouter(TopNav);
