import React, { useEffect, useState } from 'react';
import DashboardMenu from '../../Dashboard/DashboardMenu';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [deleteItem, setDeleteItem] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/get-all-products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    // get delete product id
    const deleteItemById = (id) => {
        setDeleteItem(id);
    }
    // products delete function
    const productDeleteById = id => {
        fetch(`http://localhost:5000/delete-product/${id}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <DashboardMenu />
                <div className="col py-3">
                    <h3>Manage Products</h3>
                    <table className="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Chassis Number</th>
                                <th scope="col">Car Name</th>
                                <th scope="col">Year</th>
                                <th scope="col">Color</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item,index)=> <tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{item.chassis}</td>
                                    <td>{item.make} {item.model}</td>
                                    <td>{item.year}</td>
                                    <td>{item.color}</td>
                                    <td>
                                        <button onClick={()=>deleteItemById(item._id)} className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#confirmModal">Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* confirm modal */}
            <div className="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Toyota Allion</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-bs-dismiss="modal">Cancel</button>
                            <button onClick={()=> productDeleteById(deleteItem)} type="button" className="btn btn-danger">Confirm Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;