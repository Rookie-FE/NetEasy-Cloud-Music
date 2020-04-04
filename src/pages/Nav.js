import React from 'react';
import { withRouter } from 'react-router-dom';

function TopNav(props) {
    return (
        <>
            <button
                type="button"
                onClick={() => {
                    props.history.push('/recommend');
                }}
            >
                推荐
            </button>
            <button
                type="button"
                onClick={() => {
                    props.history.push('/singer');
                }}
            >
                歌手
            </button>
            <button
                type="button"
                onClick={() => {
                    props.history.push('/ranking');
                }}
            >
                排行榜
            </button>
        </>
    );
}
export default withRouter(TopNav);
