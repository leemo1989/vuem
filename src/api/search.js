import axios from 'axios'

export const gethotkey=()=>{
	const url ='/qqmusic/splcloud/fcgi-bin/gethotkey.fcg'
	console.log(url,111)
    return axios.get(url)
        .then(res=>{
			console.log(res.data.data,66666666666666)
        }).catch(error=>{
            console.log(error,5555)
    })
}
