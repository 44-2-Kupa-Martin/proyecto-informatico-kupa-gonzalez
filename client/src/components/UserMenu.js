import React, {useContext} from "react";
import { Context } from "../App";
import { Wrapper } from "./styles/UserMenu.styled";
import axios from "axios";
import PostAvatar from "./PostAvatar";


function UserMenu(props) {
    const context= useContext(Context);
    function changeAvatar() {
        context.setPage(<PostAvatar />);
    }
    function logout() {
        axios.post(`/logout`)
            .then((req, res) => {
                if (res.success) {
                    context.setLoginState(null);
                } else {
                    //handle
                }
            });
    }
    return (
        <Wrapper className="nav userMenu"> {/* li */}
            <ul className="userMenu">
                <li className="userMenu text"><img className="userMenu" src="" alt="" /><strong className="userMenu">Username</strong></li>
                <div className="userMenu dropdown">
                    <li className="userMenu"><button className="userMenu" onClick={()=>changeAvatar()}>Change Avatar</button></li>
                    <li className="userMenu"><button className="userMenu logout" onClick={()=> logout()}>Log Out</button></li>
                </div>
            </ul>
        </Wrapper>
    )
}

export default UserMenu;