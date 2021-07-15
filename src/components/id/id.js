export default function Id({item:{postId,id,name,email,body}}) {
    return(
        <div>
            <h2> postId - {postId},Id - {id}</h2>
            <p> {name}</p>
            <p>{email}</p>
            <div>{body}</div>
        </div>
    );
           }
