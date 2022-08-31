import React, { useState, useEffect } from 'react'
import '../css/style.scss'
import { Button } from 'react-bootstrap'
import ProductCarousel from 'carousel-react-rcdev'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
	
	const [showPopup, setShowPopup] = useState(false);
	const [popupShown, setPopupShown] = useState(false);
	const [subscribed, setSubscribed] = useState(false);
	const [index, setIndex] = useState(0);
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		babies: 0
	});

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	window.addEventListener('scroll', () => {
		const docHeight = window.document.body.offsetHeight;
		const windowHeight = window.innerHeight;
		const scrollTop = window.scrollY;
		const scrollBottom = docHeight - windowHeight - scrollTop;
		if (scrollBottom < 40 && !popupShown) {
			setShowPopup(true);
		}
	});

	const _handleClick = () => {
		setShowPopup(false);
		setPopupShown(true);
	}


	async function onSubmit(e) {
		e.preventDefault();
		setSubscribed(true);

		const newSignup = {...form};

		await fetch("http://localhost:3000/signups", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newSignup),
		})
		.catch(error => {
			window.alert(error);
			return;
		});

		setForm({ firstName: "", lastName: "", email: "", babies: 0 });
	}

	function updateForm(value) {
		return setForm((prev) => {
			return { ...prev, ...value };
		});
	}

	return (
		<div>
			<header>
				<h1 id='title'>Storkr</h1>
			</header>

			<div className="banner">
				<h2>We Won't Kill Your Baby</h2>
			</div>

			<main>
				<h2>Who Are We?</h2>
				<p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex officia aperiam ratione quis voluptatum placeat optio error consequatur fugit distinctio assumenda fugiat quisquam, omnis eveniet laboriosam recusandae at facere?</p>
				
				<div className='products'>
					<h2>Products</h2>
					<ProductCarousel style={{ width: '100%'}}>
						<div className='drone'>
							<div className='drone-icon' id='storkr9000'></div>
							<div className='title-price text-center'>
								<p>Storkr 9000<span style={{ display: 'block' }}>$9999.99</span></p>
							</div>
						</div>
						
						<div className='drone'>
							<div className='drone-icon' id='storkr6000'></div>
							<div className='title-price text-center'>
								<p>Storkr 9000<span style={{ display: 'block' }}>$9999.99</span></p>
							</div>
						</div>
						
						<div className='drone'>
							<div className='drone-icon' id='storkr3000'></div>
							<div className='title-price text-center'>
								<p>Storkr 9000<span style={{ display: 'block' }}>$9999.99</span></p>
							</div>
						</div>
						
						<div className='drone'>
							<div className='drone-icon' id='storkrOG'></div>
							<div className='title-price text-center'>
								<p>Storkr 9000<span style={{ display: 'block' }}>$9999.99</span></p>
							</div>
						</div>
					</ProductCarousel>
				</div>

				<div className='testimonials'>
					<h2>Testimonials</h2>

					<Carousel activeIndex={ index } onSelect={ handleSelect } id="testimonial-carousel" className="carousel slide" data-bs-ride="carousel">
							
						<Carousel.Item>
							<div className="testimonial">
								<div id='testimonial-one' className='icon'></div>
								<div className='testimonial-text'>
									<h3>Ben & Eileen Dover</h3>
									<p>"After buying a Storkr drone, our baby can go anywhere with us! Whether it's a stroll around town or a shopping trip, our little angel is always floating around us."</p>
								</div>
							</div>
						</Carousel.Item>

						<Carousel.Item>
							<div className="testimonial">
								<div id='testimonial-two' className='icon'></div>
								<div className='testimonial-text'>
									<h3>Jenna Taylor</h3>
									<p>"Storkr drone is great!! I no longer have to worry about bringing a pram when going out. My Storkr drone is my baby's new father as her real father left us."</p>
								</div>
							</div>
						</Carousel.Item>
					</Carousel>
				</div>

				<h2>Safety</h2>
				<p className='content'>Storkr drones are one of the safest modes of transport for your little ones. They are approved by the ABDS (Australian Baby Drone Safety).</p>
				<p className='content'>Storkr drones have built in safety features to emergency land the baby in case of any malfunctions which have a less than 1% chance of happening*. <span className='disclaimer' style={{ display: 'block' }}>*Testing done on 11 babies</span></p>
			</main>

			<aside>
				<h2>{ subscribed ? "Congrats!" : "Newsletter" }</h2>
				{ subscribed ?
					<span className='text-center'>
						<br />
						<h3>You are now a Storkr!</h3>
						<br />
						<p>You have now unlocked the secret to stress free parenthood!</p>
						<p>We have sent you an email containing this month's tips and tricks, keep a look out for our monthly emails and promotions!</p>
						<br />
						<p>Always remember, <span style={{ display: 'block' }}><h3>We Won't Kill Your Baby</h3></span></p>
					</span>
					:
					<span>
						<p>Subscribe to our newsletter to get all our tips and tricks to entertain and relax your baby using the Storkr drone!</p>

						<form onSubmit={ onSubmit }>
								<label>
									First Name
									<input required type="text" />
								</label>
								<label>
									Last Name
									<input required type="text" />
								</label>
								<label>
									Email
									<input required type="email" />
								</label>
								<label>
									No. of Babies
									<input required type="number" />
								</label>

							<Button type='submit' className='subscribe d-flex btn-dark' style={{ opacity: '0.7'}}>Subscribe Now</Button>
							
						</form>
						<p className='disclaimer'>By entering your details you agree to our Terms of Use and Privacy Policy and consent to receive emails from Storkr about news, offers and partner promotions.</p>
					</span>
				}
			</aside>

			<div className="newsletter" style={{ visibility: `${ showPopup && !popupShown ? 'visible' : '' }`}}>
				<div className='x' onClick={ _handleClick }>x</div>
				<h2 className='letterhead'>{ subscribed ? "Congrats!" : 'Newsletter' }</h2>
				
				<div className='letterbody'>
					{ subscribed ? 
						<span className='text-center'>
							<h3>You are now a Storkr!</h3>
							<br />
							<p className='popout-content congrats'>You have now unlocked the secret to stress free parenthood!</p>
							<p className='popout-content congrats'>We have sent you an email containing this month's tips and tricks, keep a look out for our monthly emails and promotions!</p>
							<br />
							<p>Always remember, <span style={{ display: 'block' }}><h3>We Won't Kill Your Baby</h3></span></p>
						</span> 
						:
						<span>
							<p className='popout-content'>Subscribe to our newsletter to get all our tips and tricks to entertain and relax your baby using the Storkr drone!</p>

							<form onSubmit={ onSubmit } className='popout'>
								<label>
									First Name
									<input 
										value={ form.firstName }
										onChange={(e) => updateForm({ firstName: e.target.value })}
										required 
										className='inpopoutput' 
										type="text" 
									/>
								</label>
								<label>
									Last Name
									<input 
										value={ form.lastName }
										onChange={(e) => updateForm({ lastName: e.target.value })}
										required 
										className='inpopoutput' 
										type="text" 
									/>
								</label>
								<label>
									Email
									<input 
										value={ form.email }
										onChange={(e) => updateForm({ email: e.target.value })}
										required 
										className='inpopoutput' 
										type="email" 
									/>
								</label>
								<label>
									No. of Babies
									<input 
										value={ form.babies }
										onChange={(e) => updateForm({ babies: e.target.value })}
										required 
										className='inpopoutput' 
										type="number" 
									/>
								</label>

								<Button type='submit' className='subscribe d-flex btn-dark' style={{ opacity: '0.7'}}>Subscribe Now</Button>

							</form>
							<p className='disclaimer' style={{ padding: '0 4em' }}>By entering your details you agree to our Terms of Use and Privacy Policy and consent to receive emails from Storkr about news, offers and partner promotions.</p>
						</span>
					}
				</div>
			</div>

			<div className='blur' style={{ visibility: `${ showPopup && !popupShown ? 'visible' : '' }` }}>
			</div>
		</div>
	)
}
