import '../../scss/components/sidebar.scss';

import FeedIcon from '../../images/icons/sidebar-feed.png';
import TrendsIcon from '../../images/icons/sidebar-trends.png';
import BookmarkIcon from '../../images/icons/sidebar-bookmark.png';
import AddPostIcon from '../../images/icons/sidebar-add.png';
import NotificationIcon from '../../images/icons/sidebar-notifications.png';
import CardsIcon from '../../images/icons/sidebar-cards.png';

const firstNav = [
  { urlIcon: FeedIcon, name: 'Лента' },
  { urlIcon: TrendsIcon, name: 'Тренды' },
  { urlIcon: BookmarkIcon, name: 'Закладки' }
];

const secondNav = [
  { urlIcon: AddPostIcon, name: 'Создать пост' },
  { urlIcon: NotificationIcon, name: 'Уведомления' },
  { urlIcon: CardsIcon, name: 'Мои карточки' }
];

function NavigationList({ props }) {
  return (
    <ul>
      {props.map((link, index) => {
        return (
          <li
            key={`nav-link-${index}`}
            className="flex items-center cursor-pointer"
          >
            <img src={link.urlIcon} alt={link.name} />
            <span className="font-bold">{link.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-panel flex">
        <div className="sidebar-avatar rounded-circle flex-0"></div>
        <div className="flex flex-column self-center">
          <span className="font-bold">Username</span>
          <span
            className="text-sm font-bold"
            style={{ color: '#9F9F9F' }}
          >
            профиль
          </span>
        </div>
      </div>
      <nav className="sidebar-nav flex flex-column">
        <NavigationList props={firstNav} />
        <NavigationList props={secondNav} />
      </nav>
    </div>
  );
}
