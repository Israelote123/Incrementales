import { useState } from "react"

function useLocalStorage(dataName,initialValue) {

   const localStorageData = window.localStorage.getItem(dataName)

   let parsedData

   if (localStorageData) {
    parsedData = JSON.parse(localStorageData)
   } else {
    window.localStorage.setItem(dataName, JSON.stringify(initialValue))
    parsedData = initialValue
   }

   const [data, setData] = useState(parsedData)

   const saveData = (newData) =>{
       const stringData = (typeof(newData)=="object") ? JSON.stringify(newData) : newData
       window.localStorage.setItem(dataName,stringData)
       setData(newData)
   }

   const deleteAllData = () =>{
    window.localStorage.clear()
   }

   const deleteSpecificData = (name) =>{
    window.localStorage.removeItem(name)
   }

   return [data,saveData,deleteAllData,deleteSpecificData]
}

export {useLocalStorage}