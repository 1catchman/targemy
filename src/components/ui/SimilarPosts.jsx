import '../../scss/components/similar-posts.scss';

import Logo from '../../images/icons/logo.png';
import { ReactComponent as LikeIcon } from '../../images/icons/btn-like.svg';
import { ReactComponent as ShareIcon } from '../../images/icons/btn-share.svg';
import { ReactComponent as CommentIcon } from '../../images/icons/btn-comment.svg';
import { ReactComponent as RoundedLikeIcon } from '../../images/icons/btn-like-rounded.svg';
import { ReactComponent as RoundedShareIcon } from '../../images/icons/btn-share.svg';
import { ReactComponent as RoundedCommentIcon } from '../../images/icons/btn-comment.svg';
import Avatar from '../../images/user_avatar01.png';
import Avatar1 from '../../images/user_avatar.png';
import Avatar2 from '../../images/user_avatar02.png';
import Avatar3 from '../../images/user_avatar03.png';
import Avatar4 from '../../images/user_avatar04.png';
import Avatar5 from '../../images/user_avatar05.png';
import Background1 from '../../images/card-bg01.png';
import Background2 from '../../images/card-bg02.png';
import Background3 from '../../images/card-bg03.png';
import Background4 from '../../images/card-bg04.png';

const userActions = [
  { avatarUrl: Avatar1, actionType: 'like' },
  { avatarUrl: Avatar2, actionType: 'like' },
  { avatarUrl: Avatar3, actionType: 'share' },
  { avatarUrl: Avatar4, actionType: 'comment' },
  { avatarUrl: Avatar5, actionType: 'like' }
];

const posts = [
  {
    tag: 'Цель',
    tagTheme: 'dark',
    title: `Probabo, inquit, sic agam, ut aut perferendis
    doloribus asperiores repellat hanc ego assentior, cum
    soluta nobis est consecutus?`,
    book: true,
    backgroundUrl: Background1,
    lastUsersAction: userActions
  },
  {
    tag: 'Блог',
    tagTheme: 'light',
    title:
      'Primum igitur, quid est laborum et quale sit aut interrogari.',
    book: false,
    backgroundUrl: Background2,
    lastUsersAction: userActions
  },
  {
    tag: 'Цель',
    tagTheme: 'dark',
    title:
      'At magnum periculum adiit in oculis quidem faciunt, ut de commodis suis cogitarent?',
    book: true,
    backgroundUrl: Background3,
    lastUsersAction: userActions
  },
  {
    tag: 'Цель',
    tagTheme: 'dark',
    title:
      'Tum dicere exorsus est et accusamus et dolore suo sanciret militaris imperii disciplinam exercitumque in malis dolor, non quo voluptas expetenda.',
    book: true,
    backgroundUrl: Background4,
    lastUsersAction: userActions
  }
];

export default function SimilarPosts() {
  return (
    <div className="similar-posts">
      <div className="similar-posts-title w-100 text-center">
        <span className="font-semibold">Похожие посты</span>
      </div>
      <div className="flex w-100 justify-center">
        {posts.map((card, cardIndex) => {
          return (
            <div
              key={`silimar-posts-card-${cardIndex}`}
              className="similar-posts-card flex flex-column justify-between white-color"
              style={{
                backgroundImage: `url(${card.backgroundUrl})`
              }}
            >
              <div className="similar-posts-panel flex">
                <div className="similar-posts-avatar rounded-circle flex-0 cursor-pointer">
                  <img src={Avatar} alt="Пост пользователя" />
                </div>
                <div className="flex flex-column self-center">
                  <span
                    className="font-semibold white-color cursor-pointer"
                    style={{ lineHeight: '22px' }}
                  >
                    Joslin Rodgers
                  </span>
                  <span
                    className={`similar-posts-tag font-semibold cursor-pointer similar-posts-tag_${card.tagTheme}`}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
              <div className="similar-posts-info">
                <div>
                  <span
                    className="text-xs"
                    style={{ color: '#D8D8D8' }}
                  >
                    2 days ago
                  </span>
                </div>
                {card.book && (
                  <div className="similar-posts-name flex items-center">
                    <img src={Logo} alt="Название книги" />
                    <span className="font-semibold text-sm cursor-pointer">
                      Книга «Дом у моря»
                    </span>
                  </div>
                )}

                <div className="similar-posts-card-title">
                  <p className="cursor-pointer">{card.title}</p>
                </div>
                <div className="similar-posts-actions flex">
                  <div className="similar-posts-last-actions flex flex-1">
                    {card.lastUsersAction.map((user, userIndex) => {
                      return (
                        <div
                          key={`card-${cardIndex}}-user-${userIndex}-action`}
                          className="similar-posts-user cursor-pointer"
                        >
                          <img
                            src={user.avatarUrl}
                            alt="Активность пользователя"
                          />
                          <div className="similar-posts-user-action">
                            {(user.actionType === 'like' && (
                              <LikeIcon />
                            )) ||
                              (user.actionType === 'share' && (
                                <ShareIcon />
                              )) ||
                              (user.actionType === 'comment' && (
                                <CommentIcon />
                              ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="similar-posts-acton-buttons flex-1 flex justify-end">
                    <div className="flex flex-column items-center cursor-pointer">
                      <RoundedLikeIcon />
                      <span className="font-semibold text-sm">
                        256k
                      </span>
                    </div>
                    <div className="flex flex-column items-center cursor-pointer">
                      <RoundedShareIcon />
                      <span className="font-semibold text-sm">
                        256k
                      </span>
                    </div>
                    <div className="flex flex-column items-center cursor-pointer">
                      <RoundedCommentIcon />
                      <span className="font-semibold text-sm">
                        256k
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
