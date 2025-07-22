import styles from './article.module.css';

function Article({ title, backgroundColor }) {
  return (
    
    <div
      className={styles.article}
      style={{ backgroundColor: backgroundColor }}
    >
      <h3 className={styles.text}>{title}</h3>
    </div> 
  );
}

export default Article;
