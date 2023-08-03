// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
// _____________________________________________
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/Friendlist';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
const App = () => {
  return (
    <div className="proffile">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics className="stat" title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
