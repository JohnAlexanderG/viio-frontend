import { IoAccessibilityOutline, IoHeartOutline, IoListOutline, IoLockClosedOutline, IoPawOutline } from 'react-icons/io5';
import { WhiteCard } from '../../components';

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        <WhiteCard centered>
          <IoPawOutline size={50} className="text-indigo-600" />
        </WhiteCard>


        <WhiteCard centered>
          <IoAccessibilityOutline size={50} className="text-indigo-600" />
        </WhiteCard>


        <WhiteCard centered>
          <IoListOutline size={50} className="text-indigo-600" />
        </WhiteCard>


        <WhiteCard centered>
          <IoHeartOutline size={50} className="text-indigo-600" />
        </WhiteCard>


        <WhiteCard centered>
          <IoLockClosedOutline size={50} className="text-indigo-600" />
        </WhiteCard>


      </div>

    </>
  );
};