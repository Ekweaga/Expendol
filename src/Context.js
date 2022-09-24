import {createContext,useState,useEffect} from "react"
import { onAuthStateChanged,getAuth} from "firebase/auth"
import { updateDoc,doc, arrayUnion,onSnapshot } from "firebase/firestore"
import { projectfirestore } from "./firebase"

export const Auth = createContext()


export const AuthProvider = ({children})=>{
    const [user,setUser] = useState({})
    const [transactions, setTransactions] = useState([])
    const [income,setIncome] = useState(0)
    const [expenses,setExpenses] = useState(0)


    const dew = ()=>{
        let expenses = 0;
         if(transactions?.length > 0){
            transactions.map((item)=>{
           
             return   item.type === "EXPENSE" ? expenses = expenses + 1 : expenses = 0;
          
    
        });
         }
       
   
    }
    const cal = ()=>{
        let inc = 0;
        let exp = 0;
       if(transactions?.length > 0){
        transactions.map((item)=>{
           
          return  item.type === "EXPENSE" ? exp = exp + item.num : inc = inc + item.num 
      

    })
       }
       
        setExpenses(exp);
        setIncome(inc)
      

    }

   useEffect(()=>{
        cal();
        dew();
   },[transactions])

    const addTransactions = async (payload)=>{
            await updateDoc(doc(projectfirestore,"users",`${user?.email}`),{
                saveTransactions:arrayUnion(payload)
            })

    }

    const deleteTransactions = async(id) =>{
        const results = transactions.filter((item)=>item.id !== id)

   

        await updateDoc(doc(projectfirestore, "users", `${user?.email}`),{
          saveTransactions:results
    })}

    const filterdata = async (texts) =>{
        if(!texts || !texts.trim().length) {
         
           alert("Filter")
            return;
        }
else{
    
    const txn = transactions.filter((item)=>{
      return item.desc.toLowerCase().includes(texts.toLowerCase().trim())
    });
    await updateDoc(doc(projectfirestore, "users", `${user?.email}`),{
        saveTransactions:txn
  })}
}

      

    
   



    const auth = getAuth();


    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
      
          

    },[auth])

    useEffect(()=>{

        onSnapshot(doc(projectfirestore, "users", `${user?.email}`), (doc) => {
            setTransactions(doc.data()?.saveTransactions)
    })

    },[user?.email])


    return (<Auth.Provider value={{user,addTransactions,transactions,income,expenses,filterdata}}>
    {children}
    </Auth.Provider>)

}

