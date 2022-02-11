import { useState } from 'react';
import './newProduct.css'

export default function NewProduct() {

  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
//   const [uploaded, setUploaded] = useState(0);

 const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  console.log(img);

  return <div className='newProduct'>
      <h1 className="addProductTitle">New Movie</h1>
      <form  className="addProductForm">
          <div className="addProductItem">
              <label className='label'>Image</label>
              <input type="file" id='img' className='input' name='img' onChange={(e) => setImg(e.target.files[0])}/>
          </div>
          <div className="addProductItem">
              <label className='label'>Title Image</label>
              <input type="file" id='imgTitle' className='input' name='imgTitle' onChange={(e) => setImgTitle(e.target.files[0])} />
          </div>
          <div className="addProductItem">
              <label className='label'>Thumbnail Image</label>
              <input type="file" id='imgSm' className='input' name='imgSm' onChange={(e) => setImgSm(e.target.files[0])} />
          </div>
          <div className="addProductItem">
              <label className='label'>Title</label>
              <input type="text" placeholder='Iron Man' className='input' name='title' onChange={handleChange} />
          </div>
          <div className="addProductItem">
              <label className='label'>Description</label>
              <input type="text" placeholder='description' className='input' name='description' onChange={handleChange} />
          </div>
          <div className="addProductItem">
              <label className='label'>Year</label>
              <input type="text" placeholder='year' className='input' name='year' onChange={handleChange}/>
          </div>
          <div className="addProductItem">
              <label className='label'>Genre</label>
              <input type="text" placeholder='genre' className='input'  name='genre' onChange={handleChange}/>
          </div>
          <div className="addProductItem">
              <label className='label'>Duration</label>
              <input type="text" placeholder='duration' className='input' name='duration' onChange={handleChange}/>
          </div>
          <div className="addProductItem">
              <label className='label'>Limit</label>
              <input type="text" placeholder='imit' className='input' name='limit' onChange={handleChange}/>
          </div>
          <div className="addProductItem">
              <label className='label'>Is Series?</label>
               <select name='isSeries' id='isSeries' className='select' onChange={handleChange}>
                    <option value="false">NO</option>
                    <option value="true">Yes</option>
                </select>
          </div>
           <div className="addProductItem">
              <label className='label'>Trailer</label>
              <input type="file" className='input' name='trailer' onChange={(e) => setTrailer(e.target.files[0])}/>
          </div>
           <div className="addProductItem">
              <label className='label'>Video</label>
              <input type="file"  className='input' name='video' onChange={(e) => setVideo(e.target.files[0])}/>
          </div>
          <button className='addProductButton'>Create</button>
      </form>
  </div>;
}
