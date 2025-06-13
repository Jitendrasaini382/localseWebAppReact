import React, { useState, useEffect } from 'react';
// For your actual implementation, uncomment these:
import axios from "axios";
import { API_BASE_URL } from "../constant/path";
import NavigationBar from '../component/Header';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      setLoading(true);
      // Simulate API call with your sample data
      const res = await axios({
        method: "GET",
        url: `${API_BASE_URL}blog/get-all-blogs`,
      });
      
      // Sample data from your API response
      

      if (res?.data?.success) {
        setBlogs(res?.data?.data);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError('Failed to fetch blogs');
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const navigate = useNavigate();
  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substr(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div style={{ 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #7f4c6d 50%, #c0392b 75%, #e74c3c 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="text-center">
          <div className="spinner-border text-light" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-white mt-3 fs-5">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #7f4c6d 50%, #c0392b 75%, #e74c3c 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container">
          <div className="alert alert-danger bg-white border-0 shadow-lg" role="alert" style={{ borderRadius: '15px' }}>
            <h4 className="alert-heading">Oops! Something went wrong</h4>
            <p className="mb-0">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #7f4c6d 50%, #c0392b 75%, #e74c3c 100%)',
      minHeight: '100vh'
    }}>
      {/* Header */}
<NavigationBar/>
      <div className="container pt-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-white mb-3">Our Blog</h1>
            <p className="lead text-white-50">Discover our latest articles and insights</p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="row pb-5">
          {blogs.map((blog) => (
            <div key={blog._id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 border-0" style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}>
                <img 
                  src={blog.image_url} 
                  className="card-img-top" 
                  alt={blog.title}
                  style={{ 
                    height: '200px', 
                    objectFit: 'cover',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px'
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold" style={{ color: '#2c3e50' }}>
                    {blog.title}
                  </h5>
                  <p className="card-text text-muted flex-grow-1">
                    {truncateContent(blog.content)}
                  </p>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <small className="text-muted">
                        <i className="bi bi-person-fill me-1"></i>
                        {blog.author_name}
                      </small>
                      <small className="text-muted">
                        <i className="bi bi-calendar3 me-1"></i>
                        {formatDate(blog.add_date)}
                      </small>
                    </div>
                    <button 
                    onClick={()=>{
                        navigate('/blog_detail', { state: { blog } });
                    }}
                      className="btn w-100 text-white fw-semibold"
                      style={{ 
                        background: 'linear-gradient(45deg, #7f4c6d, #c0392b)',
                        border: 'none',
                        borderRadius: '25px',
                        padding: '10px 20px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(45deg, #6a3d5a, #a93226)';
                        e.target.style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'linear-gradient(45deg, #7f4c6d, #c0392b)';
                        e.target.style.transform = 'scale(1)';
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No blogs message */}
        {blogs.length === 0 && (
          <div className="row">
            <div className="col-12 text-center">
              <div className="py-5">
                <h3 className="text-white">No blogs found</h3>
                <p className="text-white-50">Check back later for new content!</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Blogs;