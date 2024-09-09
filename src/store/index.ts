import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { State } from './types'
import { HomeContentType, RecordsType } from '@/types'

const useGlobalStore = create<State>()(devtools((set) => ({
    content: null,
    records: null,

    changeContent: (value: HomeContentType) => set({ content: value }),
    changeRecords: (value: RecordsType) => set({ records: value }),
})))

export default useGlobalStore