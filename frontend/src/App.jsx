import Routes from "./routes";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './styles/global.css';

function App() {

    return (
        <>
            <ToastContainer
                autoClose={5000}
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Routes />
        </>
    );
}

export default App;
