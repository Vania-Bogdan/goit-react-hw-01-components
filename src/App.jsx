import Profile from "./components/Profile";
import Stats from "./components/Stats";
import Friends from "./components/Friends";
import TransactionHistory from "./components/TransactionHistory";

import user from './data/user.json'
import data from './data/data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#4cba70',
        paddingLeft: '50%'
      }}
    >
      {<Profile {...user} />}
      <Stats title="Upload stats" stats={data} />
      <Stats title="" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
