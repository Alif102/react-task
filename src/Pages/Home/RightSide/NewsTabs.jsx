import { useState } from 'react';
import NewsTabScroll from './NewsTabScroll';

const NewsTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="bg-[#D9D9D9] w-[100%] h-[490px]">
      <div className="flex ">
        <button
          className={` py-2 ${
            activeTab === 1 ? 'bg-[#BDBDBD] text-black' : 'bg-[#D9D9D9]'
          }`}
          onClick={() => setActiveTab(1)}
        >
          সর্বশেষ
        </button>
        <button
          className={` py-2 ${
            activeTab === 2 ? 'bg-[#BDBDBD] text-black' : 'bg-[#D9D9D9]'
          }`}
          onClick={() => setActiveTab(2)}
        >
          সর্বোচ্চ পঠিত
        </button>
      </div>
      <div
        className="mt-4 h-96 overflow-y-scroll"
        style={{ background: activeTab === 1 ? '#BDBDBD' : '#D9D9D9' }}
      >
        {activeTab === 1 && (
          <div className="p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus ex vel dui fermentum, nec faucibus velit feugiat.
              Vivamus vitae fringilla elit. Cras rutrum libero vitae risus
              condimentum, a tristique turpis convallis. Vestibulum quis nisl
              lacinia, faucibus enim sed, blandit est. Proin posuere leo at
              est ultricies, nec convallis mi mattis. Sed eget nisl sed dolor
              interdum ultrices sed id neque. Proin at ligula nec mauris
              lobortis ultricies. Nam euismod diam at diam maximus, in finibus
              lorem venenatis. Vivamus consequat, est nec fermentum pharetra,
              risus nulla commodo purus, at scelerisque turpis magna sed
              lorem. Fusce congue justo felis, at cursus tortor suscipit a.
              Nullam vel velit ac turpis suscipit tempus. Ut pellentesque nunc
              justo, sit amet posuere magna efficitur at. Vestibulum id
              condimentum nulla, et ultrices risus.
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div className="p-4">
            <NewsTabScroll/>
          </div>
        )}
      </div>
      <div className='bg-[#BDBDBD] w-full mt-4 h-8'>
<h1 className=' text-center p-1 font-bold'>আজকের সব খবর</h1>
      </div>
    </div>
  );
};

export default NewsTabs;
