import styles from '../styles/blog.module.css'

interface postData {
  date: string,
  title: string,
  description: string,
}

export default function Post(argArray:postData[]) {
  return (
    <div className={styles.blog_post}>
      <div className={styles.blog_post_text}>
      <div className={styles.blog_post_info}>
        <h4 className={styles.post_date}>{argArray[0].date}</h4>
        <h2 className={styles.post_title}>{argArray[0].title}</h2>
      </div>
      <h5 className={styles.post_desc}>{argArray[0].description}</h5>
      </div>
    </div>
  )
}