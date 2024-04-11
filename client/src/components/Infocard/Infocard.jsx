import React, { useEffect, useState } from "react";
import "./Infocard.css";

import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../Api/UserRequest";
import { logout } from "../../actions/AuthAction";


const Infocard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();

  const profileUserId = params.id;
  const [profileUser, setProfleUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user.id) {
        setProfleUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfleUser(profileUser);
      }
    };

    fetchProfileUser();
  }, [user]);

  //logout
  const handleLogout=()=>{
    dispatch(logout())
  }

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info </h4>
       {user._id === profileUserId?<ProfileModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          data={profileUser}
        />:""}
        
      </div>
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in</b>
        </span>
        <span>{profileUser.livesin}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at</b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>
      <button className="button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Infocard;
