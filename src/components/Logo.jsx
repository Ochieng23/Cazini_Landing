import Image from "next/image";
import logo from "../images/5.png";

export function Logo(props) {
  return (
    <img
      className="m-2"
      src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1721556395/5_auttdo.png"
      alt="Logo"
      width={100}
      height={90}
    />
  );
}
