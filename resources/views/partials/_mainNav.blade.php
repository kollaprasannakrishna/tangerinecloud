<!-- Secondary Menu Start -->
        <nav id="secondaryMenu" class="navbar">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#secondaryNavbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Logo Start -->
                    <a class="navbar-brand" href="index.html"><span><i class="fa fa-server"></i> Tangerine</span> Cloud</a>
                    <!-- Logo End -->
                </div>
                <div id="secondaryNavbar" class="navbar-collapse collapse navbar-right reset-padding">
					<!-- Secondary Menu Links Start -->
                    <ul class="secondary-menu-links nav navbar-nav">
                        <li>
                            <a href="/"><i class="fa fa-home fa-fw"></i>Home</a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-server fa-fw"></i>Cloud Computing<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="{{route('aws-cloud')}}">Amazon Web Services (AWS)</a></li>
                                <li><a href="{{route('ibm-cloud')}}">IBM Cloud</a></li>
                                <li><a href="{{route('dedicatedHosting')}}">Rackspace Managed Hosting</a></li>
                                <li><a href="{{route('dedicatedHosting')}}">Oracle Cloud</a></li>
                            </ul>
                        </li>
                        <li><a href="{{route('domainSearch')}}"><i class="fa fa-at fa-fw"></i>Web Hosting</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-newspaper-o fa-fw"></i>Cloud Commerce <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="{{route('blog')}}">B2B/EDI in the cloud</a></li>
                                <li><a href="{{route('blog')}}">Web Content Management</a></li>
                                <li><a href="{{route('blog')}}">e-Commerce hosting</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-copy fa-fw"></i>office in the cloud <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="{{route('about')}}">Microsoft Exchange Hosting</a></li>
                                <li><a href="{{route('faq')}}">VOIP PBX Hosting</a></li>
                                <li><a href="{{route('datacenter')}}">Fixed Montly Pricing Cloud Server</a></li>
                                <li><a href="{{route('testimonials')}}">APP ID for Single Sign On</a></li>
                                <li><a href="{{route('login')}}">Office 365</a></li>
                                <li><a href="{{route('signup')}}">Hosted SharePoint</a></li>
                                {{--<li><a href="{{route('affliate')}}">Affiliate</a></li>--}}
                            </ul>
                        </li>

                        {{--<li><a href="contact.html"><i class="fa fa-envelope-o fa-fw"></i>Contact</a></li>--}}
                    </ul>
					<!-- Secondary Menu Links End -->
                    <div class="registration-links">
                        <a href="login.html" class="login btn btn-custom-reverse" role="button"><i class="fa fa-fw fa-user"></i> Login</a>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Secondary Menu End -->