/**
 * Created by yongchunwu on 2018/8/5.
 */



export default () => (
    <div className="framework">
        <div className="tab-containers">
            <span className="tab-bg"></span>
            <span className="title">港口起重机系列</span>
        </div>
        <div className="item-containers">
            <div className="img-wrapper">
                <img src="/static/img/carousel-1.jpeg" alt=""/>
            </div>
            <div className="img-wrapper">
                <img src="/static/img/carousel-1.jpeg" alt=""/>
            </div>
        </div>
        <style jsx>{`
            .tab-containers {
                display: flex;
            }
            .tab-bg {
                display: inline-block;
                background-color: rgb(18,167,202);
                width: 10px;
                height: 40px;
            }
            .title {
                padding: 0 0 0 10px;
                font-size: 16px;
                display: inline-block;
                line-height: 40px;
            }
            .title:hover {
                color: rgb(18,167,202);
            }
            .item-containers {
                display: flex;
            }
            .img-wrapper {
                width: 235px;
                height: 300px;
                padding-right: 20px;
            }
            .img-wrapper img{
                width: 100%;
                height: 100%;
            }
        `}</style>
    </div>
)
