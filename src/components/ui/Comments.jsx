import { useEffect, useState, lazy, Suspense } from 'react';
import '../../scss/components/comments.scss';

import CommentsIcon from '../../images/icons/comments.png';

const CommentsItem = lazy(() => import('./CommentsItem'));

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState([]);

  const getMoreComments = () => {
    let page = Math.floor(comments.length / 2) + 1;

    if (!(comments.length >= totalComments)) {
      fetch(
        `https://api.stage.targemy.com/v1/comments?type=post&filter%5Bpost_id%5D=3&expand=post,card&sort=id&page=${page}&per-page=2`
      )
        .then((response) => response.json())
        .then((data) => {
          setComments([...comments, ...data.items]);
          setTotalComments(data._meta.totalCount);
        });
    }
  };

  useEffect(() => {
    fetch(
      'https://api.stage.targemy.com/v1/comments?type=post&filter%5Bpost_id%5D=3&expand=post,card&sort=id&page=1&per-page=2'
    )
      .then((response) => response.json())
      .then((data) => {
        setComments(data.items);
        setTotalComments(data._meta.totalCount);
        console.log(data);
      });
  }, []);

  return (
    <div className="comments">
      <div className="comments-amount flex items-center">
        <img src={CommentsIcon} alt="Коментарии" />
        <span className="font-semibold text-sm">
          {totalComments ? totalComments : 0} Комментариев
        </span>
      </div>
      <div className="comments-input">
        <input type="text" placeholder="Написать коментарий" />
      </div>
      <div className="comments-list">
        {comments ? (
          comments.map((item) => {
            return (
              <div
                key={`user-comment-${item.id}`}
                className="comments-border-wrapper"
              >
                <Suspense fallback={<div>Загрузка</div>}>
                  <CommentsItem props={item} />
                </Suspense>
              </div>
            );
          })
        ) : (
          <div>Загрузка</div>
        )}
      </div>
      <div className="comments-button">
        <button
          type="button"
          className="btn-text font-semibold main-color"
          onClick={getMoreComments}
        >
          Показать еще
        </button>
      </div>
    </div>
  );
}
