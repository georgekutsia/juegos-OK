// import React from 'react'
import "./profileScreen.css";
import ProfileComponent from "../../components/profile/ProfileComponent";
import { Context } from "../../shared/context";
import { useContext } from "react";

function ProfileScreen() {
  const { profile } = useContext(Context);
  return (
    <div className="profile-screen">
      {profile && (
        <>
        <ProfileComponent
            name={"George"}
            text={"WD."}
            img={
              "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726531646/giopixxel_q22dcc.png"
            }
            aosDelay={100}
            extraInfo

          />
          <ProfileComponent
            name={"Oscar"}
            text={"Beta Tester"}
            img={
              "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729880791/osc_pbvo6n.png"
            }
            aosDelay={300}
          />
          <ProfileComponent
            name={"Oliver"}
            text={"Beta Tester"}
            img={
              "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1729880785/ali_kkpyw8.png"
            }
            aosDelay={500}

          />
        </>
      )}
    </div>
  );
}

export default ProfileScreen;
