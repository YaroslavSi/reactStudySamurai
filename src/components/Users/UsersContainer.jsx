import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Prealoader';
import { usersAPI } from '../../api/api';
import { toggleFollowingProgress } from '../../redux/users-reducer';

class UsersContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    // } коли нічого не додаємо, то це за кадром і його видаляємо

    componentDidMount() {
        // this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                // this.props.toggleIsFetching(false);
                this.props.setUsers (data.items);
                this.props.setTotalUsersCount (data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers (data.items);
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
                toggleFollowingProgress = {this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
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
        ifFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.toggleFollowingProgress,
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
    { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress
    }) (UsersContainer);