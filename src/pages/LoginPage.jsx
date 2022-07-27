import '../scss/components/login.scss';

import LoginIcon from '../images/icons/login.png';
import CloseIcon from '../images/icons/close_button.png';

export default function LoginPage() {
  return (
    <div className="layout container flex justify-center">
      <div className="login">
        <div className="login-title flex">
          <div>
            <img src={LoginIcon} alt="Авторизация" />
          </div>
          <div className="flex-1 flex items-center">
            <span className="font-bold">Авторизация</span>
          </div>
          <div className="login-exit">
            <button type="button" className="btn-text p-0">
              <img src={CloseIcon} alt="Закрыть окно" />
            </button>
          </div>
        </div>
        <div className="login-form">
          <form>
            <label className="font-bold" for="login">
              Логин:
            </label>
            <input
              className="w-100"
              type="text"
              id="login"
              name="login"
            />
            <label className="font-bold" for="password">
              Пароль:
            </label>
            <input
              className="w-100"
              type="password"
              id="password"
              name="password"
            />
            <button
              type="button"
              className="btn login-submit font-bold"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
