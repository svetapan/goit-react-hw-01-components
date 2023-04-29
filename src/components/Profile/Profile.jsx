import PropTypes from 'prop-types';
import css from './Profile.module.css';
import user from 'user.json';
import { StatsBord } from '../StatsBord/StatsBord';

export const Profile = () => {
    const {username, tag, location, avatar} = user;
    return (
    <div className={css.profile}>
        <div className={css.description}>
            <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <StatsBord followers={user.stats.followers}
                    views={user.stats.vievs}
                    likes={user.stats.likes} />
    </div>)
}; 

Profile.propTypes = {
    stats: PropTypes.exact ({
        username: PropTypes.string.isRequired,
        location:  PropTypes.string.isRequired,
        avatar:  PropTypes.string.isRequired,
    })
}