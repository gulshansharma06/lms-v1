import React from 'react'
import {FaArrowRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import CTAButton from '../Components/core/HomePage/Button';
import HighlightText from '../Components/core/HomePage/HighlightText';
import CodeBlocks from "../Components/core/HomePage/CodeBlocks";
import { useDispatch } from 'react-redux';
import { setProgress } from "../slices/loadingBarSlice"
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import CourseSlider from '../Components/core/Catalog/CourseSlider';
import { useEffect } from 'react';
import { useState } from 'react';


function Home() {
    const [CatalogPageData, setCatalogPageData] = useState(null);
    const categoryID = "6475dbeb49dcc886b5698441";

    useEffect(() => {
        const fetchCatalogPageData = async () => {
            
                const result = await getCatalogaPageData(categoryID,dispatch);
                setCatalogPageData(result);
                // console.log("page data",CatalogPageData);
            
        }
        if (categoryID) {
            fetchCatalogPageData();
        }
    }, [categoryID])
    const dispatch = useDispatch();
  return (
    <div>
        <div className=' mx-auto relative flex flex-col w-11/12 items-center justify-between text-white '>
            <Link onClick={()=>{dispatch(setProgress(100))}}  to={"/signup"}>
            <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold transition-all duration-200 hover: scale-95 w-fit max-w-maxContent'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
              <p>Become an Instructor</p><FaArrowRight/>
                </div>
            </div>
            </Link>

            <div className='text-center text-3xl md:text-4xl font-semibold mt-7'>
                Empower Your Future With <HighlightText text={"Coding Skills"}/>
            </div>
            <div className=' mt-4 w-[90%] text-left md:text-center text-sm md:text-lg font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkto={"/login"} >Book a Demo</CTAButton>
            </div>


       
        <div className=' mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
        <h2 className='section_heading mb-6 md:text-3xl text-xl'>
           Most Popular Courses
        </h2>
        <CourseSlider Courses={CatalogPageData?.selectedCourses}/>
      </div>       
        {/* <div className=' mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
        <h2 className='section_heading mb-6 md:text-3xl text-xl'>
           Students are learning
        </h2>
        <CourseSlider Courses={CatalogPageData?.differentCourses}/>
      </div>        */}


                {/* Code Section 2 */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Start
                        <HighlightText text={"coding in seconds"}/>
                    </div>
                }
                subheading = {
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                }
                ctabtn1={
                    {
                        btnText: "Continue Lesson",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                codeColor={"text-yellow-25"}
                backgroudGradient={"grad2"}
            />
        </div>



        </div>
        <div className='hidden lg:block lg:h-[200px]'></div>

    </div>
  )
}

export default Home