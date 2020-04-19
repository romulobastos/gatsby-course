import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';
import Avatar from '../Avatar';

const Profile = () => {
	const {
		site: {
			siteMetadata: { title, position, description },
		},
	} = useStaticQuery(graphql`
		query MySiteMetadata {
			site {
				siteMetadata {
					title
					position
					description
				}
			}
		}
	`);

	return (
		<S.ProfileWrapper className='Profile-wrapper'>
			<Avatar />
			<S.ProfileAuthor>{title}</S.ProfileAuthor>
			<S.ProfilePosition>{position}</S.ProfilePosition>
			<S.ProfileDescription>{description}</S.ProfileDescription>
		</S.ProfileWrapper>
	);
};

export default Profile;
