
import './PostCard.css';

const PostCard = (props)=>{

    return (<>
            <div className="container">
                   <div className="container_header">
                    <div className='des'>
                       <strong>{props.info.name}</strong>
                        <span className='location'>{props.info.location}</span>
                    </div>
                    <div>
                        <img className='dot' src="./icons/threeDots.jpg" alt="dotIcon" />
                    </div>
                   </div>
                   <div className="postimage">
                        <img className='photo' src={props.info.image} alt="error-img" />
                   </div>
                   <div className="line-1">
                    <div className="icon">
                    <img className='heart' src="./icons/hearticon.png" alt="heart" />
                    <img className='rocket' src="./icons/rocketicon.jpg" alt="rocket" />
                    </div>
                    <span>{props.info.date}</span>
                </div>
                <div className="line-2">
                    <span>{props.info.likes} Likes</span>
                </div>
                <div className="line-3">
                    <span>{props.info.description}</span>
                </div>
            </div>
          
            </>
    )
}
export default PostCard;