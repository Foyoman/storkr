import React, { useState, useEffect } from 'react'
import '../css/style.scss'
import { Button } from 'react-bootstrap'

export default function Home() {
	const [showPopup, setShowPopup] = useState(false);
	const [popupShown, setPopupShown] = useState(false);
	const [subscribed, setSubscribed] = useState(false);

	window.addEventListener('scroll', () => {
		// console.log(e)
		// console.log(window.scrollY)
		// console.log(window.document.body.offsetHeight)
		const docHeight = window.document.body.offsetHeight;
		const windowHeight = window.innerHeight;
		const scrollTop = window.scrollY;
		const scrollBottom = docHeight - windowHeight - scrollTop;
		console.log(scrollBottom)
		if (scrollBottom < 40 && !popupShown) {
			setShowPopup(true);
		}
	});

	const _handleClick = () => {
		setShowPopup(false);
		setPopupShown(true);
	}

	const _handleSubmit = () => {
		setSubscribed(true)
	}
	
	return (
		<div>
			<header>
				<h1>Storkr</h1>
			</header>

			<div className="banner">
				<h2>We Won't Kill Your Baby</h2>
			</div>

			<main>
				<h2>Who Are We?</h2>
				<p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex officia aperiam ratione quis voluptatum placeat optio error consequatur fugit distinctio assumenda fugiat quisquam, omnis eveniet laboriosam recusandae at facere?</p>
				
				<div className='products'>
					<h2>Products</h2>
				</div>

				<div className='testimonials'>
					<h2>Testimonials</h2>

					<div id="testimonial-carousel" className="carousel slide" data-bs-ride="carousel">
						<div className="carousel-inner">
							
							<div className="carousel-item active">
								<div className="testimonial">
									<div id='testimonial-one' className='icon'></div>
									<div className='testimonial-text'>
										<h3>Ben & Eileen Dover</h3>
										<p>"After buying a Storkr drone, our baby can go anywhere with us! Whether it's a stroll around town or a shopping trip, our little angel is always floating around us."</p>
									</div>
								</div>
							</div>

							<div className="carousel-item">
								<div className="testimonial">
									<div id='testimonial-two' className='icon'></div>
									<div className='testimonial-text'>
										<h3>Jenna Taylor</h3>
										<p>"Storkr drone is great!! I no longer have to worry about bringing a pram when going out. My Storkr drone is my baby's new father as her real father left us."</p>
									</div>
								</div>
							</div>

						</div>
						{/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button> */}
					</div>
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

						<form onSubmit={ _handleSubmit }>
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

							<form onSubmit={ _handleSubmit } className='popout'>
								<label>
									First Name
									<input required className='inpopoutput' type="text" />
								</label>
								<label>
									Last Name
									<input required className='inpopoutput' type="text" />
								</label>
								<label>
									Email
									<input required className='inpopoutput' type="email" />
								</label>
								<label>
									No. of Babies
									<input required className='inpopoutput' type="number" />
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
