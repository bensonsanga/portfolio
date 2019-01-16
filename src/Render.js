import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
 
class MyComponent extends React.Component {
 
  render() {
 
    const images = [
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2745b64395233.5ad0a38667825.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2745b64395233.5ad0a38667825.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c82ff064395233.5ad0a38665f8c.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c82ff064395233.5ad0a38665f8c.jpg'
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ae172664395233.5ad22fa0d6529.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ae172664395233.5ad22fa0d6529.jpg'
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dbed4064395233.5ad0a38668623.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dbed4064395233.5ad0a38668623.jpg'
      }
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}

export default MyComponent;