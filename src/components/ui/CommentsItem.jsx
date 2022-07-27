import { useEffect, useState } from 'react';
import { parseDate } from '../../utils/parseDate';
import { getUserData } from '../../utils/getUserData';
import '../../scss/components/comments.scss';

import { ReactComponent as SettingsIcon } from '../../images/icons/settings.svg';

export default function CommentsItem({ props }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserData(props.user_id).then((user) => setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="comments-reply">
      <div className="comments-panel flex">
        <div className="comments-avatar rounded-circle flex-0 cursor-pointer">
          <img
            src={user.photo_avatar}
            alt={`${user.first_name} ${user.last_name}`}
          />
        </div>
        <div className="flex flex-1 flex-column self-center">
          <span className="font-bold cursor-pointer">
            {user.first_name} {user.last_name}
          </span>
          <span className="text-xs" style={{ color: '#9F9F9F' }}>
            {props.date_create && parseDate(props.date_create)}
          </span>
        </div>
        <div className="btn-settings">
          <button type="button">
            <SettingsIcon />
          </button>
        </div>
      </div>
      <div className="comments-text">
        <p className="text-sm m-0">{props.content}</p>
      </div>
    </div>
  );
}
