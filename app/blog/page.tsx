import Image from 'next/image';
import styles from '../../styles/blog.module.css'
import next_img from '../../public/next.png'
import Post from '@/components/post';
export default function Blog(){
  const postData: { id: number, date: string, title: string, description: string }[] = [
    {
      id: 1,
      date: '14/06/23 15:10',
      title: 'Blog page',
      description: "Blog page comes to life - that's pretty much it."
    },
    {
      id: 2,
      date: '15/06/23 12:22',
      title: 'RWD',
      description: 'Blog page responsiveness added, navbar element fixed.'
    },
    {
      id: 3,
      date: '16/06/23 13:07',
      title: 'NextJS specifics',
      description: "Switched 'a' tags for Link components, learned when to use client/server."
    },
    {
      id: 4,
      date: '20/06/23 11:29',
      title: 'Database',
      description: 'Populated the database'
    },
    {
      id: 5,
      date: '26/06/23 17:43',
      title: 'Modules and more',
      description: 'Remade css, refactoring few components for SSR. Blog needs fixing'
    },
    {
      id: 6,
      date: '27/06/2023 10:33',
      title: 'Post component',
      description: 'Fixed types on post component'
    },
    {
      id: 7,
      date: '28/06/2023 13:17',
      title: 'Database connection',
      description: "Managed to connect to MongoDB, wasted a lot of time using getServerSideProps (doesn't work in app router)"
    },
    {
      id: 8,
      date: '28/06/2023 16:54',
      title: 'Order page',
      description: 'Order page refactored (types missing), fetching data from the DB'
    }
  ]
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
        {postData.map((object) => (
          <Post props={object} key={object.id}/>
        ))}
      </section>
    </main>
  )
}