import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from './Profile/user.json';
import data from './Statistics/data.json';

// console.log(user);
export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        paddingTop: '50px',
        paddingBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        // backgroundColor: '#787979',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
