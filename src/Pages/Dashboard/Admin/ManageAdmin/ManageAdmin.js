import React from 'react';
import DashboardMenu from '../../Dashboard/DashboardMenu';

const ManageAdmin = () => {
    const orderData = [
        {
            chassis: 'NKE165-5685847',
            make: 'Toyota',
            model: 'Axio',
            color: 'Silver',
            year: 2017
        },
        {
            chassis: 'NKE165-5685847',
            make: 'Toyota',
            model: 'Axio',
            color: 'Silver',
            year: 2017
        },
        {
            chassis: 'NKE165-5685847',
            make: 'Toyota',
            model: 'Axio',
            color: 'Silver',
            year: 2017
        },
        {
            chassis: 'NKE165-5685847',
            make: 'Toyota',
            model: 'Axio',
            color: 'Silver',
            year: 2017
        },
    ]
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
                                orderData.map((item,index)=> <tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{item.chassis}</td>
                                    <td>{item.make} {item.model}</td>
                                    <td>{item.color}</td>
                                    <td>
                                        <button className="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#confirmModal">Make Admin</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* confirm modal */}
            <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Toyota Allion</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-info" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-danger">Confirm Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAdmin;