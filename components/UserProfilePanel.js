import React from 'react';
import ProfilePanel from './ProfilePanel';
import UserContext from '../contexts/UserContext';

export default ({ onPress }) => (
	<UserContext.Consumer>
		{({ user }) => (
			<ProfilePanel editable name={user.name} role={user.role} avatarSource={user.photo} onPress={onPress} />
		)}
	</UserContext.Consumer>
);
