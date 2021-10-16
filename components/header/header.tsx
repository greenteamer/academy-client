import Link from "next/link";

export const Header = () => {
  return (
    <header className="component-header">
      <div className="container">
        <div className="row align-items-md-center justify-content-center justify-content-md-between">
          <div className="col-md-3 col-6">
            <Link href="/">
              <a className="logo-header">
                <img src="img/logo.svg" alt="" />
              </a>
            </Link>
          </div>
          <div className="col-md-3 col-6 text-end pl-50">
            <button type="button" className="btn btn-user btn-outline-light">
              Регистрация и вход
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
