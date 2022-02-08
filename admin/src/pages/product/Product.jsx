import { Link } from 'react-router-dom';
import { Publish } from '@material-ui/icons';
import Charts from '../../components/charts/Charts';
import { productData } from '../../dummyData';
import './product.css'

export default function Product() {
  return <div className='product'>
      <div className="productTitleContainer">
          <h1 className="product">Product</h1>
          <Link to='/newproduct'>
              <button className="productAddButton">Create</button>
          </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Charts data={productData} datakey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src='https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?cs=srgb&dl=pexels-mediamodifier-8066715.jpg&fm=jpg' alt="" className="productInfoImg" />
                  <span className="productName">iPhone</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">213</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">2103</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                <label className='label'>Product Name</label>
                <input type="text" placeholder='i Phone' className='input'/>
                <label className='label'>In Stock </label>
                <select name='inStock' id='idStock'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label className='label'>Active</label>
                <select name='active' id='active'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
              </div>
              <div className="productFormRight">
                   <div className="productUpload">
                       <img src='https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?cs=srgb&dl=pexels-mediamodifier-8066715.jpg&fm=jpg' alt="" srcset="" className='productUploadImg' />
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
 