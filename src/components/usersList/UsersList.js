import React from 'react';

function UsersList(props) {
    return (
        <ul>
            <li>{props.user.name}-{props.user.age}</li>
            {props.userName.map(user => {
                return (
                    <li>{user}</li>

                )
            })}
        </ul>
    );
};

export default UsersList;