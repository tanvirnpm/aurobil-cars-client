import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Spinner from '../../../FeedBack/Spinner';
import useAuth from '../../../hooks/useAuth';
import DashboardMenu from '../Dashboard/DashboardMenu';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [deleteItem, setDeleteItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleteSuccess, setIsDeleteSuccess] = useState(false)
    const history = useHistory();
    useEffect(() => {
        fetch(`https://intense-dawn-68409.herokuapp.com/get-order/${user.email}`)
            .then(result => result.json())
            .then(data => setMyOrders(data))
            .finally(() => setIsLoading(false))
    }, [])
    const deleteItemById = (id) => {
        setDeleteItem(id);
    }
    const orderDeleteById = id => {
        fetch(`https://intense-dawn-68409.herokuapp.com/delete-order/${id}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setIsDeleteSuccess(data.acknowledged))
    }
    // console.log(deleteItem)
    isDeleteSuccess && history.replace('/my-orders')
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
                                    {item.status == 'Pending' && <td><button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#confirmModal" onClick={() => deleteItemById(item._id)}>Delete</button></td>}
                                </tr>)
                            }
                        </tbody>
                    </table>
                    {
                        isLoading && <Spinner />
                    }
                </div>
            </div>
            {/* confirm modal */}
            <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {isDeleteSuccess == false && <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>}
                            {isDeleteSuccess && <h5 className="modal-title" id="exampleModalLabel">Deleted</h5>}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {isDeleteSuccess == false &&  <p>Do You Really Want to Delete This ?</p>}
                            {isDeleteSuccess &&  <p className="text-success">Delete Success Fully</p>}
                        </div>
                        <div className="modal-footer">
                            {isDeleteSuccess == false &&  <button type="button" className="btn btn-info" data-bs-dismiss="modal">Cancel</button>}
                            {isDeleteSuccess &&  <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>}
                            {isDeleteSuccess == false && <button type="button" className="btn btn-danger" onClick={() => orderDeleteById(deleteItem)}>Confirm Delete</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;