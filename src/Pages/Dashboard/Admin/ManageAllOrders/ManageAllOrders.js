import React, { useEffect, useState } from 'react';
import DashboardMenu from '../../Dashboard/DashboardMenu';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/get-all-orders')
        .then(res=> res.json())
        .then(data => setOrders(data))
    },[])
    // order status change to shipped
    const orderShipped = id => {
        fetch(`http://localhost:5000/order/shipped/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(result => console.log(result))
    }
    console.log(orders)
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <DashboardMenu />
                <div className="col py-3">
                    <h3>Manage All Orders</h3>
                    <table className="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Client Information</th>
                                <th scope="col">Vehicle Information</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((item,index)=> <tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{item.name}, {item.email}, {item.contact}, {item.address}</td>
                                    <td>{item.car.make} {item.car.model} {item.car.fuelType}, {item.car.year}, {item.car.color}</td>
                                    <td>{item.car.price} /-</td>
                                    <td>{item.status}</td>
                                    <td>
                                        {item.status == 'Pending' && <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#confirmModal">Delete</button>}
                                        {item.status == 'Pending' && <button onClick={()=> orderShipped(item._id)} className="btn btn-info btn-sm ms-1">Shipped</button>}
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
                            <button type="button" className="btn btn-danger">Confirm Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;