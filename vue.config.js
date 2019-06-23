module.exports = {
    devServer:{
        proxy:{
            "/baidumusic":{
                target:"http://tingapi.ting.baidu.com",
                ws:true,
                changeOrigin: true,
                pathRewrite:{
                    "^/baidumusic":""
                }
            },
            "/qqmusic":{
                target:"https://c.y.qq.com",
                ws:true,
                changeOrigin: true,
                pathRewrite:{
                    "^/qqmusic":""
                }
            },
            "/ws":{
                target:"https://ws.stream.qqmusic.qq.com",
                ws:true,
                changeOrigin: true,
                pathRewrite:{
                    "^/ws":""
                }
            },
        },
        disableHostCheck:true
    }
}