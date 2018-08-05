import React, {PureComponent} from 'React';
import Carousel from 'antd/lib/carousel';

export default class HomeCarousel extends PureComponent {
	render() {
		return (
				  <Carousel autoplay>
				    <div><img src="/static/img/carousel-1.jpeg" /></div>
				    <div><img src="/static/img/carousel-2.jpeg" /></div>
				    <div><img src="/static/img/carousel-3.jpeg" /></div>
				  </Carousel>
			)
	}
}
