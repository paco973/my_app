
// import {USER} from "../../user";


import {Message} from "../../component/Message";
import Loader from "../../component/Loader";
import {Search} from "./component/Search";
import {DevList} from "./component/DevList";
import {USER} from "../../user";
import {Dev} from "./component/Deve";
import {listUsers} from "../../action/userActions";
// import {useEffect} from "react";
import { useSelector} from "react-redux";

export function Main({history}) {

    // const dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
    const {error, loading, products, page, pages} = userList

    // let keyword = history.location.search

    // useEffect(() => {
    //     dispatch(listUsers(keyword))
    //
    // }, [dispatch, keyword])

    return (
        <div>
            {/*{!keyword && <ProductCarousel/>}*/}

            <h1>Latest Products</h1>
            {loading ? <Loader/>
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <main className="home">
                        <Search filtre={this.state.filtre} handleSeardev={this.handleSeardev}/>
                        <DevList>

                            {USER.filter(user => {
                                return user.username.toLowerCase().includes(this.state.filtre.toLowerCase());
                            }).map((pro) => {
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

