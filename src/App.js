import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from './axios/default';
import { getAllUsers } from './api-config/userAction';
import Home from './pages/Home/Home';
import FallBack from './pages/FallBack/FallBack';
import { EmptyIcon, NoDataFoundIcon, SpinnerIcon } from './assets/images/const';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  const [data, setData] = useState("loading");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    res().then((da) => {
      if (da) {
        setData(da?.data)
        setApiData(da?.data)
        console.log("getAllEmails", da.data)
      }
      else {
        setData("error")
      }
    })
  }, []);

  const res = async () => {
    let h = await getAllUsers()
    return h
  }

  return (
    <div className="main">
      {/* <div className=''> */}
      {data !== "error" && data !== "loading"
        ?
        <ErrorBoundary errMessage={"Home"}>
   <Home apiData={apiData} data={data} setData={setData} rowsPerPage={10} />
        </ErrorBoundary>
     
        :
        <>
          <FallBack
            heading={data === "loading" ? "Loading...."  : "Ooops! 👀"}
            icon={data === "loading" ? <SpinnerIcon /> :  <EmptyIcon />
              }
            subHeading={"Something is wrong!... Please try again."}
          />
        </>
      }
      {/* </div> */}

    </div>
  );
}

export default App;
