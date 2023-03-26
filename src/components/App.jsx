import { User } from './user/User';
import user from '../jsons/user.json';
import { Statistics } from './statistic/Statistics';
import data from '../jsons/data.json';
import { FriendList } from '../components/friends/FriendList/FriendList';
import friends from '../jsons/friends.json';
import { TransactionHistory } from '../components/Transaction/TransactionHistory';
import transactions from '../jsons/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 100,
      }}
    >
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
