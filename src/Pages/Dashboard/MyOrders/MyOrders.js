import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DashboardMenu from '../Dashboard/DashboardMenu';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])
    const [deleteItem, setDeleteItem] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/get-order/${user.email}`)
        .then(result => result.json())
        .then(data => setMyOrders(data))
    },[])
    const deleteItemById = (id) => {
        setDeleteItem(id);
    }
    const orderDeleteById = id => {
        fetch(`http://localhost:5000/delete-order/${id}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    console.log(deleteItem)
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <DashboardMenu />
                <div className="col py-3">
                    <h3>My Orders</h3>
                    <table className="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Chassis Number</th>
                                <th scope="col">Car Name</th>
                                <th scope="col">Year</th>
                                <th scope="col">Color</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((item, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{item.car.chassis}</td>
                                    <td>{item.car.make} {item.model}</td>
                                    <td>{item.car.year}</td>
                                    <td>{item.car.color}</td>
                                    <td>{item.car.price} /-</td>
                                    <td>{item.status}</td>
                                    {item.status == 'Pending' && <td><button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#confirmModal" onClick={()=>deleteItemById(item._id)}>Delete</button></td>}
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
                            <button type="button" className="btn btn-danger" onClick={()=> orderDeleteById(deleteItem)}>Confirm Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;