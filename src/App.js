import './App.css';
import { useEffect, useState } from 'react';
import axios from './axios/default';
import { getAllUsers } from './api-config/userAction';
import Home from './pages/Home/Home';
import FallBack from './pages/FallBack/FallBack';
import { EmptyIcon, SpinnerIcon } from './assets/images/const';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  const [data, setData] = useState("loading");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    FetchgetAllUsers().then((res) => {
      if (res) {
        setData(res?.data)
        setApiData(res?.data)
        console.log("getAllUsers", res.data)
      }
      else {
        setData("error")
      }
    })
  }, []);

  const FetchgetAllUsers = async () => {
    let res = await getAllUsers()
    return res
  }

  return (
    <div className="main">
      {data !== "error" && data !== "loading"
        ?
        <ErrorBoundary errMessage={"Home"}>
          <Home apiData={apiData} data={data} setData={setData} rowsPerPage={10} />
        </ErrorBoundary>

        :
        <>
          <FallBack
            heading={data === "loading" ? "Loading...." : "Ooops! 👀"}
            icon={data === "loading" ? <SpinnerIcon /> : <EmptyIcon />
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
