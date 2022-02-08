import './userList.css'
import {userRows} from  '../../dummyData'
import {DataGrid} from '@material-ui/data-grid'
import { Fragment, useState } from 'react';
import { DeleteOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function UserList() {

  const [data, setData ] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id ))
  }

    const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
       return (
         <div className='userListUser'>
           <img className='userListImg' src={params.row.avatar} alt='' />
           {params.row.username}
         </div>
       )
  } },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <Fragment>
          <Link to={'/user/' + params.row.id}>
          <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutlined className="userListDelete"
          onClick={() => handleDelete(params.row.id)}
          />
        </Fragment>
      )
    }
  }

];


  return <div className='userList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
         //rowsPerPageOptions={[8]}
        checkboxSelection
      />
  </div>;
}
