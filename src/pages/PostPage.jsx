import React, { Fragment, useEffect, useState } from 'react';
import { parseDate } from '../utils/parseDate';
import { getUserData } from '../utils/getUserData';
import Layout from '../components/ui/Layout';
import '../scss/components/post.scss';

import { ReactComponent as CommentIcon } from '../images/icons/btn-comment.svg';
import { ReactComponent as LikeIcon } from '../images/icons/btn-like.svg';
import { ReactComponent as ShareIcon } from '../images/icons/btn-share.svg';
import { ReactComponent as SettingsIcon } from '../images/icons/settings.svg';
import { ReactComponent as PlusIcon } from '../images/icons/plus.svg';

export default function PostPage() {
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});
  const [authorSubs, setAuthorSubs] = useState(0);

  const getUserSubscribers = (id) => {
    fetch(
      `https://api.stage.targemy.com/v1/subscribe/get-subscribers?type=user&entityId=${id}`
    )
      .then((response) => response.json())
      .then((data) => setAuthorSubs(data._meta.totalCount));
  };

  useEffect(() => {
    fetch('https://api.stage.targemy.com/v1/post/3')
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        getUserData(data.user_id).then((user) => setAuthor(user));
        getUserSubscribers(data.user_id);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="post">
        <div className="post-main bg-white">
          <div className="post-image">
            {post.photo_cover && (
              <img src={post.photo_cover} alt={post.title} />
            )}
          </div>
          <div className="post-header flex">
            <div className="post-avatar rounded-circle flex-0 cursor-pointer">
              {author.photo_avatar && (
                <img src={author.photo_avatar} alt={author.about} />
              )}
            </div>
            <div className="flex flex-column w-100 self-center">
              {author.id ? (
                <Fragment>
                  <span
                    className="font-semibold cursor-pointer"
                    style={{ marginBottom: '7px' }}
                  >
                    {author.first_name} {author.last_name}
                  </span>
                  <span className="font-semibold main-color text-sm">
                    {authorSubs === 1
                      ? `${authorSubs} follower`
                      : `${authorSubs} followers`}
                  </span>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="w-100 placeholder-glow">
                    <span className="placeholder flex-0 w-50"></span>
                  </div>
                  <div className="w-100 placeholder-glow">
                    <span className="placeholder flex-0 w-25"></span>
                  </div>
                </Fragment>
              )}
            </div>
            <div className="btn-settings">
              <button type="button">
                <SettingsIcon />
              </button>
            </div>
          </div>
          <div className="post-content">
            <div className="flex justify-between w-100">
              {post.date_create ? (
                <Fragment>
                  <div>
                    <span
                      className="text-xs"
                      style={{
                        marginRight: '19px',
                        color: '#AFAFAF'
                      }}
                    >
                      {parseDate(post.date_create)}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: '#AFAFAF' }}
                    >
                      4 мин на чтение
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="btn-text main-color font-semibold"
                    >
                      редактировать
                    </button>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="w-100 placeholder-glow">
                    <span
                      className="placeholder w-25"
                      style={{ marginRight: '1rem' }}
                    ></span>
                    <span className="placeholder w-25"></span>
                  </div>
                  <div className="w-100 placeholder-glow">
                    <span
                      className="placeholder w-50"
                      style={{ float: 'right' }}
                    ></span>
                  </div>
                </Fragment>
              )}
            </div>
            <div className="post-title w-100 placeholder-glow flex flex-column">
              {post.title ? (
                <span className="font-bold">{post.title}</span>
              ) : (
                <Fragment>
                  <span className="placeholder flex-0 w-75"></span>
                  <span className="placeholder flex-0 w-75"></span>
                </Fragment>
              )}
            </div>
            <div className="post-text flex flex-column">
              {post.content ? (
                <p>{post.content}</p>
              ) : (
                [...new Array(3)].map((item, index) => {
                  return (
                    <React.Fragment key={`post-placeholder-${index}`}>
                      <div className="w-100 placeholder-glow flex">
                        <span className="placeholder flex-auto w-25"></span>
                        <span className="placeholder flex-auto w-50"></span>
                        <span className="placeholder flex-auto w-25"></span>
                      </div>
                      <div className="w-100 placeholder-glow flex">
                        <span className="placeholder flex-auto w-25"></span>
                        <span className="placeholder flex-auto w-25"></span>
                        <span className="placeholder flex-auto w-50"></span>
                      </div>
                      <div className="w-100 placeholder-glow flex">
                        <span className="placeholder flex-auto w-50"></span>
                        <span className="placeholder flex-auto w-25"></span>
                        <span className="placeholder flex-auto w-25"></span>
                      </div>
                      <div className="w-100 placeholder-glow flex">
                        <span className="placeholder flex-0 w-25"></span>
                        <span className="placeholder flex-0 w-50"></span>
                      </div>
                    </React.Fragment>
                  );
                })
              )}
            </div>
          </div>
          <div className="post-actions flex">
            <button
              className="flex-1 flex items-center justify-center p-0"
              type="button"
            >
              <div className="flex flex-column">
                <LikeIcon />
                <span className="white-color font-semibold font-sm">
                  0
                </span>
              </div>
            </button>
            <button
              className="flex-1 flex items-center justify-center p-0"
              type="button"
            >
              <div className="flex flex-column">
                <CommentIcon />
                <span className="white-color font-semibold font-sm">
                  0
                </span>
              </div>
            </button>
            <button
              className="flex-1 flex items-center justify-center p-0"
              type="button"
            >
              <div className="flex flex-column">
                <ShareIcon />
                <span className="white-color font-semibold font-sm">
                  0
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="post-addition bg-white">
          <div className="post-header flex">
            <div className="post-avatar rounded-circle flex-0 cursor-pointer">
              {author.photo_avatar && (
                <img src={author.photo_avatar} alt={author.about} />
              )}
            </div>
            <div className="flex flex-column w-100 self-center">
              {author.id ? (
                <Fragment>
                  <span
                    className="font-semibold cursor-pointer"
                    style={{ marginBottom: '7px' }}
                  >
                    {author.first_name} {author.last_name}
                  </span>
                  <div>
                    <span className="font-semibold main-color text-sm cursor-pointer">
                      Follow
                      <PlusIcon />
                    </span>
                    <span className="font-semibold main-color text-sm">
                      {authorSubs === 1
                        ? `${authorSubs} follower`
                        : `${authorSubs} followers`}
                    </span>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="w-100 placeholder-glow">
                    <span className="placeholder flex-0 w-50"></span>
                  </div>
                  <div className="w-100 placeholder-glow">
                    <span className="placeholder flex-0 w-25"></span>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
          <div className="post-content">
            <div className="post-text flex flex-column">
              {author.about ? (
                <Fragment>
                  <span className="text-sm">{author.about}</span>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="w-100 placeholder-glow flex">
                    <span className="placeholder flex-1 w-25"></span>
                    <span className="placeholder flex-1 w-50"></span>
                    <span className="placeholder flex-1 w-25"></span>
                  </div>
                  <div className="w-100 placeholder-glow flex">
                    <span className="placeholder flex-0 w-25"></span>
                    <span className="placeholder flex-0 w-50"></span>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
