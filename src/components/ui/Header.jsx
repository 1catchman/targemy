import '../../scss/components/header.scss';

import Logo from '../../images/icons/logo.png';
import UserAvatar from '../../images/user_avatar.png';
import AddIcon from '../../images/icons/add.svg';
import NotificationIcon from '../../images/icons/notification.svg';

export default function Header() {
  return (
    <div className="header fixed top-0">
      <div className="container h-100 flex justify-between items-center">
        <div className="flex flex-1">
          <div className="header-logo flex items-center flex-0 cursor-pointer">
            <img src={Logo} alt="Логотип Таргеми" />
            <span className="font-extrabold main-color">Таргеми</span>
          </div>
        </div>
        <div className="header-search flex justify-center">
          <form>
            <input type="text" placeholder="Искать посты" />
          </form>
        </div>
        <div className="flex flex-1 justify-between">
          <div className="header-buttons flex items-center">
            <button type="button">
              <img src={AddIcon} alt="Добавить пост" />
            </button>
            <button type="button">
              <img src={NotificationIcon} alt="Уведомления" />
              <span className="font-semibold text-base">Создать</span>
            </button>
          </div>
          <div className="header-avatar flex items-center cursor-pointer">
            <img
              className="rounded-circle"
              src={UserAvatar}
              alt="User Avatar"
            />
            <span className="main-color font-semibold">Frank</span>
          </div>
        </div>
      </div>
    </div>
  );
}
