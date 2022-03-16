import { useState } from 'react';

interface useTabsProps<T> {
  initialKey: keyof T;
  allTabs: T;
}

const useTabs = <T,>({ initialKey, allTabs }: useTabsProps<T>) => {
  const [currentKey, setCurrentKey] = useState(initialKey);

  return {
    currentItem: allTabs[currentKey],
    setCurrentKey,
  };
};

export default useTabs;
