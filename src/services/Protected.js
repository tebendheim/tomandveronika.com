import { Navigate } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

export const ProtectedAdmin = ({ children }) => {
	const state = useSelector((state) => state.auth);
	if (!state.user.Roles.includes('ROLE_admin')) {
		return <Navigate to='/404' replace />;
	}
	console.log(state.isLoggedIn);
	if (!state.isLoggedIn) {
		return <Navigate to='/404' replace />;
	}
	return children;
};

export const ProtectedModerator = ({ children }) => {
	const state = useSelector((state) => state.auth);
	if (!state.user.Roles.includes('ROLE_moderator')) {
		return <Navigate to='/404' replace />;
	}
	console.log(state.isLoggedIn);
	if (!state.isLoggedIn) {
		return <Navigate to='/404' replace />;
	}
	return children;
};
export const ProtectedUser = ({ children }) => {
	const state = useSelector((state) => state.auth);
	if (!state.user.Roles.includes('ROLE_user')) {
		return <Navigate to='/404' replace />;
	}
	console.log(state.isLoggedIn);
	if (!state.isLoggedIn) {
		return <Navigate to='/404' replace />;
	}
	return children;
};
export const Protected = ({ children }) => {
	const state = useSelector((state) => state.auth);
	if (!state.isLoggedIn) {
		return <Navigate to='/404' replace />;
	}
	return children;
};

// Dette er måten å gjøre det i class component
/*
function mapStateToProps(state) {
	const { user } = state.auth;
	return {
		user,
	};
}
export default connect(mapStateToProps)(ProtecteAdmin);
*/
//export default ProtectedAdmin;
