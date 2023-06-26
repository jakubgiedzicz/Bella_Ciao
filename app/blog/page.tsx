import Image from 'next/image';
import styles from '../../styles/blog.module.css'
import next_img from '../../public/next.png'
import Post from '@/components/post';
export default function Blog(){
  const postData: { date: string, title: string, description: string }[] = [
    {
      date: '14/06/23 15:10',
      title: 'Blog page',
      description: 'Blog page comes to life - that&#39;s pretty much it.'
    },
    {
      date: '15/06/23 12:22',
      title: 'RWD',
      description: 'Blog page responsiveness added, navbar element fixed.'
    }
  ]
  console.log(postData, typeof(postData))
  return(
    <main className={styles.light_bg}>
      <section className={styles.blog_intro_img}>
        <Image src={next_img} alt='next and react logo'/>
      </section>
      <section className={styles.blog_intro}>
        <div className={styles.blog_intro_wrap}>
          <h1>This page is dedicated to documentation of 
            progress made on creating this app</h1>
        </div>
      </section>
      <section className={styles.blog_posts_wrap}>
        <Post argArray={postData}/>
        <div className={styles.blog_post}>
          <div className={styles.blog_post_text}>
          <div className={styles.blog_post_info}>
            <h4 className={styles.post_date}>15/06/23 12:22</h4>
            <h2 className={styles.post_title}>RWD</h2>
          </div>
          <h5 className={styles.post_desc}>Blog page responsiveness added, navbar element fixed.</h5>
          </div>
        </div>
        <div className={styles.blog_post}>
          <div className={styles.blog_post_text}>
          <div className={styles.blog_post_info}>
            <h4 className={styles.post_date}>16/06/23 13:07</h4>
            <h2 className={styles.post_title}>NextJS specifics</h2>
          </div>
          <h5 className={styles.post_desc}>Switched &quot;a&quot; tags for Link components,
          learned when to use client/server.
          </h5>
          </div>
        </div>
        <div className={styles.blog_post}>
          <div className={styles.blog_post_text}>
          <div className={styles.blog_post_info}>
            <h4 className={styles.post_date}>20/06/23 11:29</h4>
            <h2 className={styles.post_title}>Database</h2>
          </div>
          <h5 className={styles.post_desc}>Populated the database</h5>
          </div>
        </div>
        <div className={styles.blog_post}>
          <div className={styles.blog_post_text}>
          <div className={styles.blog_post_info}>
            <h4 className={styles.post_date}>26/06/23 17:43</h4>
            <h2 className={styles.post_title}>Modules and more</h2>
          </div>
          <h5 className={styles.post_desc}>Remade css, refactoring few components for SSR. Blog needs fixing</h5>
          </div>
        </div>
      </section>
    </main>
  )
}