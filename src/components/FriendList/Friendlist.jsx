import PropTypes from 'prop-types';
import css from './Friendlist.module.css';
import friends from 'friends.json';

export const Friendlist = () => {
    return (
        <ul className={css.friendList}>
            {friends.map (({ id, avatar, name, isOnline }) => (
                <li key={id} className={css.item}>
                        <span className={`${css.status} ${css[isOnline]}`}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar"
                        width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            ))}           
        </ul>
    );
};

Friendlist.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}