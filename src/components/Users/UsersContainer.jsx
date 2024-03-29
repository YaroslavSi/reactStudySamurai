import React from 'react';
import { connect } from 'react-redux';
import { follow, requestUsers, setCurrentPage, unfollow } from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Prealoader';
import { usersAPI } from '../../api/api';
import { toggleFollowingProgress } from '../../redux/users-reducer';
import { compose } from 'redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { getTotalUsersCount, getUsers, getPageSize, getCurrentPage, getFollowingInProgress, getIsFetching, getUsersSuper, getUsersSuperSelector } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    // } коли нічого не додаємо, то це за кадром і його видаляємо

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
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
                followingInProgress = {this.props.followingInProgress}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.pageSize,
//         currentPage: state.usersPage.currentPage,
//         ifFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.toggleFollowingProgress,
//     }
// };

let mapStateToProps = (state) => {
    return {
        // users: getUsers(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        ifFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
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


export default compose(
    withAuthNavigate,
    connect (mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers,}),
) (UsersContainer)