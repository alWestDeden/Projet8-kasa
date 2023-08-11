// import { useState, useEffect } from 'react'

// const url =
//   'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'

// export default function useFetch() {
//   const [data, setData] = useState({})

//   useEffect(() => {
//     function fetchData() {
//       try {
//         const response = fetch(url, { mode: 'no-cors' })
//         const data = response.json()
//         setData(data)
//         console.log(data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     fetchData()
//   }, [])
//   return { data }
// }
