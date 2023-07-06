import Image from 'next/image';
import styles from '@/styles/blog.module.css'
import next_img from '@/public/next.png'
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
    },
    {
      id: 9,
      date: '29/06/2023 15:22',
      title: 'Types and DB',
      description: 'Declared types on few components/pages, added image links to DB'
    },
    {
      id: 10,
      date: '29/06/2023 17:19',
      title: 'Dynamic Route',
      description: 'Started working on dynamic routes for menu items'
    },
    {
      id: 11,
      date: '30/06/2023 13:26',
      title: 'Dynamic route /order/[name]',
      description: 'Getting data for a single item, styling'
    },
    {
      id: 12,
      date: '30/06/2023 16:45',
      title: '/order/[name]',
      description: 'Most of the page is done, disabled strictNullChecks'
    },
    {
      id: 13,
      date: '03/07/2023 12:30',
      title: '/order/[name]',
      description: 'Fixed page components - moving to new layout/header'
    },
    {
      id: 14,
      date: '03/07/2023 15:38',
      title: 'Layouts and more',
      description: 'Refactored the app folder structure to support two layouts (different styling and functionality), updated NextJS'
    },
    {
      id: 15,
      date: '04/07/2023 14:00',
      title: 'Header/Navbar',
      description: 'Refactoring navbar component for the shopping cart'
    },
    {
      id: 16,
      date: '05/07/2023 13:28',
      title: 'Header/Navbar, [name]',
      description: 'Navbar component RWD done, moving to [name] RWD'
    },
    {
      id: 17,
      date: '05/07/2023 15:28',
      title: '[name]',
      description: '[name] page now takes full item as prop, cart button adds items to sessionStorage'
    },
    {
      id: 18,
      date: '06/07/2023 11:49',
      title: 'sessionStorage',
      description: 'Shop-header now properly displays number of items, sessionStorage properly holds cart'
    },
    {
      id: 19,
      date: '06/07/2023 16:35',
      title: 'Cart',
      description: 'Cart styling/functionality halfway done'
    },
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