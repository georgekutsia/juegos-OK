// import React from 'react'
import "./portfolioScreen.css";
import ProfileComponent from "../../components/profile/ProfileComponent";
import "./portfolioScreen.css";
import { Context } from "../../shared/context";
import { useContext } from "react";

function PortfolioScreen() {
  const { profile } = useContext(Context);
  return (
    <div className="profile-screen">
      {profile && (
        <>
          <ProfileComponent
            name={"Antonio"}
            text={"Voy a matar a George por no recordar mi nombre"}
            img={
              "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726531400/antoniopixel_b25xdd.png"
            }
            aosDuration={100}
          />
          <ProfileComponent
            name={"Lizbeth"}
            text={"Hoy no puedo, mi frase favorita"}
            img={
              "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726531401/lizbethpixel_eawhru.png"
            }
            aosDuration={200}
          />
          <ProfileComponent
            name={"George"}
            text={"Hoy no puedo, mi frase favorita"}
            img={
              "https://res.cloudinary.com/dtv1oj9bq/image/upload/v1726531646/giopixxel_q22dcc.png"
            }
            aosDuration={300}
          />
        </>
      )}
    </div>
  );
}

export default PortfolioScreen;
