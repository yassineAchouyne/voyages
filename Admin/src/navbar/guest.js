import { Routes, Route, Link } from 'react-router-dom';
import Login from '../components/login';
import NotFond from '../components/NotFond';

function Guest() {
    return (
        <>
        
            {/* <div className="container" style={{display:"flex",justifyContent:"center", height:"100vh",alignItems:"center"}}> */}
                <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="*" element={<NotFond />} />
                </Routes>
                </div>
            {/* </div> */}
        </>
    );
}

export default Guest;
