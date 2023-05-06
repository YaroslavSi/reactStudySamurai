import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Prealoader';

class UsersContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    // } коли нічого не додаємо, то це за кадром і його видаляємо

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                // this.props.toggleIsFetching(false);
                this.props.setUsers (response.data.items);
                this.props.setTotalUsersCount (response.data.totalCount);
            
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers (response.data.items);
        
        });
    }

    render() {
        return <> 
            { this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged = {this.onPageChanged}
                users = {this.props.users}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        ifFetching: state.usersPage.isFetching
    }
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     };
// }

export default connect (mapStateToProps, 
    { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching
    }) (UsersContainer);