import data from "../AboutMe/iconData";
import { FaAws, FaNodeJs, FaReact, FaSass, FaTimes } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiJest,
  SiMysql,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import styles from "../../styles/AboutMe.module.scss";

interface IIcon {
  name: string;
}

export const Icon = ({ name }: IIcon) => {
  const renderIcon = () => {
    switch (name) {
      case "React":
        return (
          <FaReact className={styles.AboutMe__description__technology__react} />
        );
        break;
      case "JavaScript":
        return (
          <SiJavascript
            className={styles.AboutMe__description__technology__js}
          />
        );
        break;
      case "TypeScript":
        return (
          <SiTypescript
            className={styles.AboutMe__description__technology__ts}
          />
        );
        break;
      case "SASS":
        return (
          <FaSass className={styles.AboutMe__description__technology__sass} />
        );
        break;
      case "Tailwind":
        return (
          <SiTailwindcss
            className={styles.AboutMe__description__technology__tailwind}
          />
        );
        break;
      case "Styled Componets":
        return (
          <SiStyledcomponents
            className={
              styles.AboutMe__description__technology__styledComponents
            }
          />
        );
        break;
      case "Node":
        return (
          <FaNodeJs className={styles.AboutMe__description__technology__node} />
        );
        break;
      case "Express":
        return (
          <SiExpress
            className={styles.AboutMe__description__technology__express}
          />
        );
        break;
      case "MySql":
        return (
          <SiMysql className={styles.AboutMe__description__technology__mySql} />
        );
        break;
      case "Jest":
        return (
          <SiJest className={styles.AboutMe__description__technology__jest} />
        );
        break;
      case "AWS":
        return (
          <FaAws className={styles.AboutMe__description__technology__aws} />
        );
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles.AboutMe__description__technology__iconContainer}>
      {renderIcon()}
      <p>{name}</p>
    </div>
  );
};
