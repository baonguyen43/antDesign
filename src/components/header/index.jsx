import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { LOCATIONS } from 'constants/index';

import Loading from 'components/loading';
import {routers} from 'router/router';

function Header() {
  const profile = useSelector((state) => state.profileReducer.profile);
  const isLoading = useSelector((state) => state.profileReducer.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {routers.map((item) => {
                    if (item.children?.length) {
                      return (
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {item.name}
                          </Link>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            {item.children.map((child) => {
                              if (child.name) {
                                return (
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to={child.path}
                                    >
                                      {child.name}
                                    </Link>
                                  </li>
                                );
                              }

                              return null;
                            })}
                          </ul>
                        </li>
                      );
                    } else if (item.name) {
                      return (
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            aria-current="page"
                            to={item.path}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    }

                    return null;
                  })}
                </ul>

                <Link
                  class="navbar-brand d-flex align-items-center"
                  to={LOCATIONS.MY_PROFILE}
                >
                  <img
                    src={profile.avt}
                    alt="avatar"
                    width="50"
                    height="50"
                    class="d-inline-block align-text-top me-4 object-fit-cover border border-primary rounded-circle"
                  />
                  {profile.name}
                </Link>
              </div>
            </div>
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;
