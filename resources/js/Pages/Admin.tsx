import React from 'react'

export default function Admin() {
  return (
    <div>


	<section id="sidebar">
		<a href="#" className="brand">
			<i className='bx bxs-smile'></i>
			<span className="text">AdminHub</span>
		</a>
		<ul className="side-menu top">
			
			<li>
				<a href="#">
					<i className='bx bxs-shopping-bag-alt' ></i>
					<span className="text">My Store</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i className='bx bxs-doughnut-chart' ></i>
					<span className="text">Analytics</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i className='bx bxs-message-dots' ></i>
					<span className="text">Message</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i className='bx bxs-group' ></i>
					<span className="text">Team</span>
				</a>
			</li>
		</ul>
		<ul className="side-menu">
			<li>
				<a href="#">
					<i className='bx bxs-cog' ></i>
					<span className="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" className="logout">
					<i className='bx bxs-log-out-circle' ></i>
					<span className="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>





	<section id="content">

		<nav >
    <div className="head-title">
				<div className="left">
					<ul className="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i className='bx bx-chevron-right' ></i></li>
						<li>
							<a className="active" href="#">Home</a>
						</li>
					</ul>
				</div>
			</div>
      <nav>
			<a href="#" className="notification">
				<i className='bx bxs-bell' ></i>
				<span className="num">8</span>
			</a>
			<a href="#" className="profile">
				<img src="img/people.png"/>
			</a>
      </nav>
		</nav>

		
		<main>
		

			<ul className="box-info">
				<li>
					<i className='bx bxs-calendar-check' ></i>
					<span className="text">
						<h3>1020</h3>
						<p>New Order</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-group' ></i>
					<span className="text">
						<h3>2834</h3>
						<p>Visitors</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-dollar-circle' ></i>
					<span className="text">
						<h3>$2543</h3>
						<p>Total Sales</p>
					</span>
				</li>
			</ul>


			<div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Recent Orders</h3>
						<i className='bx bx-search' ></i>
						<i className='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>User</th>
								<th>Date Order</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src="img/people.png"/>
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png"/>
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png"/>
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status process">Process</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png"/>
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png"/>
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="todo">
					<div className="head">
						<h3>Todos</h3>
						<i className='bx bx-plus' ></i>
						<i className='bx bx-filter' ></i>
					</div>
					<ul className="todo-list">
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="not-completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li className="not-completed">
							<p>Todo List</p>
							<i className='bx bx-dots-vertical-rounded' ></i>
						</li>
					</ul>
				</div>
			</div>
		</main>

	</section>

	

	<script src="script.js"></script>
</div>
  )
}
