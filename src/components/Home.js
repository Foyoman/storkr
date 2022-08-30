import React from 'react'
import '../css/style.scss'

export default function Home() {
	return (
		<div>
			<header>
				<h1>Storkr</h1>
			</header>

			<div class="banner">
				<h2>We Won't Kill Your Baby</h2>
			</div>

			<main>
				<h2>Who Are We</h2>
				<p class='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex officia aperiam ratione quis voluptatum placeat optio error consequatur fugit distinctio assumenda fugiat quisquam, omnis eveniet laboriosam recusandae at facere?</p>
				
				<div class='products'>
					<h2>Products</h2>
				</div>

				<div class='testimonials'>
					<h2>Testimonials</h2>

					<div id="testimonial-carousel" class="carousel slide" data-bs-ride="carousel">
						<div class="carousel-inner">
							
							<div class="carousel-item active">
								<div class="testimonial">
									<div id='testimonial-one' class='icon'></div>
									<div class='testimonial-text'>
										<h3>Ben & Eileen Dover</h3>
										<p>After buying a Storkr drone, our baby can go anywhere with us! Whether it's a stroll around town or a shopping trip, our little angel is always floating around us.</p>
									</div>
								</div>
							</div>

							<div class="carousel-item">
								<div class="testimonial">
									<div id='testimonial-two' class='icon'></div>
									<div class='testimonial-text'>
										<h3>Jenna Taylor</h3>
										<p>Storkr drone is great!! I no longer have to worry about bringing a pram when going out. My Storkr drone is my baby's new father as her real father left us.</p>
									</div>
								</div>
							</div>

						</div>
						{/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Next</span>
						</button> */}
					</div>
				</div>

				<h2>Safety</h2>
				<p class='content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum incidunt facilis dicta reprehenderit error, deleniti recusandae magni sed minus sit cum vitae, amet eum dolorem. Consequatur ea culpa vitae ut.</p>
			</main>

			<aside>
				<h2>Newsletter</h2>
				<p>Subscribe to our newsletter to get all our tips and tricks to entertain and relax your baby using the Storkr drone!</p>

					<form>
						<div class='form'>
							<label>
								First Name
								<input type="text" />
							</label>
							<label>
								Last Name
								<input type="text" />
							</label>
							<label>
								Email
								<input type="email" />
							</label>
							<label>
								No. of Babies
								<input type="number" />
							</label>
						</div>

						<button class='btn subscribe'>Subscribe Now</button>

						<p class='disclaimer'>By entering your details you agree to our Terms of Use and Privacy Policy and consent to receive emails from Storkr about news, offers and partner promotions.</p>
					</form>
			</aside>

			<div class="newsletter">

				<h2 class='letterhead'>Newsletter</h2>

				<div class='letterbody'>
					<p>Subscribe to our newsletter to get all our tips and tricks to entertain and relax your baby using the Storkr drone!</p>

					<form>
						<div class='form popout'>
							<label>
								First Name
								<input class='inpopoutput' type="text" />
							</label>
							<label>
								Last Name
								<input class='inpopoutput' type="text" />
							</label>
							<label>
								Email
								<input class='inpopoutput' type="email" />
							</label>
							<label>
								No. of Babies
								<input class='inpopoutput' type="number" />
							</label>
						</div>

						<button class='btn subscribe'>Subscribe Now</button>

						<p class='disclaimer'>By entering your details you agree to our Terms of Use and Privacy Policy and consent to receive emails from Storkr about news, offers and partner promotions.</p>
					</form>
				</div>
			</div>

			<div>
			</div>
		</div>
	)
}
