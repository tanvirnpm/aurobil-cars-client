import React, { useEffect, useState } from 'react';
import DashboardMenu from '../../Dashboard/DashboardMenu';

const ManageAdmin = () => {
    const [allUsers, setAllUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/get-user')
        .then(res=> res.json())
        .then(data => setAllUsers(data))
    },[])
    console.log('from mongodb: ', allUsers)
    
    
    // setMyOrders(orderData)
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <DashboardMenu />
                <div className="col py-3">
                    <h3>Make Admin</h3>
                    <table className="table table-sm table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers.map((item,index)=> <tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        {item.user && 'Normal User'}
                                        {item.admin && 'Admin'}
                                    </td>
                                    <td>
                                        { item.user && <button className="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#confirmModal">Make Admin</button>}
                                        { item.admin && item.email != 'admin@admin.com' && <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#confirmModal">Delete</button>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* confirm modal */}
            <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

export default ManageAdmin;