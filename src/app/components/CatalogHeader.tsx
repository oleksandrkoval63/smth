'use client';

import { useEffect, useState } from 'react';
import SortDropdown from './SortDropdown';
import ViewToggle from './ViewToggle';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setSort, setViewState } from '../redux/sortSlice';
import { SortKey } from '../utils/sortProducts';
import ProductSearch from './productSearch';


type CatalogHeaderProps = {
   count : number;
}

export default function CatalogHeader({count}: CatalogHeaderProps) {
   const dispatch = useDispatch<AppDispatch>()
  const [sorting, setSorting] = useState('default');
  const [view, setView] = useState<string>('grid');

  const handleChangeSort = (e: string) => {
     setSorting(e)
  }
  const handleChangeView = (view: string) => {
     setView(view)
  }

  useEffect(() => {
   dispatch(setSort(sorting as SortKey))
   dispatch(setViewState(view as string))
  }, [sorting, dispatch, view])

  return (
    <div className="flex flex-wrap items-center  gap-4">
      <p className="text-sm">
        Selected: <span className="font-semibold">{count} goods</span>
      </p>
      <div className='flex gap-8 items-center w-full justify-between'>
         <ProductSearch />
         <div className='flex items-center gap-4'>
            <SortDropdown value={sorting} onChange={handleChangeSort} />
            <ViewToggle mode={view} onToggle={handleChangeView} />
         </div>
      </div>
    </div>
  );
}
