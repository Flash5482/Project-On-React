import React from "react";
import Styles from './Styles.module.css'

const User = (props)=>{

    let pagesCount = Math.ceil(props.state.totalUserCount / props.state.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return(
        <div>
            <div className={Styles.pagesNumber}>
                {pages.map(item => {
                    return <span onClick={() => props.onPageChanged(item)}
                                 className={props.state.currentPage === item && Styles.selectedPage}>{item}   </span>
                })}
            </div>
            {
                props.state.usersDate.map(item => <div key={item.id} className={Styles.userContainer}>

                    <div className={Styles.avatarAndButton}>
                        <div className={Styles.avatar}>
                            <img
                                src={item.photos.small != null ? item.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmf8aGq8vUOGvTltG1DjEYsXSVDRFizRITdfNfkT0lEuM6XMGzAdwDu-cNOy304pWXTYU&usqp=CAU"}
                                alt=""/>
                        </div>
                        <div className={Styles.button}>
                            {item.followed
                                ? <button onClick={() => {
                                    props.unFollow(item.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follows(item.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={Styles.userInfo}>
                        <div className={Styles.leftInfo}>
                            <p>{item.name}</p>
                            <p className={Styles.status}>{item.status}</p>
                        </div>
                        <div className={Styles.rightInfo}>
                            <p>{"item.location.country"}</p>
                            <p>{"item.location.city"}</p>
                        </div>

                    </div>
                </div>)
            }
        </div>
    );

}
export default User;