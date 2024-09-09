import api from "@/api"
import useGlobalStore from "@/store"
import { useCallback, useEffect } from "react"

const HomeContent = () => {
    const { changeContent, changeRecords } = useGlobalStore()

    const getData = useCallback(async () => {
        const contentResponse = await api.home.getContent()
        const recordsResponse = await api.home.getRecords()

        changeContent(contentResponse.data)
        changeRecords(recordsResponse.data)
    }, [])

    useEffect(() => { getData() }, [getData])

    return null
}

export default HomeContent