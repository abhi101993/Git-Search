import UserItem from './UserItem';
import Spinner from '../layout/spinner';
import GithubContext from '../../context/github/githubContext';
import {useContext} from 'react';

 const Users =  () => {
   

    const githubContext = useContext(GithubContext);

    const {loading,users} = githubContext;

     if(loading)
     {
         return <Spinner/>
     }

     else
     {

        
        return (
            <div style={userStyle}>
             {users.map(user =>
                (
                 <UserItem key={user.id} user={user}/>

                ))}
            </div>
        )

     }

    }

const userStyle = {

    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1 rem'

};



export default Users
