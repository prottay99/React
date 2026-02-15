import { nanoid } from "nanoid";
import footerApi from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_icon_part grid grid-three-cols">
          {footerApi.map((curElm) => {
            const { icon, title, details } = curElm;
            return (
              <li key={nanoid()}>
                <div className="icon">
                  <div className="footer-icon">{footerIcon[icon]}</div>
                  <div className="footer-content">
                    <h4>{title}</h4>
                    <p>{details}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
        <div className="copyright">© 2026 John Doe. All rights reserved.</div>
      </div>
    </footer>
  );
};
