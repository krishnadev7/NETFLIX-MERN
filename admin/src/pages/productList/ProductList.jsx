import { DataGrid } from '@material-ui/data-grid';
import './productList.css'
import { Fragment, useState } from 'react';
import { DeleteOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import {productRows} from  '../../dummyData'
import { useEffect } from 'react';
import { deleteMovie, getMovie } from '../../contest/movieContext/apiCall';
import { useContext } from 'react';
import { MovieContext } from '../../contest/movieContext/MovieContext';

export default function ProductList() {

    const [data, setData] = useState(productRows)
  const {movies, dispatch} = useContext(MovieContext)
    useEffect(() => {
      getMovie(dispatch)
    },[dispatch])

    const handleDelete = (id) => {
        deleteMovie(id,dispatch)
    }


     const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  { field: 'movie', headerName: 'Movie', width: 200, renderCell: (params) => {
       return (
         <div className='productListItem'>
           <img className='productListImg' src={params.row.img} alt='' />
           {params.row.title}
         </div>
       )
  } },
  { field: 'genre', headerName: 'Genre', width: 120 },
  { field: 'year', headerName: 'Year', width: 120 },
  { field: 'limit', headerName: 'Limit', width: 120 },
  { field: 'isSeries', headerName: 'isSeries', width: 120 },

  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <Fragment>
          <Link to={{pathname:'/product/' + params.row._id, movie:params.row}}>
          <button className="productListEdit">Edit</button>
          </Link>
          <DeleteOutlined className="productListDelete"
          onClick={() => handleDelete(params.row._id)}
          />
        </Fragment>
      )
    }
  } 

];

  return <div className='productList'>
     <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
         //rowsPerPageOptions={[8]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
  </div>;
}
