import React from "react";
import styleFriends from "../css/friends.module.css";
import PropTypes from "prop-types";

const Friends = ({friends}) => {
    return (
    <section className={styleFriends.section}>
        <ul className={styleFriends.list}>
            {friends ? friends.map(friend => {
                return (
                    <li className={styleFriends.item} key={friend.id}>
                        {friend.isOnline ?
                            <div className={styleFriends.statuson}></div>
                            : <div className={styleFriends.statusoff}></div>
                        }
                        <img className={styleFriends.avatar} src={friend.avatar} alt="User avatar" width="48" />
                        <p className={styleFriends.name}>{friend.name}</p>
                    </li>
                );
            }) : []}
        </ul>
    </section>
    );
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    ).isRequired,
};

export default Friends;