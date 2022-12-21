import { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className="animate-pulse flex space-x-4 p-4 h-36">
      <div className="rounded-md bg-slate-700 w-48"></div>
      <div className="flex-1 space-y-6 py-1 flex items-center">
        <div className="h-6 bg-slate-700 rounded w-full"></div>
      </div>
    </div>
  );
};

Loading.displayName = 'Loading';

export default Loading;
