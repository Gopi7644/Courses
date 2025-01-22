import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify"
const Card = (props) => {
    let course = props.course;
    let likedCouses = props.likedCouses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if (likedCouses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)))
            toast.warning("Like remove");
        }
        else {
            //pahle se like nhin hai
            if (likedCouses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='bg-black bg-opacity-70 w-[300px] border-solid border-2 rounded-md   overflow-hidden shadow-xl'>
            <div className='relative'>
                <img src={course.image.url} />
                <div className='absolute right-2 bottom-[-16px] w-[40px] h-[40px] bg-white  rounded-full flex justify-center items-center text-center '>
                    <button onClick={clickHandler}>
                        {
                            likedCouses.includes(course.id) ?
                                (<FcLike fontSize='1.75rem' />) :
                                (<FcLikePlaceholder fontSize='1.75rem' />)
                        }
                    </button>
                </div>
            </div>
            <div className='py-4 px-2 text-white'>
                <p className='text-lg font-medium  '>{course.title}</p>
                <p>
                        {
                            course.description.length > 100 ?
                                (course.description.substr(0, 100)) + '...' :
                                (course.description)
                        }
                </p>
            </div>
        </div>
    )
}

export default Card