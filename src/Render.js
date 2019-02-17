import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

class MyComponent extends React.Component {

  render() {

    const images = [
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9cca0b75430601.5c4c75085707e.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9cca0b75430601.5c4c75085707e.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4baf975430601.5c4c750857791.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4baf975430601.5c4c750857791.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7c20bf75430601.5c4c75085735c.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7c20bf75430601.5c4c75085735c.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/749d3976417019.5c6982bff3ae8.png',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/749d3976417019.5c6982bff3ae8.png',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/000e6f76417019.5c6982bff36a8.png',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/000e6f76417019.5c6982bff36a8.png',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/56d6f976417019.5c6982bff31ea.png',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/56d6f976417019.5c6982bff31ea.png',
      },
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
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/68324a76416681.5c69801b27f56.png',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/68324a76416681.5c69801b27f56.png'
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

export default MyComponent;