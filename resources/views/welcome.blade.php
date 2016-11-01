@extends('main')
@section('title')
    Welcome
@endsection
@section('content')
        @include('partials._carousel')
        {{--<section id="offer">
            @include('main.domainSearch')
        </section>--}}
        @include('main.whyChooseUs')
    
        {{--@include('main.vpsPricing')--}}
    
        {{--@include('main.services')--}}
	
	
	
        @include('main.testimonials')
	
	    {{--@include('main.pricingArea')--}}
        @include('main.subscribe')
	    {{--@include('main.blogArea')--}}
        @include('main.clientBrands')
	
	
	
    
    
    
    

    
@endsection