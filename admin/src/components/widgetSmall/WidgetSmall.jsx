import './widgetSmall.css';
import {Visibility} from '@material-ui/icons'
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function WidgetSmall() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true',{
           headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmQ2YTVkMDdmZTE0MmEzY2ZhODZiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDA1Mjg1NCwiZXhwIjoxNjQ0NDg0ODU0fQ.aH7k4rIF4n7A9umFl7artDuVzvB4er9hC0_tVP0jqqA',
          },
        })
        setNewUsers(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    getNewUsers()
  },[newUsers])
  console.log(setNewUsers);
  return <div className="widgetSm">
    <span className="widgetSmTitle">New Join Members</span>
    <ul className="widgetSmList">
      {newUsers.map((user) => (
        <li className="widgetSmListItem">
        <img
            src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg" }
            alt=""
            className="widgetSmImg"
            />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
      </li>
      ))}
    </ul>
</div>
}
