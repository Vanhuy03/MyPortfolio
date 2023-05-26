const Header = () =>{
    return`	<div class='preloader'><div class='loaded'>&nbsp;</div></div>
	
	<header id="home" class="header">
		<div class="main_menu_bg navbar-fixed-top">
			<div class="container">
				<div class="row">
					<div class="nave_menu">
					<nav class="navbar navbar-default">
					  <div class="container-fluid">
						<!-- Brand and toggle get grouped for better mobile display -->
						<div class="navbar-header">
						  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						  </button>
						  <a class="navbar-brand" href="#">
							<div class="logo">
								<img src="images/logo.png" alt="" />
							</div>
						  </a>
						</div>

						<!-- Collect the nav links, forms, and other content for toggling -->
						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						  
						  <ul class="nav navbar-nav navbar-right">
							<li class="active"><a href="#home">Home</a></li>
							<li><a href="#abouts">ABOUT</a></li>
							<li><a href="#service">Service</a></li>
							<li><a href="#portfolio">Portfolio</a></li>
							<li><a href="#team">Team</a></li>
							<li><a href="#blog">Blog</a></li>
							<li><a href="#contact">Contact</a></li>
							
						  </ul>
						</div><!-- /.navbar-collapse -->
					  </div><!-- /.container-fluid -->
					</nav>
					</div>	
				</div><!--End of row -->
				
			</div><!--End of container -->
			
		</div>
	</header> <!--End of header -->
	
	
	
	<section id="banner" class="banner">
		<div class="container">
			<div class="row">
				<div class="main_banner_area text-center">
					<div class="col-md-12 col-sm-12">
						<div class="single_banner_text wow zoomIn" data-wow-duration="1s">
							<h2 style="color:white";>Helo Everyone</h2>
                            <h3 style="color:white">I'm Văn Huy</h3>
							<h4 style="color:orange">I'm Front-end Web Developer</h4>
							
							<div class="separetor"></div>
						</div>
					</div>
					
					
					<div class="scrolldown">
						<a href="#abouts" class="scroll_btn"></a>
					</div>
				</div>
				
				
			</div>
		</div>
	</section><!-- End of Banner Section -->`
};
export default Header;