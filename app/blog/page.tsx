"use client";
import Image from 'next/image';
import '../../styles/blog.css'
import next_img from '../../public/next.png'
import blog1 from '../../public/blog1.jpg'
export default function Blog(){
  return(
    <main>
      <section className='blog-intro-img'>
        <Image src={next_img} alt='next and react logo'/>
      </section>
      <section className='blog-intro'>
        <div className='blog-intro-wrap'>
          <h1>This page is dedicated to documentation of 
            progress made on creating this app</h1>
        </div>
      </section>
      <section className='blog-posts-wrap'>
        <div className='blog-post'>
          <div className='blog-post-text'>
          <p>
            <h4 className='post-date'>14/06/23 15:10</h4>
            <h2 className='post-title'>Blog page</h2>
          </p>
          <h5 className='post-desc'>Blog page comes to life - that&#39;s pretty much it.</h5>
          </div>
          <div className='blog-post-img'>
            <Image src={blog1} alt='first blog img'/>
          </div>
        </div>
        <div className='blog-post'>
          aha
        </div>
      </section>
    </main>
  )
}