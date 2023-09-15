import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import css from './FriendList.module.css'


export const FriendList = (friends) => {
    return (
        <ul className={css['friend-list']}>
            {friends.friends.map((friend) => {
                return (
                   <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
               )
           })}
        </ul>);
}