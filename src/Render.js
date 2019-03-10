import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

class MyComponent extends React.Component {

  render() {

    const images = [
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7cb5aa77344463.5c85471445ef4.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7cb5aa77344463.5c85471445ef4.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ec32e277344463.5c85471445ad4.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ec32e277344463.5c85471445ad4.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bc585c77344463.5c854714462bb.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bc585c77344463.5c854714462bb.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/072e9177341615.5c85350ba9302.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/072e9177341615.5c85350ba9302.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4d46277341615.5c85350ba8d21.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4d46277341615.5c85350ba8d21.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/86850a77341615.5c85350ba9045.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/86850a77341615.5c85350ba9045.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/21037f77337223.5c8519250f10c.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/21037f77337223.5c8519250f10c.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47684277337223.5c8519250e964.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47684277337223.5c8519250e964.jpg',
      },
      {
        original: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/48e16377337223.5c8519250ed4b.jpg',
        thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/48e16377337223.5c8519250ed4b.jpg',
      },
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