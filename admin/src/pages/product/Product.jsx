import { Link,useLocation } from 'react-router-dom';
import { Publish } from '@material-ui/icons';
import './product.css'

export default function Product() {
    const location = useLocation();
    const movie = location.movie
  return <div className='product'>
      <div className="productTitleContainer">
          <h1 className="product">Movie</h1>
          <Link to='/newproduct'>
              <button className="productAddButton">Create</button>
          </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={movie.img} alt="" className="productInfoImg" />
                  <span className="productName">{movie.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue"> {movie._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      <span className="productInfoValue">{movie.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">year:</span>
                      <span className="productInfoValue">{movie.year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">limit:</span>
                      <span className="productInfoValue">{movie.limit}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                <label className='label'>Movie Title</label>
                <input type="text" placeholder={movie.title} className='input'/>
                <label className='label'>Year </label>
                 <input type="text" placeholder={movie.year} className='input'/>
                <label className='label'>Genre </label>
                 <input type="text" placeholder={movie.genre} className='input'/>
                <label className='label'>Limit </label>
                 <input type="text" placeholder={movie.limit} className='input'/>
                <label className='label'>Trailer </label>
                 <input type="file" placeholder={movie.trailer} className='input'/>
                <label className='label'>Video </label>
                 <input type="file" placeholder={movie.video} className='input'/>
              </div>
              <div className="productFormRight">
                   <div className="productUpload">
                       <img src={movie.img} alt="" srcset="" className='productUploadImg' />
                       <label className='publish' for='file'>
                           Add 
                           <Publish />
                       </label>
                       <input type="file" id='file' style={{display:'none'}} />
                   </div>
                   <button className="productButton">Update</button>
              </div>
          </form>
      </div>
  </div>;
}
 