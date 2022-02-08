import './newProduct.css'

export default function NewProduct() {
  return <div className='newProduct'>
      <h1 className="addProductTitle">New Product</h1>
      <form  className="addProductForm">
          <div className="addProductItem">
              <label className='label'>Image</label>
              <input type="file" id='file' className='input' />
          </div>
          <div className="addProductItem">
              <label className='label'>Name</label>
              <input type="text" placeholder='iPhone' className='input'/>
          </div>
          <div className="addProductItem">
              <label className='label'>Stock</label>
              <input type="text" placeholder='233' className='input' />
          </div>
          <div className="addProductItem">
              <label className='label'>Active</label>
               <select name='active' id='active' className='select'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
          </div>
          <button className='addProductButton'>Create</button>
      </form>
  </div>;
}
