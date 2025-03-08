import { useEffect, useState } from "react";
import http from "../http";
import Welcome from "../components/Welcome";

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  //We will call api at component did mount
  useEffect(() => {
    http
      .get("/api/v1/auth/profile")
      .then((res) => {
        setProfileData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Welcome name={profileData.name} email={profileData.email} />
      <p>id: {profileData.id}</p>
      <p>name: {profileData.name}</p>
      <p>email: {profileData.email}</p>
      <p>
        User Photo: <img width={70} height={70} src={profileData.avatar} />
      </p>
      <p>Last updated: {profileData.updatedAt} </p>
    </div>
  );
};

export default Profile;
