import React from 'react';
import UsersList from "../../components/usersList/UsersList";

const UsersPage = (props) => {
    const user = {
        name: "Ruslan",
        age: 40

    }
    const userName = ["Ruslan", "Sanjar","Dastan"]

    return (
        <div>

            <UsersList user = {user} userName={userName}/>

        </div>
    );
};

export default UsersPage;