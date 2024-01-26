// const user = {
//     name: 'Hedy Lamarr',
//     imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,
// };
// import { Fragment } from 'react';

// <Fragment> (<>...</>)

function Profile(props) {

    return (
     <>
       <h1>{props.name}</h1>
       <img
          src={props.imageUrl}
          className="avatar"
          alt={props.alt}
          style={{
            width:90,
            height:props.height
          }}
        />
     </>
       
    
    );
}


export default Profile

