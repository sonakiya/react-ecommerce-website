import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  {
  link: "#",
  iconName: "icofont-facebook",
  className: "facebook",
  },
  {
  link: "#",
  iconName: "icofont-twitter",
  className: "twitter",
  },
  {
  link: "#",
  iconName: "icofont-linkedin",
  className: "linkedin",
  },
  {
  link: "#",
  iconName: "icofont-instagram",
  className: "instagram",
  },
  {
  link: "#",
  iconName: "icofont-pinterest",
  className: "pinterest",
  },
  ];
  
  

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  // console.log(id)
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader
        title={"Single Blog Page"}
        curPage={"Blog / Blog Details "}
      ></PageHeader>

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                <ul className='lab-ul'>
                                   { 
                                    item.metaList.map((val,i)=>(
                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                    ))
                                   }
                               </ul>
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias commodi corporis perferendis quia itaque pariatur iste eum, sed in quo maxime reprehenderit nam vel aperiam fugiat neque ea cupiditate architecto at sint non tenetur accusantium. Voluptas beatae laborum atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate veniam consequatur odio nam cumque nihil. Aperiam quidem vero pariatur, nostrum asperiores unde veritatis dicta sequi, vitae necessitatibus ea et odio temporibus iure in neque dignissimos nemo voluptatibus doloremque explicabo!</p>
                                <blockquote>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus similique blanditiis error, sit amet itaque atque neque officiis sint quod dolorem ea odio recusandae. Molestias debitis facilis beatae, itaque sit aperiam placeat consectetur eveniet pariatur blanditiis. Minima, molestiae tenetur!</p>

                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                  </blockquote>
                                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias commodi corporis perferendis quia itaque pariatur iste eum, sed in quo maxime reprehenderit nam vel aperiam fugiat neque ea cupiditate architecto at sint non tenetur accusantium. Voluptas beatae laborum atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate veniam consequatur odio nam cumque nihil. Aperiam quidem vero pariatur, nostrum asperiores unde veritatis dicta sequi, vitae necessitatibus ea et odio temporibus iure in neque dignissimos nemo voluptatibus doloremque explicabo!</p>
                                  <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias commodi corporis perferendis quia itaque pariatur iste eum, sed in quo maxime reprehenderit nam vel aperiam fugiat neque ea cupiditate architecto at sint non tenetur accusantium. Voluptas beatae laborum atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate veniam consequatur odio nam cumque nihil. Aperiam quidem vero pariatur, nostrum asperiores unde veritatis dicta sequi, vitae necessitatibus ea et odio temporibus iure in neque dignissimos nemo voluptatibus doloremque explicabo!</p>
                                  

                                  <div className="video-thumb">
                                    <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                    <a href="https://www.youtube.com/watch?v=-4XpG5_Lj_o" className="video-button popup" target="_blank">
                                    <i className="icofont-ui-play"></i></a>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illum, hic amet fugiat porro, impedit cupiditate dolore necessitatibus suscipit quo nesciunt praesentium repellendus magnam minus pariatur. Fuga tenetur vero, perspiciatis officia provident unde, iste dignissimos laboriosam doloribus officiis voluptatibus eius, rem ipsam molestiae ratione maiores doloremque! Minus blanditiis a similique reiciendis excepturi, eum ex dicta nobis accusantium laudantium unde sint aliquam. Cum, quod aliquid rem harum similique tempora quasi sequi error aliquam. Necessitatibus nulla nobis et minus nemo exercitationem tempore maxime officia libero possimus, hic sapiente laboriosam laborum eaque pariatur!</p>

                                  <div className="tags-section">
                                    <ul className="tags lab-ul">
                                      <li>
                                        <a href="#">Agency</a>
                                      </li>
                                      <li>
                                        <a href="#">Business</a>
                                      </li>
                                      <li>
                                        <a href="#">Personal</a>
                                      </li>
                                    </ul>

                                    <ul className="lab-ul social-icons">
                                      {
                                       socialList.map((val,i)=>(
                                         <li key={i}>
                                          <a href="#" className={val.className}>
                                            <i className={val.iconName}></i>
                                          </a>
                                         </li>
                                       ))
                                      }
                                    </ul>
                            
                                  </div>

                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i>Previous Blog
                          </a>
                          <a href="#" className="title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste in accusamus.
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="next">
                          Next Blog<i className="icofont-double-right"></i>
                          </a>
                          <a href="#" className="title">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste in accusamus.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>


            <div className="col-lg-4 col-12">
              <aside>
                <Tags/>
                <PopularPost/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
