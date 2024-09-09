import { HomeContentType, RecordsType } from "@/types";

export type AuthFieldType = "login" | "password";

export interface State {
    content: HomeContentType | null,
    records: RecordsType | null,

    changeContent: (value: HomeContentType) => void,
    changeRecords: (value: RecordsType) => void,
}