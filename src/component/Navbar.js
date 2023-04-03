import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
//eslint-disable-next-line 
import { Navigate, useNavigate } from 'react-router-dom'; 



const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', '스포츠', 'Sale', '지속가능성']
  const navigate = useNavigate()
  const gotoLogin = () => {
    navigate("/login");
  }
  const gotoHome = () => {
    navigate("/");
  }
  const search =(Event)=>{
    if(Event.key === "Enter"){
      //입력한 검색어를 읽어와서 
      let keyword = Event.target.value
      //url을 바꿔준다.
      navigate(`/?q=${keyword}`)
    }
  };
  return (
    <div className='nav'>
      <div className="nav-all">
        <div className="header-left">
          <button>고객서비스</button>&nbsp;&nbsp;
          <button>뉴스레터</button> &nbsp;&nbsp;
          <button>매장찾기</button> &nbsp;&nbsp;
          <button>
            <FontAwesomeIcon icon={faBell} />
          </button>
        </div>

        <div className="nav-section">
          <img
            className='logo'
            width={50}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png"
            alt="hnm로고"
            onClick={gotoHome}
          />
        </div>

        <div className="header-right">
          <div className="header-jump" onClick={gotoLogin}>
            <FontAwesomeIcon icon={faUser} /> <button> 로그인 </button>
          </div>
          <div className="header-jump">
            <FontAwesomeIcon icon={faHeart} /> <button>즐겨찾기</button>
          </div>
          <div className="header-jump">
            <FontAwesomeIcon icon={faBagShopping} /> <button>쇼핑백</button>
          </div>
        </div>
        <div className="nav-second">
          <div className="menu-list">
            <ul>
              {menuList.map((menu) => (
                <li>{menu}</li>
              ))}
            </ul>
          </div>
          <div className='search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" 
          placeholder='제품 검색'
          onKeyDown={(Event)=>search(Event)}
          />
          </div>
        </div>
        </div>
    </div>
  );
}

export default Navbar