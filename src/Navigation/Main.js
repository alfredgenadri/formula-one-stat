import logo from './imgs/logo.png'
import './Main.css'

const Main = () => {
    return (  
        <div className='background-image'>
            <img
                alt=""
                src={logo}
                width="200"
                height="100"
                className="hook"
                />
            <h1 className='grab'>THE OFFICIAL FORMULA ONE STAT TRACKER</h1>
      </div>
    );
}
 
export default Main;