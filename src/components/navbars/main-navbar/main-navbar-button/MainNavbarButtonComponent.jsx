/* eslint-disable react/prop-types */

function MainNavbarButtonComponent({ text, img, alt , onClick}) {
  return (
    <li onClick={()=>onClick()}>
      <span>{text}</span>
      <img src={img} alt={alt} />
    </li>
  );
}

export default MainNavbarButtonComponent;
