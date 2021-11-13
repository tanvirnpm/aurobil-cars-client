import React, { useEffect, useState } from 'react';
import Spinner from '../../../../FeedBack/Spinner';
import DashboardMenu from '../../Dashboard/DashboardMenu';

const ManageAdmin = () => {
    const [allUsers, setAllUsers] = useState([])
      const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch('https://intense-dawn-68409.herokuapp.com/get-user')
        .then(res=> res.json())
        .then(data => setAllUsers(data))
        .finally(()=> setIsLoading(false))
    },[])
    // console.log('from mongodb: ', allUsers)
    
    // make admin
    const makeAdmin = email => {
        fetch(`https://intense-dawn-68409.herokuapp.com/make/admin/${email}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(result => console.log(result))
    }
    
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
                                        {item.user && 'Member'}
                                        {item.admin && 'Admin'}
                                    </td>
                                    <td>
                                        { item.user && <button onClick={()=>makeAdmin(item.email)} className="btn btn-info btn-sm">Make Admin</button>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    {
                        isLoading && <Spinner />
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageAdmin;