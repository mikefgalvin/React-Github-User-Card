import React from 'react';

function Followers(props) {

 return (
     <>
     <h2>Followers</h2>
     <div className='Followers'>
      {
          props.followers.map(follower => (
              <a href={follower.html_url} key={follower.id}>
                <div >
                    <h3>{follower.login}</h3>
                    <img src ={follower.avatar_url} alt = 'Mike Galvin'/>
                </div>
              </a>
          ))
      }
      </div>
      </>
 );
}

export default Followers;