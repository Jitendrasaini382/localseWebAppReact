import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from '../component/Header';
import Footer from '../component/Footer';

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;
  const [readingTime, setReadingTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (blog?.content) {
      const wordCount = blog.content.split(' ').length;
      const time = Math.ceil(wordCount / 200);
      setReadingTime(time);
    }
    setIsLoading(false);
  }, [blog]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBackToBlogs = () => {
    navigate('/blogs');
  };

  const formatContent = (content) => {
    return content.split('\n').filter(p => p.trim()).map((paragraph, index) => (
      <p key={index} className="mb-3" style={{ 
        lineHeight: '1.6',
        color: '#2c3e50'
      }}>
        {paragraph.trim()}
      </p>
    ));
  };

  if (isLoading) {
    return (
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="spinner-border text-white" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container">
          <div className="card border-0 shadow" style={{ borderRadius: '15px', maxWidth: '400px', margin: '0 auto' }}>
            <div className="card-body text-center p-4">
              <i className="bi bi-exclamation-triangle text-warning" style={{ fontSize: '3rem' }}></i>
              <h4 className="mt-3 mb-3">Blog Not Found</h4>
              <p className="text-muted mb-3">The blog post doesn't exist.</p>
              <button 
                className="btn btn-primary"
                onClick={handleBackToBlogs}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Back to Blogs
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh'
    }}>
      <NavigationBar />
      
      <div className="container py-4">
        {/* Breadcrumb */}
        <nav className="mb-3">
          <ol className="breadcrumb bg-transparent">
            <li className="breadcrumb-item">
              <button 
                className="btn btn-link text-white p-0 text-decoration-none"
                onClick={() => navigate('/')}
              >
                Home
              </button>
            </li>
            <li className="breadcrumb-item">
              <button 
                className="btn btn-link text-white p-0 text-decoration-none"
                onClick={handleBackToBlogs}
              >
                Blog
              </button>
            </li>
            <li className="breadcrumb-item active text-white-50">
              {blog.title.length > 40 ? blog.title.substring(0, 40) + '...' : blog.title}
            </li>
          </ol>
        </nav>

        {/* Blog Content */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow" style={{ 
              background: 'rgba(255, 255, 255, 0.98)',
              borderRadius: '15px'
            }}>
              <div className="card-body p-4">
                {/* Header */}
                <div className="mb-4">
                  <span className="badge bg-primary mb-3">Blog Post</span>
                  <h1 className="h3 fw-bold mb-3" style={{ color: '#2c3e50' }}>
                    {blog.title}
                  </h1>
                  
                  {/* Meta Info */}
                  <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle me-2 bg-primary text-white d-flex align-items-center justify-content-center" 
                           style={{ width: '30px', height: '30px', fontSize: '0.8rem' }}>
                        {blog.author_name.charAt(0).toUpperCase()}
                      </div>
                      <small><strong>{blog.author_name}</strong></small>
                    </div>
                    <small className="text-muted">{formatDate(blog.add_date)}</small>
                    <small className="text-muted">{readingTime} min read</small>
                    <button 
                      className="btn btn-sm btn-outline-secondary ms-auto"
                      onClick={handleBackToBlogs}
                    >
                      <i className="bi bi-arrow-left"></i>
                    </button>
                  </div>

                  {/* Image */}
                  {blog.image_url && (
                    <img 
                      src={blog.image_url} 
                      alt={blog.title}
                      className="img-fluid w-100 mb-4"
                      style={{ 
                        height: '300px', 
                        objectFit: 'cover',
                        borderRadius: '10px'
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="article-content mb-4">
                  {formatContent(blog.content)}
                </div>

                {/* Footer */}
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle me-2 bg-primary text-white d-flex align-items-center justify-content-center" 
                         style={{ width: '40px', height: '40px' }}>
                      {blog.author_name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <strong style={{ color: '#2c3e50' }}>{blog.author_name}</strong>
                      <small className="text-muted d-block">Content Writer</small>
                    </div>
                  </div>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={handleBackToBlogs}
                  >
                    More Articles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;  