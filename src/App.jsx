import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Fillter from './components/Fillter'
import Spinner from './components/Spinner'
import Cards from './components/Cards'
import { apiUrl, filterData } from './Data'
import { useEffect } from 'react'
import { toast } from "react-toastify"

function App() {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true)
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data)
    }
    catch (error) {
      toast.error("Network error:")
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='bg-black bg-opacity-60 min-h-screen flex flex-col'>
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Fillter 
          filterData={filterData} 
          category={category}
          setCategory={setCategory}
          />
        </div>
        <div className='11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
