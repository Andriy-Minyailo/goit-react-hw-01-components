import { Avatar, Description, Label, Li, Location, Name, Quantity, Stats, Tag, Wrapper } from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <Wrapper >
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <Li>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </Li>
    <Li>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </Li>
    <Li>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </Li>
  </Stats>
</Wrapper>)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  // stats: PropTypes.object.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}