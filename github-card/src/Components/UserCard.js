import React from 'react';

function UserCard(props) {

console.log(props);

 return (
    <div className="UserCard">
      <h2>{props.user.name}</h2>
      <img width='400px'src ={props.user.avatar_url} alt = 'Mike Galvin'/>
      <div>
        <p>{props.user.location}</p>
        <p>{props.user.bio}</p>
      </div>


    </div>
 );
}

export default UserCard;