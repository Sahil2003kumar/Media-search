//startind result grid
import React, { useEffect } from 'react'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const ResultGrid = () => {

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    const getData = async () => {

        let data

        if (activeTab == 'photos') {
            let response = await fetchPhotos(query)
            //doing normalization
            data = response.results.map((item)=>({
                id:item.id,
                type:'photo',
                title:item.alt_description,
                thumbnail:item.urls.small,
                src:item.urls.full
            }))
        }
        if (activeTab == 'video') {
            let response = await fetchVideos(query)
            data = response.videos
        }
        console.log(data)

    }

    useEffect(function () {
        getData()
    }, [query, activeTab])
    return (
        <div>

        </div>
    )
}

export default ResultGrid