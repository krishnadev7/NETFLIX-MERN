import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './user.css'

export default function User() {
  return <div className='user'>
      <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to='/newUser'>
         <button className="userAddButton">Create</button>
          </Link>
      </div>
      <div className="userContainer">
          <div className="userShow">
               <div className="userShowTop">
                   <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" srcset="" 
                   className='userShowImg'
                   />
                   <div className="userShowTopTitle">
                       <span className="userShowUsername">abrahm</span>
                       <span className="userShowUserTitle">Software Engineer</span>
                   </div>
                   </div>
                   <div className="userShowBottom">
                       <span className="userShowTitle">Account Details</span>
                       <div className="userShowInfo">
                       <PermIdentity className='userShowIcon' />
                       <span className="userShowInfoTitle">abrahm43</span>
                       </div>
                       <div className="userShowInfo">
                       <CalendarToday className='userShowIcon' />
                       <span className="userShowInfoTitle">20.30.3232</span>
                       </div>
                       <div className="userShowInfo">
                       <PhoneAndroid className='userShowIcon' />
                       <span className="userShowInfoTitle">24324322</span>
                       </div>
                       <div className="userShowInfo">
                       <MailOutline className='userShowIcon' />
                       <span className="userShowInfoTitle">abrahm43@email.com</span>
                       </div>
                       <div className="userShowInfo">
                       <LocationSearching className='userShowIcon' />
                       <span className="userShowInfoTitle">india | kerala </span>
                       </div>
                   </div>
          </div>
          <div className="userUpdate">
               <span className="userUpdateTitle">Edit</span>
               <form  className="userUpdateForm">
                   <div className="userUpdateLeft">
                       <div className="userUpdateItem">
                           <label>Username</label>
                           <input type='text'
                           placeholder='abrahm43'
                           className='userUpdateInput'
                           />                           
                       </div>
                       <div className="userUpdateItem">
                           <label>Full Name</label>
                           <input type='text'
                           placeholder='abrahm'
                           className='userUpdateInput'
                           />                           
                       </div>
                       <div className="userUpdateItem">
                           <label>Email</label>
                           <input type='text'
                           placeholder='abrahm43@email.com'
                           className='userUpdateInput'
                           />                           
                       </div>
                       <div className="userUpdateItem">
                           <label>Phone</label>
                           <input type='text'
                           placeholder='24324322'
                           className='userUpdateInput'
                           />                           
                       </div>
                       <div className="userUpdateItem">
                           <label>Address</label>
                           <input type='text'
                           placeholder='India | kerala'
                           className='userUpdateInput'
                           />                           
                       </div>
                   </div>
                   <div className="userUpdateRight">
                       <div className="userUpdateUpload">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" srcset="" 
                         className='userUpdateImg'
                   />
                   

                           <label className='addNewPicButton' htmlFor='file'>   
                           Add Pic 
                           <Publish className='userUpdateIcon'/> 
                           <input type="file" id='file'a style={{ display:"none" }}></input>
                           </label>

                      
                    </div>
                    <button className="userUpdateButton">Update</button>
                   </div>
               </form>
          </div>
      </div>
  </div>;
}
