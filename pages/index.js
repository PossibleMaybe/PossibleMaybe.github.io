import React, {PureComponent} from 'react';
import Head from 'next/head';
import Button from 'antd/lib/button';
import Carousel from 'antd/lib/carousel';
import Icon from 'antd/lib/icon';
import Item from '../components/tab';
console.log(Item);
import '../style.css';




export default class Home extends PureComponent {
	

	renderHeader = () => {
		return (
				<div className="outer-framework">
					<div className="fix-header">
						<div className="theme-bg">
							<div className="framework home-header">
								<div className="home-logo">
									港机销售
								</div>
								<div className="home-contact">
									<span className="mail-icon"><Icon spin={true} style={{'margin-right': '5px', 'font-size': '18px'}} type="mail" />youlikeisthebest@163.com</span>
									<span><Icon spin={true} style={{'margin-right': '5px', 'font-size': '18px'}} type="mobile" />17602170958</span>
								</div>
							</div>
						</div>
					</div>
				<style jsx>{`
						.outer-framework {
							height: 60px;
						}
						.fix-header {
							width: 100%;
							position: fixed;
							z-index: 10;
						}
						.home-header {
							color: #fff;
							display: flex;
							justify-content: space-between;
							align-items: center;
						}
						.home-logo {
							font-size: 40px;
							font-family: 'Righteous', cursive;
						}
						.mail-icon {
							padding-right: 10px;
						}
					`}</style>
				</div>
				
			)
	}
	renderCarousel = () => {
		return (
				<div className="framework">
					<Carousel autoplay>
					    <div className="carousel-img"><img src="/static/img/carousel-1.jpeg" /></div>
					    <div className="carousel-img"><img src="/static/img/carousel-2.jpeg" /></div>
					    <div className="carousel-img"><img src="/static/img/carousel-3.jpeg" /></div>
			    	</Carousel>
			    	<style jsx>{`
			    		.carousel-img {
							height: 400px;
						}
						.carousel-img img {
							width: 100%;
							height: 400px;
						}
		    		`}</style>
				</div>
				
			)

	}

	renderBottom = () => {
		return (
			<div className="bottom-bg">
				<div className="framework bottom-wrapper">
					<div className="flex-1"> 
						<div>
							<div className="dot-border">
								<Icon type="environment-o" style={{'font-size': '18px', 'color': 'rgb(18,167,202)'}} />
							</div>
						</div>
						<h3>Address</h3>
						<p>江苏省无锡市惠山区阳山镇</p>
					</div>
					<div className="flex-1">
						<div>
							<div className="dot-border">
								<Icon type="mobile" style={{'font-size': '18px', 'color': 'rgb(18,167,202)'}} />
							</div>
						</div>
						<h3>Call Us</h3>
						<p>17602170958</p>
					</div>
					<div className="flex-1">
						<div>
							<div className="dot-border">
								<Icon type="wechat" style={{'font-size': '18px', 'color': 'rgb(18,167,202)'}} />
							</div>
						</div>
						<h3>wechat</h3>
						<p></p>
					</div>
				</div>
				<style jsx>{`
					.bottom-bg {
						padding: 40px 0;
						background: rgb(34,34,34);
					}
					.bottom-wrapper {
						color: #fff;
						display: flex;
					}
					.flex-1 {
						flex: 1;
					}
					.dot-border {
						margin: 0 auto;
						border: 1px dotted rgb(18,167,202);
						width: 40px;
						height: 40px;
						box-sizing: border-box;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					h3 {
						font-family: 'Righteous', cursive;
						color: rgb(18,167,202);
						font-size: 20px;
						text-align: center;
						padding: 10px 0;
					}
					p {
						font-family: 'Righteous', cursive;
						text-align: center;
					}
				`}</style>
			</div>
		)

	}

	render() {
		return (
			<div>
				<Head>
					<title>home</title>
				    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
				    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.6.3/antd.css'/>
				</Head>
				<div>
					{this.renderHeader()}
					{this.renderCarousel()}
					<Item />
					{this.renderBottom()}

				</div>
				<style jsx>{`
					.home-header {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
					
				`}</style>
			</div>
		)
	}
}	
