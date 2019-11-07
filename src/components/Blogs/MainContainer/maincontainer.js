import React, { Component } from 'react'

export class maincontainer extends Component {
    render() {
        return (
            <section id="main-container">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">

                            <div className="post">

                                <div className="post-image-wrapper">
                                    <img src="./images/blog/blog1.jpg" className="img-fluid" alt="" />
                                    <span className="blog-date"><a href="#"> May 03, 2015</a></span>
                                </div>
                                <div className="post-header clearfix">
                                    <h2 className="post-title">
                                        <a href="blog-item.html">Over the year we have lots of experience</a>
                                    </h2>
                                    <div className="post-meta">
                                        <span className="post-meta-author">Posted by <a href="#"> Admin</a></span>
                                        <span className="post-meta-cats">in <a href="#"> News</a></span>
                                        <div className="float-right">

                                            <span className="post-meta-comments"><a href="#"><i className="fa fa-comment-o"></i> 11</a></span>
                                            <span className="post-meta-hits"><a href="#"><i className="fa fa-heart-o"></i> 62</a></span>
                                        </div>

                                    </div>
                                </div>
                                <div className="post-body">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                        in some form, by injected humour, or randomised words which don’t look even slightly believable. If you
                                        are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in
                                        the middle dolor sit amet.</p>
                                </div>
                                <div className="post-footer">
                                    <a href="blog-item.html" className="btn btn-primary">Continue Reading <i
                                            className="fa fa-angle-double-right">&nbsp;</i></a>
                                </div>
                            </div>

                            <div className="post">

                                <div className="post-image-wrapper">
                                    <div className="video-embed">

                                        <iframe src="//player.vimeo.com/video/72266001?title=0&amp;byline=0&amp;portrait=0&amp;color=8aba56"
                                            width="500" height="281" allowFullScreen></iframe>
                                    </div>
                                    <span className="blog-date"><a href="#"> May 19, 2015</a></span>
                                </div>
                                <div className="post-header clearfix">
                                    <h2 className="post-title">
                                        <a href="blog-item.html">Dolorem animi nisi autem blanditiis</a>
                                    </h2>
                                    <div className="post-meta">
                                        <span className="post-meta-author">Posted by <a href="#"> Admin</a></span>
                                        <span className="post-meta-cats">in <a href="#"> News</a></span>
                                        <div className="float-right">

                                            <span className="post-meta-comments"><a href="#"><i className="fa fa-comment-o"></i> 11</a></span>
                                            <span className="post-meta-hits"><a href="#"><i className="fa fa-heart-o"></i> 62</a></span>
                                        </div>

                                    </div>
                                </div>
                                <div className="post-body">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                        in some form, by injected humour, or randomised words which don’t look even slightly believable. If you
                                        are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in
                                        the middle dolor sit amet.</p>
                                </div>
                                <div className="post-footer">
                                    <a href="blog-item.html" className="btn btn-primary">Continue Reading <i
                                            className="fa fa-angle-double-right">&nbsp;</i></a>
                                </div>
                            </div>

                            <div className="post">

                                <div className="post-image-wrapper">
                                    <img src="./images/blog/blog2.jpg" className="img-fluid" alt="" />
                                    <span className="blog-date"><a href="#"> May 23, 2015</a></span>
                                </div>
                                <div className="post-header clearfix">
                                    <h2 className="post-title">
                                        <a href="blog-item.html">Many web sites still in their infancy</a>
                                    </h2>
                                    <div className="post-meta">
                                        <span className="post-meta-author">Posted by <a href="#"> Admin</a></span>
                                        <span className="post-meta-cats">in <a href="#"> News</a></span>
                                        <div className="float-right">

                                            <span className="post-meta-comments"><a href="#"><i className="fa fa-comment-o"></i> 11</a></span>
                                            <span className="post-meta-hits"><a href="#"><i className="fa fa-heart-o"></i> 62</a></span>
                                        </div>

                                    </div>
                                </div>
                                <div className="post-body">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                        in some form, by injected humour, or randomised words which don’t look even slightly believable. If you
                                        are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in
                                        the middle dolor sit amet.</p>
                                </div>
                                <div className="post-footer">
                                    <a href="blog-item.html" className="btn btn-primary">Continue Reading <i
                                            className="fa fa-angle-double-right">&nbsp;</i></a>
                                </div>
                            </div>

                            <nav>
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <i className="fa fa-angle-left"></i>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">

                            <div className="sidebar sidebar-right">

                                <div className="widget widget-search">
                                    <h3 className="widget-title">Search</h3>
                                    <div id="search">
                                        <input className="form-control form-control-lg" placeholder="search" type="search" />
                                    </div>
                                </div>

                                <div className="widget widget-tab">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item"><a className="nav-link active" href="#popular-tab" data-toggle="tab">popular</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#recent-tab" data-toggle="tab">recent</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#comments-tab" data-toggle="tab">comments</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="popular-tab">
                                            <ul className="posts-list list-unstyled clearfix">
                                                <li>
                                                    <div className="posts-thumb float-left">
                                                        <a href="#">
                                                            <img alt="img" src="./images/blog/blog1.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <h4 className="entry-title"><a href="#">Bulgaria claims to find Europe's 'oldest town'</a>
                                                        </h4>
                                                        <p className="post-meta">
                                                            <span className="post-meta-author">Posted by <a href="#"> Admin</a></span>
                                                            <span className="post-meta-date"><a href="#"> <i className="fa fa-clock-o"></i> November 14</a>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>
                                                <li>
                                                    <div className="posts-thumb float-left">
                                                        <a href="#">
                                                            <img alt="img" src="./images/blog/blog2.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <h4 className="entry-title">
                                                            <a href="#">Lorem ipsum dolor sit amet, consectetur claims</a>
                                                        </h4>
                                                        <p className="post-meta">
                                                            <span className="post-meta-author">Posted by <a href="#"> Admin</a></span>
                                                            <span className="post-meta-date"><a href="#"> <i className="fa fa-clock-o"></i> October 19</a>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>
                                                <li>
                                                    <div className="posts-thumb float-left">
                                                        <a href="#">
                                                            <img alt="img" src="./images/blog/blog3.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <h4 className="entry-title">
                                                            <a href="#">Should You Ever Skip Giving A Tip?</a>
                                                        </h4>
                                                        <p className="post-meta">
                                                            <span className="post-meta-author">Posted by <a href="#"> Admin</a></span>
                                                            <span className="post-meta-date"><a href="#"> <i className="fa fa-clock-o"></i> November 21</a>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tab-pane fade" id="recent-tab">
                                            <ul className="posts-list list-unstyled clearfix">
                                                <li>
                                                    <div className="posts-thumb float-left">
                                                        <a href="#">
                                                            <img alt="img" src="./images/blog/blog3.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <h4 className="entry-title"><a href="#">Bulgaria claims to find Europe's 'oldest town'</a>
                                                        </h4>
                                                        <p className="post-meta">
                                                            <span className="post-meta-author">Posted by <a href="#"> Admin</a></span>
                                                            <span className="post-meta-date"><a href="#"> <i className="fa fa-clock-o"></i> November 21</a>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>
                                                <li>
                                                    <div className="posts-thumb float-left">
                                                        <a href="#">
                                                            <img alt="img" src="./images/blog/blog1.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <h4 className="entry-title"><a href="#">Bulgaria claims to find Europe's 'oldest town'</a>
                                                        </h4>
                                                        <p className="post-meta">
                                                            <span className="post-meta-author">Posted by <a href="#"> Admin</a></span>
                                                            <span className="post-meta-date"><a href="#"> <i className="fa fa-clock-o"></i> October 19</a>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tab-pane fade" id="comments-tab">
                                            <ul className="posts-list list-unstyled clearfix">
                                                <li>
                                                    <div className="posts-avator float-left">
                                                        <a href="#">
                                                            <img alt="img" src="./images/blog/avator1.png" />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <h4 className="entry-title"><a href="#">If you are going to use a passage of Lorem Ipsum</a>
                                                        </h4>
                                                        <p className="post-meta">
                                                            <span className="post-meta-author">Posted by <a href="#"> John</a></span>
                                                            <span className="post-meta-date"><a href="#"> <i className="fa fa-clock-o"></i> November 21</a>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>
                                                <li>
                                                    <div className="posts-avator float-left">
                                                        <a href="#">
                                                            <img alt="img" src="./images/blog/avator2.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <h4 className="entry-title"><a href="#">you need to be sure there isn’t anything embarra</a>
                                                        </h4>
                                                        <p className="post-meta">
                                                            <span className="post-meta-author">Posted by <a href="#"> Tina</a></span>
                                                            <span className="post-meta-date"><a href="#"> <i className="fa fa-clock-o"></i> October 18</a>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget widget-categories">
                                    <h3 className="widget-title">Blog Categories</h3>
                                    <ul className="category-list clearfix">
                                        <li><a href="#">Objects</a><span className="posts-count"> (19)</span></li>
                                        <li><a href="#">Technology</a><span className="posts-count"> (09)</span></li>
                                        <li><a href="#">Photography</a><span className="posts-count"> (13)</span></li>
                                        <li><a href="#">Fashion</a><span className="posts-count"> (10)</span></li>
                                        <li><a href="#">Realtough</a><span className="posts-count"> (14)</span></li>
                                        <li><a href="#">Architecture</a><span className="posts-count"> (11)</span></li>
                                    </ul>
                                </div>

                                <div className="widget widget-tags">
                                    <h3 className="widget-title">Popular Tags</h3>
                                    <ul className="list-unstyled clearfix">
                                        <li><a href="#">iMac</a></li>
                                        <li><a href="#">Black and Green</a></li>
                                        <li><a href="#">Crative</a></li>
                                        <li><a href="#">Momentum</a></li>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Cellular</a></li>
                                        <li><a href="#">Niche</a></li>
                                    </ul>
                                </div>

                                <div className="widget">
                                    <h3 className="widget-title">Text Widgets</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normalopposed.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}

export default maincontainer
