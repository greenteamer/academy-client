export const Footer = () => {
  return (
    <footer className="footer m-t-section m-md-t-section bg-gray">
      <div className="footer-content container">
        <div className="row">
          <div className="footer-title col-md-10">
            <h2>
              Академия спортивной экспертизы —
              <span className="d-block">
                Инсайты от лучших из лучших. Для жизни, карьеры и бизнеса.
              </span>
            </h2>
          </div>
          <div className="footer-soc d-none d-md-block col-lg-2 justify-content-md-end text-end">
            <div className="soc-items d-flex">
              <a href="">
                <i className="icon-instagram" aria-hidden="true" />
              </a>
              <a href="">
                <i className="icon-vk" aria-hidden="true" />
              </a>
              <a href="">
                <i className="icon-facebook" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-menu">{/* {% footer_menu request %} */}</div>
            <div className="privacy-link">
              {/* {% privacy_menu request %} */}
            </div>
            <div className="footer-soc d-block d-md-none col-lg-2 justify-content-md-end text-end">
              <div className="soc-items d-flex">
                <a href="">
                  <i className="icon-instagram" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="icon-vk" aria-hidden="true" />
                </a>
                <a href="">
                  <i className="icon-facebook" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="d-block d-md-none logo-partner d-flex">
              <div className="logo-partner-item logo-text">18+</div>
              <div className="logo-partner-item log-img">
                <img src="/img/logo-gambling.svg" alt="" />
              </div>
              <div className="logo-partner-item log-img">
                <img src="/img/logo-aware.svg" alt="" />
              </div>
            </div>
            <div className="copyright d-none d-md-block">
              <span className="text-uppercase">
                © Академия спортивной экспертизы, 2021
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-text ps-md-0">
              <p>
                Сетевое издание «Рейтинг Букмекеров» (адрес в сети Интернет -
                https://bookmaker-ratings.ru) (далее - Издание)
                <br />
                Учредитель Издания: Мирзоян Сергей Владимирович
                <br />
                Главный редактор Издания: Бодров Андрей Константинович
                <br />
                Телефон: 8 800 777 76 76
                <br />
                E-mail: support@bookmaker-ratings.ru
                <br />
                Свидетельство о регистрации средств массовой информации: Эл
                ФС77-70265 выдано Федеральной службой по надзору в сфере связи,
                информационных технологий и массовых коммуникаций
                (Роскомнадзора) 10 июля 2017 г. Материалы сайта предназначены
                для лиц старше 18 лет (18+)
              </p>
              <p>
                Все материалы сайта доступны по лицензии Creative Commons
                Attribution 4.0 International. Вы должны указать имя автора
                (создателя) произведения (материала) и стороны атрибуции,
                уведомление об авторских правах, название лицензии, уведомление
                об оговорке и ссылку на материал, если они предоставлены вместе
                с материалом.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <div className="row align-items-center">
          <div className="col-md-6 d-none d-md-block">
            <div className="logo-partner d-flex">
              <div className="logo-partner-item logo-text">18+</div>
              <div className="logo-partner-item log-img">
                <img src="/img/logo-gambling.svg" alt="" />
              </div>
              <div className="logo-partner-item log-img">
                <img src="/img/logo-aware.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="payment-powered d-md-flex  justify-content-md-end">
              <div className="payment">
                <span className="text-uppercase">
                  <i className="icon-lock" aria-hidden="true" /> Безопасные
                  платежи
                </span>
                <div className="payment-logo d-flex">
                  <div className="payment-logo-item">
                    <img src="/img/payment/tinkoff.svg" alt="" />
                  </div>
                  <div className="payment-logo-item">
                    <img src="/img/payment/mastercard.svg" alt="" />
                  </div>
                  <div className="payment-logo-item">
                    <img src="/img/payment/visa.svg" alt="" />
                  </div>
                  <div className="payment-logo-item">
                    <img src="/img/payment/mir.svg" alt="" />
                  </div>
                  <div className="payment-logo-item">
                    <img src="/img/payment/google_pay.svg" alt="" />
                  </div>
                  <div className="payment-logo-item">
                    <img src="/img/payment/apple-pay.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="powered">
                <span className="text-uppercase">powered by</span>
                <div className="powered-logo">
                  <img src="/img/rb-logo.svg" alt="" />
                </div>
              </div>
              <div className="copyright d-block d-md-none">
                <span className="text-uppercase">
                  © Академия спортивной экспертизы, 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
