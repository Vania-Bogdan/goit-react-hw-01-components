import React from "react";
import styleProfile from "../css/profile.module.css";
import PropTypes from "prop-types";

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats,
    imgAlt = 'User avatar',
}) => {
    return<div className={styleProfile.profile}>
<div className={styleProfile.description}>
    <img
    src={avatar}
    alt={imgAlt}
    className={styleProfile.avatar}
    />
    <p className={styleProfile.name}>{username}</p>
    <p className={styleProfile.tag}>{"@" + tag}</p>
    <p className={styleProfile.location}>{location}</p>
</div>

<ul className={styleProfile.stats}>
    <li className={styleProfile.statsEl}>
        <span className={styleProfile.label}>Followers</span>
        <span className={styleProfile.quantity}>{stats.followers}</span>
    </li>
    <li className={styleProfile.statsEl}>
        <span className={styleProfile.label}>Views</span>
        <span className={styleProfile.quantity}>{stats.views}</span>
    </li>
    <li className={styleProfile.statsEl}>
        <span className={styleProfile.label}>Likes</span>
        <span className={styleProfile.quantity}>{stats.likes}</span>
    </li>
</ul>
</div>
}

Profile.propTypes = {
    imgUrl: PropTypes.string,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
    imgAlt: PropTypes.string,
};

export default Profile;