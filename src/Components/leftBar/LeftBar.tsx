import React from 'react';
import './LeftBar.scss'
import profilePhoto from "../../pages/register/register-bg.jpg";
import friends from '../../assets/boy.svg'
import group from '../../assets/group.svg'
import market from '../../assets/market.svg'
import memory from '../../assets/memory.svg'
import tv from '../../assets/tv.svg'
const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className="container">

                <div className="menu">
                    <div className="user">
                        <img src={profilePhoto} alt="profile"/>
                        <span>Nazar Prytuliak</span>
                    </div>
                    <div className="item">
                        <img src={friends} alt="friends"/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={group} alt="group"/>
                        <span>Group</span>
                    </div>
                    <div className="item">
                        <img src={market} alt="market-item"/>
                        <span>Market</span>
                    </div>
                    <div className="item">
                        <img src={memory} alt="memory-item"/>
                        <span>Memory</span>
                    </div>
                    <div className="item">
                        <img src={tv} alt="tv-item"/>
                        <span>TV</span>
                    </div>
                    <hr/>
                </div>


                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="item">
                        <img src="https://via.placeholder.com/150" alt="item"/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src="https://via.placeholder.com/150" alt="item"/>
                        <span>Item</span>
                    </div>
                    <div className="item">
                        <img src="https://via.placeholder.com/150" alt="item"/>
                        <span>Item</span>
                    </div>
                    <div className="item">
                        <img src="https://via.placeholder.com/150" alt="item"/>
                        <span>Item</span>
                    </div>
                    <div className="item">
                        <img src="https://via.placeholder.com/150" alt="item"/>
                        <span>Item</span>
                    </div>
                    <hr/>
                </div>

                <div className="menu">
                    <span>Other</span>

                    <div className="item">
                        <img src="https://via.placeholder.com/150" alt="item"/>
                        <span>Item</span>
                    </div>
                    <div className="item">
                        <img src="https://via.placeholder.com/150" alt="item"/>
                        <span>Item</span>
                    </div>
                    <div className="item">
                        <img src="https://via.placeholder.com/150" alt="item"/>
                        <span>Item</span>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;