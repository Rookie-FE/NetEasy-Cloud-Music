import React from 'react';
import { withRouter } from 'react-router-dom';
let x = 1;
let obj = {
    sdf: 'dd',
};
let my = { dslfsdj: 'dsfsd' };
function TopNav(props) {
    return (
        <>
            <button
                onClick={() => {
                    props.history.push('/recommend');
                }}
            >
                推荐
            </button>
            <button
                onClick={() => {
                    props.history.push('/singer');
                }}
            >
                歌手
            </button>
            <button
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
