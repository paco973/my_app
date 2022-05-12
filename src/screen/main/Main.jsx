import {Message} from "../../component/Message";
import Loader from "../../component/Loader";
import {Search} from "./component/Search";
import {DevList} from "./component/DevList";
import {Dev} from "./component/Deve";
import {listUsers} from "../../action/userActions";
import {useDispatch, useSelector} from "react-redux";
import React, {  useEffect } from 'react'
import {listProject} from "../../action/projectActions";

 export function Main() {

    const dispatch = useDispatch()
     const userList = useSelector(state => state.userList)
     const { loading, error, users } = userList

    useEffect(() => {
            if (!users || users.length === 0) {
                dispatch(listUsers())
                dispatch(listProject())
            }


    }, [loading, error,dispatch, users])



    return (<div>
            {/*{!keyword && <ProductCarousel/>}*/}

            {loading ? <Loader/>
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <main className="home">
                        <Search />
                        <DevList>

                            {users.map((pro) => {
                                    return <Dev key={pro.id} profile={pro}/>
                                }
                            )
                            }
                        </DevList>
                    </main>
            }
        </div>
    )

}


