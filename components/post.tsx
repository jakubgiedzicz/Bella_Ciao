import styles from '../styles/blog.module.css'

interface postData {
    props: {
      id: number,
      date: string,
      title: string,
      description: string,
    }}

export default function Post(argArray:postData): JSX.Element {
  return (
    <div className={styles.blog_post}>
      <div className={styles.blog_post_text}>
      <div className={styles.blog_post_info}>
        <h4 className={styles.post_date}>{argArray.props.date}</h4>
        <h2 className={styles.post_title}>{argArray.props.title}</h2>
      </div>
      <h5 className={styles.post_desc}>{argArray.props.description}</h5>
      </div>
    </div>
  )
}