import styles from "./repository.module.css";
import iconFolder from "../../img/folder.png"

export function Repository(props) {

  return (
    <div className={styles.repository}>
      
      <div>
        <img src={iconFolder} alt="" />
        <h3>
          <a href={props.url}>{props.title}</a>
          </h3>
      </div>
      
      <p>{props.subTitle}</p>
      <span className={`styles.star-branch`}>
        <div className={styles.star}>
          <span>{props.star}</span>
        </div>
        <div className={styles.branch}>
          <span>{props.fork}</span>
        </div>
      </span>
      {props.language && (
        <div className={styles.language}>
          <span>{props.language}</span>
        </div>
      )}
    </div>
  );
}
