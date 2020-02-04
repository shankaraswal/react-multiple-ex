import React, { Component } from 'react'

export class CopyArea extends Component {
  render() {
    return (
      <section class="pb-0">
      <div class="container">
        <div class="row align-items-end gutter-1">
          <div class="col-md-8">
            <h2>Blog Posts &amp; News</h2>
          </div>
          <div class="col-md-4 text-md-right">
            <a href="blog-posts.html" class="action eyebrow underline">View All</a>
          </div>
        </div>
        <div class="row gutter-3">
          <div class="col-md-6 col-lg-4">
            <div class="card card-post">
              <figure class="equal equal-50">
                <a class="image image-fade" href="post.html" style="background-image: url(assets/images/news-1.jpg)"></a>
              </figure>
              <div class="card-body">
                <span class="eyebrow text-muted">22 March 2019</span>
                <h4 class="card-title"><a href="post.html">The Shoes That will Instantly Update Any Outfit</a></h4>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card card-post">
              <figure class="equal equal-50">
                <a class="image image-fade" href="post.html" style="background-image: url(assets/images/news-2.jpg)"></a>
              </figure>
              <div class="card-body">
                <span class="eyebrow text-muted">22 March 2019</span>
                <h4 class="card-title"><a href="post.html">The Shoes That will Instantly Update Any Outfit</a></h4>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card card-post">
              <figure class="equal equal-50">
                <a class="image image-fade" href="post.html" style="background-image: url(assets/images/news-3.jpg)"></a>
              </figure>
              <div class="card-body">
                <span class="eyebrow text-muted">22 March 2019</span>
                <h4 class="card-title"><a href="post.html">The Shoes That will Instantly Update Any Outfit</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default CopyArea
