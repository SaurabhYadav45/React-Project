import { click } from '@testing-library/user-event/dist/click';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';


const Card = (props) =>{

  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  
  const desc = `${course.description.substring(0, 200)}....`

  function clickHandler (){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Liked Removed");
    }
    else{
      if(likedCourses.length === 0){
        setLikedCourses(course.id);
      }
      else{
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  
    return(
       <div className='bg-bgDark overflow-hidden bg-opacity-80 rounded-md w-[300px] '>
        <div className='relative'>
          <div>
            <img src={course.image.url}></img>
          </div>
          <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
            <button onClick={clickHandler}>
                {
                    likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) :  (<FcLikePlaceholder fontSize="1.75rem" />)
                }
            </button>
          </div>
        </div>
          
          <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
            <p className='mt-2 text-white text-sm'>{desc}</p>
          </div>
       </div>
    );
    
}


export default Card;