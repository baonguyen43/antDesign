import React from 'react';
import { useSelector } from 'react-redux';

import './profile.css';
import Loading from 'components/loading';

function MyProfile(props) {
  const profile = useSelector((state) => state.profileReducer.profile);
  const isLoading = useSelector((state) => state.profileReducer.isLoading);

  return (
    <section>
      <div className="box1 box">
        {
          isLoading ? <Loading/> : (
            <div className="content">
              <div className="image">
                <img
                  src={profile.avt}
                  alt="Profile Image"
                />
              </div>
              <div className="level">
                <p>PRO</p>
              </div>
              <div className="text">
                <p className="name">{profile.name}</p>
                <p className="job_title">{profile.email}</p>
                <p className="job_title">{profile.phone}</p>
                <p className="job_discription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                  atque, ipsam a amet laboriosam eligendi.
                </p>
              </div>
              <div className="icons">
                <button>
                  <ion-icon name="logo-dribbble" />
                </button>
                <button>
                  <ion-icon name="logo-instagram" />
                </button>
                <button>
                  <ion-icon name="logo-twitter" />
                </button>
                <button>
                  <ion-icon name="logo-linkedin" />
                </button>
                <button>
                  <ion-icon name="logo-facebook" />
                </button>
                <button>
                  <ion-icon name="logo-behance" />
                </button>
              </div>
              <div className="button">
                <div>
                  <button className="message" type="button">
                    Message
                  </button>
                </div>
                <div>
                  <button className="connect" type="button">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default MyProfile;
