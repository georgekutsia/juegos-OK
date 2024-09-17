/* eslint-disable react/prop-types */

function MainNavbarButtonComponent({ text, img, alt }) {
  return (
    <li>
      <span>{text}</span>
      <img src={img} alt={alt} />
    </li>
  );
}

export default MainNavbarButtonComponent;
